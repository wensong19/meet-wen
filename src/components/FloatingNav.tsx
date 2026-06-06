import { Bot, Brush, GitMerge, Home, LineChart, Sparkles } from "lucide-react";
import { navContent } from "@/data/aboutWen";

const navIcons = [Home, Brush, LineChart, GitMerge, Bot];

export function FloatingNav() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 rounded-full border border-white/20 bg-ink/75 px-3 py-2 text-white shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-2">
        <a href="#top" className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-bold sm:flex">
          <Sparkles size={16} aria-hidden />
          {navContent.brand}
        </a>
        <div className="flex flex-1 items-center justify-around gap-1 sm:flex-none sm:justify-end">
          {navContent.items.map((item, index) => {
            const Icon = navIcons[index] ?? Home;

            return (
              <a
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4 transition group-hover:scale-110" aria-hidden />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
