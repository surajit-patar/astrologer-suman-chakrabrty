"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import { services, chambers, siteInfo } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function BookingForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const bookingData = {
      name: formData.get("name")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      dob: formData.get("dob")?.toString() || "",
      tob: formData.get("tob")?.toString() || "",
      pob: formData.get("pob")?.toString() || "",
      location: formData.get("location")?.toString() || "",
      chamber: formData.get("chamber")?.toString() || "",
      service: formData.get("service")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    const whatsappMessage = `
নমস্কার, আমি অ্যাপয়েন্টমেন্ট নিতে চাই।

━━━━━━━━━━━━━━━━
অ্যাপয়েন্টমেন্টের তথ্য
━━━━━━━━━━━━━━━━

নাম: ${bookingData.name}

ফোন: ${bookingData.phone}

ইমেল: ${bookingData.email || "দেওয়া হয়নি"}

জন্মতারিখ: ${bookingData.dob}

জন্ম সময়: ${bookingData.tob || "দেওয়া হয়নি"}

জন্মস্থান: ${bookingData.pob || "দেওয়া হয়নি"}

বর্তমান অবস্থান: ${bookingData.location}

পরিষেবা: ${bookingData.service}

পছন্দের চেম্বার: ${bookingData.chamber}

বার্তা:
${bookingData.message || "কোনো অতিরিক্ত বার্তা নেই"}

━━━━━━━━━━━━━━━━

আমি অ্যাপয়েন্টমেন্টের সময় নিশ্চিত করতে চাই।

ধন্যবাদ।
`.trim();

    // Replace this with your actual WhatsApp number.
    // India example: 919876543210
    // Do NOT include +, spaces, or dashes.
    const whatsappNumber = "919064745699";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");

    form.reset();
  };

  return (
    <section id="booking" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase text-gold-soft/80">
            অ্যাপয়েন্টমেন্ট বুকিং
          </p>

          <h2 className="section-heading text-gradient-gold pt-8 text-3xl font-bold sm:text-4xl md:text-5xl">
            পরামর্শের জন্য সময় নিন
          </h2>

          <p className="mt-4 text-moon/75">
            নিচের ফর্মটি পূরণ করুন। এরপর WhatsApp-এর মাধ্যমে আপনার
            অ্যাপয়েন্টমেন্ট অনুরোধ সরাসরি পাঠিয়ে দেওয়া হবে।
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="glass-card mt-14 rounded-3xl p-6 sm:p-10">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {/* Name */}
              <Field label="পুরো নাম" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="যেমন — রাহুল দত্ত"
                  className="form-input"
                />
              </Field>

              {/* Phone */}
              <Field label="ফোন নম্বর" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="১০ সংখ্যার মোবাইল নম্বর"
                  className="form-input"
                />
              </Field>

              {/* Email */}
              <Field label="ইমেল (ঐচ্ছিক)" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="form-input"
                />
              </Field>

              {/* Date of Birth */}
              <Field label="জন্মতারিখ" htmlFor="dob">
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  className="form-input"
                />
              </Field>

              {/* Time of Birth */}
              <Field label="জন্ম সময়" htmlFor="tob">
                <input id="tob" name="tob" type="time" className="form-input" />
              </Field>

              {/* Place of Birth */}
              <Field label="জন্মস্থান" htmlFor="pob">
                <input
                  id="pob"
                  name="pob"
                  type="text"
                  placeholder="যেমন — গলসি, বর্ধমান"
                  className="form-input"
                />
              </Field>

              {/* Current Location */}
              <Field label="আপনি বর্তমানে কোথায় থাকেন?" htmlFor="location">
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  autoComplete="address-level2"
                  placeholder="যেমন — মেমারি, দুর্গাপুর, পানাগড়"
                  className="form-input"
                />
              </Field>

              {/* Chamber */}
              <Field
                label="আপনার সুবিধাজনক চেম্বার নির্বাচন করুন"
                htmlFor="chamber"
              >
                <select
                  id="chamber"
                  name="chamber"
                  required
                  defaultValue=""
                  className="form-input"
                >
                  <option value="" disabled>
                    — চেম্বার বেছে নিন —
                  </option>

                  {chambers.map((chamber) => (
                    <option key={chamber.title} value={chamber.title}>
                      {chamber.title} — {chamber.location}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Service */}
              <Field
                label="পরিষেবা নির্বাচন করুন"
                htmlFor="service"
                className="sm:col-span-2"
              >
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="form-input"
                >
                  <option value="" disabled>
                    — পরিষেবা বেছে নিন —
                  </option>

                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Message */}
              <Field
                label="বার্তা (ঐচ্ছিক)"
                htmlFor="message"
                className="sm:col-span-2"
              >
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="আপনার প্রশ্ন বা বিশেষ কোনো বিষয় লিখুন..."
                  className="form-input resize-none"
                />
              </Field>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="booking-btn focus-gold relative w-full overflow-hidden rounded-full bg-gold-gradient py-3.5 text-base font-semibold text-void shadow-gold-glow transition-transform duration-300 hover:scale-[1.02] sm:w-auto sm:px-10"
                >
                  <span className="relative z-10">
                    WhatsApp-এ অ্যাপয়েন্টমেন্ট অনুরোধ পাঠান
                  </span>
                </button>

                <p className="mt-4 text-xs text-moon/50">
                  সরাসরি কথা বলতে চাইলে কল করুন {siteInfo.phoneEn} নম্বরে।
                </p>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>

      <style jsx global>{`
        .form-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(212, 175, 55, 0.25);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.75rem 1rem;
          color: #fdf6e3;
          font-family: var(--font-hind-siliguri);
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .form-input::placeholder {
          color: rgba(253, 246, 227, 0.35);
        }

        .form-input:focus {
          outline: none;
          border-color: #d4af37;
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
        }

        .form-input option {
          background: #1a0f2e;
          color: #fdf6e3;
        }

        .booking-btn {
          position: relative;
          overflow: hidden;
          isolation: isolate;

          color: #1a0f2e;

          transition:
            transform 0.3s ease,
            color 0.35s ease;
        }

        .booking-btn::before {
          content: "";
          position: absolute;
          inset: 0;

          background: #15803d;
          border-radius: inherit;

          z-index: -1;

          transform: scaleX(0);
          transform-origin: center;

          transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .booking-btn:hover::before {
          transform: scaleX(1);
        }

        .booking-btn:hover {
          color: #ffffff;
        }

        .booking-btn:active {
          transform: scale(0.98);
        }

        .booking-btn:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm text-moon/75">
        {label}
      </label>

      {children}
    </div>
  );
}
