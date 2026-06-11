"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { dataBridgePopup, modalContent } from "@/data/visualWorlds";

export function BridgeComparisonModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#050915]/80 p-4 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bridge-comparison-title"
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
          onClick={onClose}
          aria-label={modalContent.closeLabel}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-gilt hover:text-[#071224]"
        >
          <X size={20} aria-hidden />
        </button>

        <div className="relative z-10">
          <div className="mb-6 pr-14">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-gilt">{dataBridgePopup.label}</p>
            <h2
              id="bridge-comparison-title"
              className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl"
            >
              {dataBridgePopup.title}
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <HabitPanel title={dataBridgePopup.artistTitle} items={dataBridgePopup.artistHabits} />
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gilt/30 bg-gilt text-xl font-black text-[#071224] gold-glow">
              +
            </div>
            <HabitPanel title={dataBridgePopup.dataTitle} items={dataBridgePopup.dataHabits} />
          </div>

          <blockquote className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 text-center font-serif text-3xl leading-tight text-white">
            {dataBridgePopup.quote}
          </blockquote>
        </div>
      </motion.div>
    </motion.div>
  );
}

function HabitPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.5rem] border border-cyan-200/20 bg-cyan-200/10 p-5 backdrop-blur">
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
