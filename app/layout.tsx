import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Noto_Sans_Bengali, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-serif-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sumanchakrabarty.example"),
  title: "জ্যোতিষাচার্য সুমন চক্রবর্তী | বৈদিক জ্যোতিষ ও কুণ্ডলী পরামর্শ",
  description:
    "২৫ বছরের অভিজ্ঞতাসম্পন্ন জ্যোতিষাচার্য সুমন চক্রবর্তীর কাছ থেকে জন্মকুণ্ডলী বিশ্লেষণ, কুষ্ঠি মিলন, বাস্তু, রত্ন পরামর্শ ও গ্রহ শান্তির বিশ্বস্ত সমাধান নিন।",
  keywords: [
    "জ্যোতিষী",
    "কুণ্ডলী",
    "বাংলা জ্যোতিষ",
    "সুমন চক্রবর্তী",
    "কুষ্ঠি মিলন",
    "বাস্তু শাস্ত্র",
    "বৈদিক জ্যোতিষ কলকাতা",
  ],
  authors: [{ name: "জ্যোতিষাচার্য সুমন চক্রবর্তী" }],
  openGraph: {
    title: "জ্যোতিষাচার্য সুমন চক্রবর্তী | বৈদিক জ্যোতিষ ও কুণ্ডলী পরামর্শ",
    description:
      "গ্রহ-নক্ষত্রের ভাষা পড়ে জীবনের পথ দেখানো — ২৫ বছরের অভিজ্ঞতাসম্পন্ন জ্যোতিষাচার্যের কাছে বিশ্বস্ত পরামর্শ নিন।",
    locale: "bn_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07040D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body
        className={`${hindSiliguri.variable} ${notoSansBengali.variable} ${notoSerifBengali.variable} font-body bg-void text-moon antialiased selection:bg-gold/30 selection:text-gold-glow`}
      >
        {children}
      </body>
    </html>
  );
}
