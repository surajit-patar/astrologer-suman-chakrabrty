import { process } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import { toBengaliNumber } from "@/lib/utils";

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase text-gold-soft/80">
            পরামর্শ পদ্ধতি
          </p>
          <h2 className="section-heading text-gradient-gold text-3xl font-bold sm:text-4xl md:text-5xl pt-10">
            কুণ্ডলী পরামর্শের ধাপসমূহ
          </h2>
          <p className="mt-4 text-moon/75">
            জন্মতথ্য জমা দেওয়া থেকে প্রতিকার পর্যন্ত — পুরো প্রক্রিয়াটি
            সহজ, স্বচ্ছ ও সুশৃঙ্খল ভাবে সাজানো।
          </p>
        </ScrollReveal>

        <div className="relative mt-16">
          <div
            className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent sm:left-1/2"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-10">
            {process.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                    i % 2 === 1 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex flex-1 justify-start sm:justify-end">
                    <div
                      className={`glass-card w-full max-w-md rounded-2xl p-6 ${
                        i % 2 === 1 ? "sm:mr-0 sm:ml-auto" : "sm:mr-auto"
                      }`}
                    >
                      <span className="section-heading text-gradient-gold text-sm font-bold">
                        ধাপ {toBengaliNumber(String(i + 1).padStart(2, "0"))}
                      </span>
                      <h3 className="section-heading mt-2 text-xl font-semibold text-gold-soft">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-moon/75">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-6 top-6 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-gold-gradient shadow-gold-glow sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2">
                    <span className="h-2 w-2 rounded-full bg-void" />
                  </div>

                  <div className="hidden flex-1 sm:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
