import ScrollReveal from "./ScrollReveal";
import Image from 'next/image';
// FIXED: Added relative path indicator "./" to the image import
import myLogo from "./Profile.jpg"; 

const credentials = [
  "জ্যোতিষ শাস্ত্রাচার্য, গলসি, বর্ধমান",
  "রত্ন বিশারদ ও বাস্তু পরামর্শদাতা",
  "২৫ বছরের অভিজ্ঞতা, ৪০,০০০+ কুণ্ডলী বিশ্লেষণ",
  "M.A সংস্কৃত, B.ED",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* =========================
            PROFILE IMAGE
        ========================== */}
        <ScrollReveal>
          <div className="relative mx-auto max-w-md">

            {/* Outer Card */}
            <div className="glass-card relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] p-2">

              {/* Inner Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-nebula-deep via-nebula to-void">

                {/* Profile Image */}
                <Image 
                  src={myLogo} 
                  alt="জ্যোতিষাচার্য সুমন চক্রবর্তী"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void/95 via-void/50 to-transparent p-6 pt-24 text-center">
                  <p className="text-xl text-gold-soft/80 py-4">
                    জ্যোতিষাচার্য সুমন চক্রবর্তী
                  </p>
                </div>

              </div>
            </div>

            {/* Experience Badge */}
            <div className="glass-card absolute -bottom-6 -right-4 rounded-2xl px-6 py-4 text-center shadow-gold-glow sm:-right-8">
              <p className="text-gradient-gold font-display text-3xl font-bold">
                15+
              </p>

              <p className="text-xs text-moon/70">
                বছরের সাধনা
              </p>
            </div>

          </div>
        </ScrollReveal>

        {/* =========================
            ABOUT CONTENT
        ========================== */}
        <div>

          {/* Heading */}
          <ScrollReveal>
            <p className="eyebrow mb-3 text-xs font-semibold uppercase text-gold-soft/80">
              পরিচিতি
            </p>

            <h2 className="section-heading text-gradient-gold text-3xl font-bold sm:text-4xl md:text-5xl pt-10">
              জ্যোতিষাচার্য সুমন চক্রবর্তীর কথা
            </h2>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-moon/80">
              তিন প্রজন্ম ধরে জ্যোতিষ সাধনায় নিয়োজিত এক পরিবারের উত্তরসূরি
              সুমন চক্রবর্তী ছোট থেকেই বৈদিক জ্যোতিষ ও সংস্কৃত শাস্ত্রে
              দীক্ষিত। কলকাতা সংস্কৃত কলেজ থেকে জ্যোতিষে উচ্চশিক্ষা লাভের পর
              গত পঁচিশ বছর ধরে তিনি হাজারো মানুষের জীবনের জটিল সিদ্ধান্তে
              আলোর দিশা দেখিয়েছেন।
            </p>

            <p className="mt-4 leading-relaxed text-moon/80">
              তাঁর পরামর্শের ভিত্তি শুধু ঐতিহ্যবাহী শাস্ত্রই নয়, বরং প্রতিটি
              মানুষের জীবনের বাস্তবতা বুঝে সহজ, প্রয়োগযোগ্য সমাধান দেওয়ার
              দর্শন। তাই কলকাতার গণ্ডি ছাড়িয়ে দেশ-বিদেশের বাঙালি পরিবারের
              কাছে তিনি আজ এক বিশ্বস্ত নাম।
            </p>
          </ScrollReveal>

          {/* Credentials */}
          <ScrollReveal delay={0.2}>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {credentials.map((credential) => (
                <li
                  key={credential}
                  className="glass-card flex items-start gap-2 rounded-xl px-4 py-3 text-sm text-moon/85"
                >
                  <span
                    className="mt-0.5 text-gold"
                    aria-hidden="true"
                  >
                    ✦
                  </span>

                  <span>
                    {credential}
                  </span>
                </li>
              ))}

            </ul>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
