import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { DownloadSection } from "@/components/DownloadSection";
import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <DownloadSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 bg-slate-950">
        <div className="mx-auto max-w-xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Une question ?
            </h2>
            <p className="mt-4 text-slate-400">
              Notre équipe vous répondra dans les plus brefs délais.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} MariaSaaS — Logiciel libre sous licence MIT.
        </p>
      </footer>
    </main>
  );
}
