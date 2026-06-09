"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { storySectionContent, storySections, type StorySection } from "@/data/storySections";
import {
  rootsExpressionGallery,
  rootsExpressionTabs,
  rootsWorldContent,
  type RootsExpressionItem,
  type RootsExpressionTabId
} from "@/data/rootsExpressionGallery";
import { dataBridgePopup, modalContent } from "@/data/visualWorlds";
import { SectionShell } from "./SectionShell";

const toneClasses = {
  warm: "text-gilt border-gilt/30",
  lapis: "text-cyan-200 border-cyan-200/25"
};

const glowClasses = {
  warm: "hover:border-gilt/70 hover:shadow-[0_28px_95px_rgba(255,216,111,0.24)]",
  cool: "hover:border-cyan-200/60 hover:shadow-[0_28px_95px_rgba(45,185,190,0.22)]"
};

export function StorySections() {
  const [activeSection, setActiveSection] = useState<StorySection | null>(null);
  const [activeRootTab, setActiveRootTab] = useState<RootsExpressionTabId>("paintings");
  const [activeRootItemIndex, setActiveRootItemIndex] = useState(0);
  const activeRootItems = rootsExpressionGallery[activeRootTab];
  const activeRootItem = activeRootItems[activeRootItemIndex] ?? activeRootItems[0];

  useEffect(() => {
    if (!activeSection) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveSection(null);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [activeSection]);

  function selectRootTab(tabId: RootsExpressionTabId) {
    setActiveRootTab(tabId);
    setActiveRootItemIndex(0);
  }

  function cycleRootItem(direction: -1 | 1) {
    const nextIndex = (activeRootItemIndex + direction + activeRootItems.length) % activeRootItems.length;
    setActiveRootItemIndex(nextIndex);
  }

  return (
    <SectionShell
      id="story"
      eyebrow={storySectionContent.eyebrow}
      title={storySectionContent.title}
      className="gallery-noise text-white"
    >
      <div id="page-2" className="relative">
        <div className="absolute inset-0 oil-texture opacity-50" />
        <div className="page-two-stars pointer-events-none absolute inset-0" aria-hidden />
        <div className="pointer-events-none absolute -top-24 left-0 h-44 w-full" aria-hidden>
          <span className="page-two-title-star page-two-star-medium left-[7%] top-[36%]" />
          <span className="page-two-title-star page-two-star-cool left-[24%] top-[12%] [animation-delay:1.4s]" />
          <span className="page-two-title-star page-two-star-medium right-[27%] top-[22%] [animation-delay:2.7s]" />
          <span className="page-two-title-star page-two-star-cool right-[7%] top-[6%] [animation-delay:3.6s]" />
          <span className="page-two-title-star page-two-star-hero right-[15%] top-[58%] [animation-delay:1.9s]" />
          <span className="page-two-title-star page-two-star-hero left-[38%] top-[2%] [animation-delay:4.2s]" />
        </div>
        <div className="relative grid gap-6">
          {storySections.map((section, index) => (
            <motion.button
              key={section.id}
              id={section.id}
              type="button"
              onClick={() => setActiveSection(section)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className={`page-two-story-card painted-card group relative overflow-hidden rounded-[2rem] border bg-[#071224]/70 p-4 text-left shadow-2xl shadow-black/25 backdrop-blur transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gilt/30 ${toneClasses[section.tone]} ${glowClasses[section.glow]}`}
            >
              <span className="page-two-card-shimmer pointer-events-none absolute inset-0" aria-hidden />
              <span className="page-two-card-star page-two-card-star-one" aria-hidden />
              <span className="page-two-card-star page-two-card-star-two" aria-hidden />
              <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
                {section.id === "creative-world" ? (
                  <RootsPreview />
                ) : (
                  <DataNerdPreview />
                )}

                <div
                  className="moonlit-panel rounded-[1.5rem] border border-gilt/20 p-6 text-ink backdrop-blur md:p-8 lg:min-h-[430px]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-lapis">{section.eyebrow}</p>
                    <span className="rounded-full bg-[#071224] px-3 py-1 text-xs font-black text-gilt">
                      {storySectionContent.clickHint}
                    </span>
                  </div>
                  <h3 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight text-[#071224] sm:text-5xl">
                    {section.title}
                  </h3>
                  <p className="mt-5 max-w-4xl text-base leading-8 text-ink/70">
                    {section.body}
                  </p>
                  {section.id === "creative-world" ? (
                    <div className="mt-8 inline-flex items-center gap-2 border-b border-lapis/20 pb-1 text-sm font-black text-lapis transition group-hover:border-lapis group-hover:text-[#071224]">
                      Open story <ChevronRight size={16} aria-hidden /> Paintings, Dance, Life
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeSection && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050915]/80 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveSection(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="story-modal-title"
              className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-gilt/20 bg-[#071224] p-4 text-white shadow-2xl shadow-black/50"
              initial={{ opacity: 0, y: 26, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.26, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="absolute inset-0 starry-night opacity-80" />
              <div className="absolute inset-0 oil-texture opacity-60" />
              <button
                type="button"
                onClick={() => setActiveSection(null)}
                aria-label={modalContent.closeLabel}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-gilt hover:text-[#071224]"
              >
                <X size={20} aria-hidden />
              </button>

              <div className="relative z-10">
                {activeSection.id === "creative-world" && (
                  <RootsModal
                    activeRootItem={activeRootItem}
                    activeRootItems={activeRootItems}
                    activeRootTab={activeRootTab}
                    activeRootItemIndex={activeRootItemIndex}
                    setActiveRootTab={selectRootTab}
                    setActiveRootItemIndex={setActiveRootItemIndex}
                    cycleRootItem={cycleRootItem}
                  />
                )}
                {activeSection.id === "data-nerd" && <DataModal />}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}

function RootsPreview() {
  return (
    <StoryImagePanel className="roots-preview border-gilt/25">
      <div className="absolute inset-0 starry-night opacity-80" />
      <div className="absolute inset-0 oil-texture opacity-55" />
      <div className="roots-preview-stars absolute inset-0" aria-hidden />
      <Image
        src="/images/roots-expression-collage.png"
        alt="Roots and Expression collage"
        fill
        className="object-cover opacity-95 transition duration-500 group-hover:scale-[1.01]"
        sizes="(min-width: 1024px) 32vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071224]/35 via-transparent to-[#f3c64e]/5" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 340" fill="none" aria-hidden>
        <path d="M-18 252C85 162 159 253 260 174C361 94 432 185 548 92" stroke="#547FE0" strokeOpacity=".38" strokeWidth="22" strokeLinecap="round" />
        <path d="M-4 278C93 214 180 276 286 214C384 157 446 213 535 158" stroke="#48B9A9" strokeOpacity=".28" strokeWidth="13" strokeLinecap="round" />
        <path d="M48 294C134 244 196 300 279 255C352 216 418 251 478 218" stroke="#F3C64E" strokeOpacity=".5" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="roots-preview-spark roots-preview-spark-medium left-[14%] top-[42%]" aria-hidden />
      <span className="roots-preview-spark roots-preview-spark-hero right-[17%] top-[16%] [animation-delay:1.8s]" aria-hidden />
      <span className="roots-preview-spark roots-preview-spark-cool bottom-[22%] left-[42%] [animation-delay:3s]" aria-hidden />
      <div className="absolute bottom-7 right-7 h-3 w-3 rounded-full bg-gilt shadow-[0_0_20px_rgba(243,198,78,0.8)]" />
    </StoryImagePanel>
  );
}

function DataNerdPreview() {
  return (
    <StoryImagePanel className="border-cyan-200/25">
      <Image
        src="/images/cosmic_data_science_network_map.png"
        alt="Moonlit data constellation showing statistics, programming, machine learning, and AI tools."
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 32vw, 100vw"
      />
    </StoryImagePanel>
  );
}

function StoryImagePanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative min-h-72 overflow-hidden rounded-[1.5rem] border bg-[#050915] shadow-2xl shadow-black/30 ${className}`}
    >
      {children}
    </div>
  );
}

function RootsModal({
  activeRootItem,
  activeRootItems,
  activeRootTab,
  activeRootItemIndex,
  setActiveRootTab,
  setActiveRootItemIndex,
  cycleRootItem
}: {
  activeRootItem: RootsExpressionItem;
  activeRootItems: RootsExpressionItem[];
  activeRootTab: RootsExpressionTabId;
  setActiveRootTab: (tab: RootsExpressionTabId) => void;
  activeRootItemIndex: number;
  setActiveRootItemIndex: (index: number) => void;
  cycleRootItem: (direction: -1 | 1) => void;
}) {
  return (
    <div>
      <div className="mb-5 pr-14">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-gilt">{rootsWorldContent.title}</p>
        <h2 id="story-modal-title" className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">
          {rootsWorldContent.subtitle}
        </h2>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {rootsExpressionTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveRootTab(tab.id);
              setActiveRootItemIndex(0);
            }}
            className={`rounded-full px-4 py-2 text-sm font-black transition ${
              activeRootTab === tab.id
                ? "bg-gilt text-[#071224] gold-glow"
                : "border border-white/20 bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeRootTab}-${activeRootItem.title}`}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.24 }}
          className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="grid gap-3">
            <div className="relative min-h-[330px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#050915] lg:min-h-[500px]">
              <RootStoryImage
                item={activeRootItem}
                className="object-contain p-2"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050915]/80 via-transparent to-transparent" />
              <button
                type="button"
                onClick={() => cycleRootItem(-1)}
                aria-label={modalContent.previousLabel}
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#071224]/70 text-white backdrop-blur transition hover:bg-gilt hover:text-[#071224]"
              >
                <ChevronLeft size={20} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => cycleRootItem(1)}
                aria-label={modalContent.nextLabel}
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#071224]/70 text-white backdrop-blur transition hover:bg-gilt hover:text-[#071224]"
              >
                <ChevronRight size={20} aria-hidden />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-5">
              {activeRootItems.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveRootItemIndex(index)}
                  className={`group overflow-hidden rounded-2xl border bg-white/10 p-1 text-left transition hover:-translate-y-0.5 hover:border-gilt/60 ${
                    activeRootItemIndex === index ? "border-gilt gold-glow" : "border-white/20"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <RootStoryImage
                      item={item}
                      className="object-cover transition group-hover:scale-105"
                      sizes="160px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050915]/70 to-transparent" />
                  </div>
                  <p className="truncate px-2 py-2 text-xs font-black text-white/80">{item.title}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="moonlit-panel rounded-[1.5rem] border border-gilt/20 p-6 text-[#071224]">
            <h3 className="font-serif text-5xl font-semibold leading-none">{activeRootItem.title}</h3>
            <p className="mt-5 text-base font-semibold leading-8 text-ink/70">{activeRootItem.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {activeRootItem.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#071224]/10 bg-white/50 px-3 py-1 text-xs font-black text-ink/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function RootStoryImage({
  item,
  className,
  sizes
}: {
  item: RootsExpressionItem;
  className: string;
  sizes: string;
}) {
  const [source, setSource] = useState(item.image);

  useEffect(() => {
    setSource(item.image);
  }, [item.image]);

  return (
    <Image
      src={source}
      alt={item.title}
      fill
      className={className}
      sizes={sizes}
      onError={() => setSource((currentSource) => (currentSource === item.fallbackImage ? currentSource : item.fallbackImage))}
    />
  );
}

function DataModal() {
  return (
    <div>
      <div className="mb-6 pr-14">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-gilt">{dataBridgePopup.label}</p>
        <h2 id="story-modal-title" className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl">
          {dataBridgePopup.title}
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <HabitPanel title={dataBridgePopup.artistTitle} items={dataBridgePopup.artistHabits} tone="warm" />
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gilt/30 bg-gilt text-xl font-black text-[#071224] gold-glow">
          +
        </div>
        <HabitPanel title={dataBridgePopup.dataTitle} items={dataBridgePopup.dataHabits} tone="cool" />
      </div>

      <blockquote className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 text-center font-serif text-3xl leading-tight text-white">
        {dataBridgePopup.quote}
      </blockquote>
    </div>
  );
}

function HabitPanel({ title, items, tone }: { title: string; items: string[]; tone: "warm" | "cool" }) {
  return (
    <div
      className={`rounded-[1.5rem] border p-5 backdrop-blur ${
        tone === "warm" ? "border-gilt/25 bg-gilt/10" : "border-cyan-200/20 bg-cyan-200/10"
      }`}
    >
      <h3 className="font-serif text-3xl font-semibold text-white">{title}</h3>
      <div className="mt-5 grid gap-2">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white/80">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
