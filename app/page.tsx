import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ZodiacSection from "@/components/ZodiacSection";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import { CosmicModeProvider } from "@/components/CosmicModeContext";

export default function Home() {
  return (
    <CosmicModeProvider>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <BookingForm />
        <Process />
        <ZodiacSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </CosmicModeProvider>
  );
}
