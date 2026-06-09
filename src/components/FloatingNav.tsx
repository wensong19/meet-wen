"use client";

import { useEffect, useState } from "react";
import { Bot, Brush, Home, LineChart, Menu, Sparkles, X } from "lucide-react";
import { navContent } from "@/data/aboutWen";

const navIcons = {
  "#top": Home,
  "#creative-world": Brush,
  "#data-nerd": LineChart,
  "#ask-wen": Bot
};

export function FloatingNav() {
  const [activeHref, setActiveHref] = useState(navContent.items[0].href);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navContent.items
      .map((item) => ({ ...item, section: document.querySelector<HTMLElement>(item.href) }))
      .filter((item): item is { href: string; label: string; section: HTMLElement } => Boolean(item.section));

    let frameId = 0;

    function updateActiveSection() {
      frameId = 0;
      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;

      if (pageBottom) {
        setActiveHref(sections[sections.length - 1]?.href ?? navContent.items[0].href);
        return;
      }

      const focusLine = window.innerHeight * 0.42;
      const active =
        [...sections].reverse().find(({ section }) => section.getBoundingClientRect().top <= focusLine) ?? sections[0];

      if (active) {
        setActiveHref(active.href);
      }
    }

    function handleScroll() {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    }

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  function selectItem(href: string) {
    setActiveHref(href);
    setMobileOpen(false);
  }

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 rounded-full border border-white/15 bg-[#071224]/78 p-2 text-white shadow-2xl shadow-black/35 backdrop-blur-xl lg:block"
      >
        <div className="flex flex-col gap-2">
          {navContent.items.map((item) => {
            const Icon = navIcons[item.href as keyof typeof navIcons] ?? Home;
            const active = activeHref === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => selectItem(item.href)}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
                className={`group relative flex h-11 w-11 items-center justify-center rounded-full border transition focus:outline-none focus:ring-2 focus:ring-gilt focus:ring-offset-2 focus:ring-offset-[#071224] ${
                  active
                    ? "border-gilt/60 bg-gilt text-[#071224] shadow-[0_0_22px_rgba(243,198,78,0.45)]"
                    : "border-transparent text-white/60 hover:border-white/15 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-[18px] w-[18px] transition group-hover:scale-110" aria-hidden />
                <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-full border border-white/15 bg-[#071224]/95 px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-xl backdrop-blur transition group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      <nav
        aria-label="Mobile primary navigation"
        className="fixed left-3 right-3 top-3 z-50 rounded-2xl border border-white/15 bg-[#071224]/82 text-white shadow-2xl shadow-black/35 backdrop-blur-xl lg:hidden"
      >
        <div className="flex min-h-14 items-center justify-between px-4">
          <a
            href="#top"
            onClick={() => selectItem("#top")}
            className="inline-flex items-center gap-2 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-gilt"
          >
            <Sparkles className="h-4 w-4 text-gilt" aria-hidden />
            {navContent.brand}
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gilt"
          >
            {mobileOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>

        {mobileOpen && (
          <div className="grid gap-1 border-t border-white/10 p-2">
            {navContent.items.map((item) => {
              const Icon = navIcons[item.href as keyof typeof navIcons] ?? Home;
              const active = activeHref === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => selectItem(item.href)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-gilt ${
                    active ? "bg-gilt text-[#071224]" : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={17} aria-hidden />
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}
