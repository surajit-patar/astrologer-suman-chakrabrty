import { services } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import ServiceIcon from "./ServiceIcon";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase text-gold-soft/80">
            পরিষেবাসমূহ
          </p>
          <h2 className="section-heading text-gradient-gold text-3xl font-bold sm:text-4xl md:text-5xl pt-7">
            জ্যোতিষ পরামর্শের পূর্ণাঙ্গ জগৎ
          </h2>
          <p className="mt-4 text-moon/75">
            জীবনের প্রতিটি গুরুত্বপূর্ণ অধ্যায়ে বৈদিক জ্যোতিষের আলোকে সঠিক
            সিদ্ধান্ত নিতে সহায়তা করে আসছি।
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={(i % 4) * 0.08}>
              <div className="glass-card group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-gold-glow">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-void transition-transform duration-300 group-hover:scale-110">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="section-heading text-lg font-semibold text-gold-soft">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-moon/75">
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
