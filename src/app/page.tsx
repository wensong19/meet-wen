import { AskWen } from "@/components/AskWen";
import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/Hero";
import { StorySections } from "@/components/StorySections";
import { siteContent } from "@/data/aboutWen";

export default function Home() {
  return (
    <main className="bg-ink">
      <FloatingNav />
      <Hero />
      <StorySections />
      <AskWen />
      <footer className="bg-ink px-5 pb-8 text-center text-sm text-white/50 sm:px-8 lg:px-12">
        <p>{siteContent.footer}</p>
      </footer>
    </main>
  );
}
