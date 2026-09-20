"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Layered star field for parallax depth
    const layers: THREE.Points[] = [];
    const layerConfigs = [
      { count: 900, spread: 300, size: 0.5, color: 0xf4e5c3, speed: 0.02 },
      { count: 600, spread: 450, size: 0.8, color: 0xd4af37, speed: 0.035 },
      { count: 350, spread: 200, size: 1.2, color: 0xffffff, speed: 0.012 },
    ];

    layerConfigs.forEach((cfg) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(cfg.count * 3);
      for (let i = 0; i < cfg.count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * cfg.spread;
        positions[i * 3 + 1] = (Math.random() - 0.5) * cfg.spread;
        positions[i * 3 + 2] = (Math.random() - 0.5) * cfg.spread;
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: cfg.color,
        size: cfg.size,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
      });
      const points = new THREE.Points(geometry, material);
      (points as any).userData.speed = cfg.speed;
      scene.add(points);
      layers.push(points);
    });

    // Soft nebula haze via sprite
    const nebulaGeo = new THREE.SphereGeometry(140, 32, 32);
    const nebulaMat = new THREE.MeshBasicMaterial({
      color: 0x2d1b4e,
      transparent: true,
      opacity: 0.06,
      side: THREE.BackSide,
    });
    const nebulaSphere = new THREE.Mesh(nebulaGeo, nebulaMat);
    scene.add(nebulaSphere);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    let t = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      t += 0.0018;

      if (!prefersReducedMotion) {
        layers.forEach((layer) => {
          const speed = (layer as any).userData.speed;
          layer.rotation.y += speed * 0.01;
          layer.rotation.x += speed * 0.004;
        });
        camera.position.x += (mouseX * 6 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 6 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
        nebulaSphere.rotation.y = t * 0.5;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      layers.forEach((l) => {
        l.geometry.dispose();
        (l.material as THREE.Material).dispose();
      });
      nebulaGeo.dispose();
      nebulaMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="starfield-canvas"
      aria-hidden="true"
      role="presentation"
    />
  );
}
