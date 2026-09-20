import { testimonials } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase text-gold-soft/80">
            ক্লায়েন্ট অভিজ্ঞতা
          </p>
          <h2 className="section-heading text-gradient-gold text-3xl font-bold sm:text-4xl md:text-5xl pt-5">
            যাঁরা পথ খুঁজে পেয়েছেন
          </h2>
          <p className="mt-4 text-moon/75">
            বছরের পর বছর ধরে হাজারো পরিবারের আস্থা অর্জন করেছি — তাঁদেরই
            কিছু অনুভূতি এখানে তুলে ধরা হলো।
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={(i % 3) * 0.1}>
              <figure className="glass-card flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-4 text-gold" aria-hidden="true">
                  {"★".repeat(t.rating)}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-moon/85">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-gold/15 pt-4">
                  <p className="section-heading text-sm font-semibold text-gold-soft">
                    {t.name}
                  </p>
                  <p className="text-xs text-moon/55">{t.location}</p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
