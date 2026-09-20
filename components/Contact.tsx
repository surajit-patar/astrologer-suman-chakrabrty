import { siteInfo } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

const contactCards = [
  {
    label: "ফোন",
    value: siteInfo.phoneEn,
    icon: "📞",
    href: `tel:${siteInfo.phoneEn}`,
    description: "সরাসরি কথা বলুন",
  },
  {
    label: "ইমেল",
    value: siteInfo.email,
    icon: "✉️",
    href: `mailto:${siteInfo.email}`,
    description: "আপনার প্রশ্ন পাঠান",
  },
  {
    label: "চেম্বারের ঠিকানা",
    value: siteInfo.address,
    icon: "📍",
    href: undefined,
    description: "সরাসরি সাক্ষাতের জন্য",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/40" />
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.25em] text-gold-soft/80">
              যোগাযোগ
            </p>
            <span className="h-px w-10 bg-gold/40" />
          </div>

          <h2 className="section-heading text-gradient-gold text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            আমাদের সঙ্গে যোগাযোগ করুন
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-moon/65 sm:text-base">
            আপনার প্রশ্ন, পরামর্শ অথবা অ্যাপয়েন্টমেন্টের জন্য আমাদের সঙ্গে
            যোগাযোগ করুন। আমরা আপনার সঙ্গে কথা বলার অপেক্ষায় আছি।
          </p>
        </ScrollReveal>

        {/* Contact area */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {contactCards.map((card, index) => (
            <ScrollReveal key={card.label} delay={index * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-gold/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.045]">
                {/* Card glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gold/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-xl shadow-[0_0_30px_rgba(212,175,55,0.08)]">
                    <span aria-hidden="true">{card.icon}</span>
                  </div>

                  {/* Label */}
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft/60">
                    {card.label}
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-xs text-moon/40">
                    {card.description}
                  </p>

                  {/* Value */}
                  {card.href ? (
                    <a
                      href={card.href}
                      className="focus-gold mt-4 block break-words text-sm leading-6 text-moon/90 transition-colors hover:text-gold-glow"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-4 break-words text-sm leading-6 text-moon/90">
                      {card.value}
                    </p>
                  )}

                  {/* Bottom accent */}
                  <div className="mt-6 h-px w-10 bg-gold/30 transition-all duration-300 group-hover:w-16 group-hover:bg-gold/60" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.25}>
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-r from-gold/[0.06] via-white/[0.025] to-gold/[0.06] px-6 py-8 text-center backdrop-blur-xl sm:px-10">
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent"
              aria-hidden="true"
            />

            <div className="relative">
              {/* <span
                className="mb-3 block text-2xl text-gold"
                aria-hidden="true"
              >
                ✦
              </span> */}

              <h3 className="section-heading text-xl font-semibold text-gold-soft sm:text-2xl">
                পরামর্শের জন্য প্রস্তুত?
              </h3>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-moon/60">
                আপনার সুবিধামতো সময়ের জন্য একটি অ্যাপয়েন্টমেন্টের অনুরোধ
                পাঠান। আমাদের টিম শীঘ্রই আপনার সঙ্গে যোগাযোগ করবে।
              </p>

              <a
                href="#booking"
                className="focus-gold mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-sm font-semibold text-void shadow-gold-glow transition-transform duration-300 hover:scale-[1.03]"
              >
                অ্যাপয়েন্টমেন্ট বুক করুন
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
