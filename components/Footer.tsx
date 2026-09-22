import { navLinks, siteInfo } from "@/lib/data";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/SUMANCHKRABARTY/" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "youtube.com/@astrologersumanchakrabrty/featured" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-void-deep pt-16">
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="section-heading text-gradient-gold text-xl font-bold">
              {siteInfo.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-moon/65">
              {siteInfo.tagline}। বৈদিক জ্যোতিষের আলোকে জীবনের প্রতিটি
              সিদ্ধান্তে আপনার পাশে।
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-soft/80">
              দ্রুত লিংক
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="focus-gold text-sm text-moon/65 hover:text-gold-glow"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-soft/80">
              যোগাযোগ
            </p>
            <ul className="flex flex-col gap-2 text-sm text-moon/65">
              <li>{siteInfo.phoneEn}</li>
              <li>{siteInfo.email}</li>
              <li>{siteInfo.address}</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-soft/80">
              সামাজিক মাধ্যম
            </p>
            <ul className="flex flex-col gap-2 text-sm text-moon/65">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-gold hover:text-gold-glow"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-6 text-xs text-moon/45 sm:flex-row">
          <p>© 2026  Astrologer Suman Chakrabrty । Copyright Reserved</p>

        </div>
      </div>
    </footer>
  );
}
