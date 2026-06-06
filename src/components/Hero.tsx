"use client";

import { useRef, type PointerEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Bot, BrainCircuit, Brush, Orbit } from "lucide-react";
import { heroContent } from "@/data/aboutWen";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function VanGoghStar({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={`vangogh-star ${compact ? "vangogh-star-compact" : ""} ${className}`} aria-hidden>
      <span className="star-halo" />
      <span className="star-brush" />
      <span className="star-core" />
      <span className="star-spark star-spark-one" />
      <span className="star-spark star-spark-two" />
      <span className="star-spark star-spark-three" />
      <span className="star-spark star-spark-four" />
      <span className="star-spark star-spark-five" />
    </div>
  );
}

function StarryNightLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 starry-night" />
      <div className="hero-oil-texture absolute inset-0 oil-texture opacity-90" />
      <div className="hero-parallax-far absolute inset-0">
        <div className="absolute inset-0 star-field opacity-80" />
      </div>
      <VanGoghStar className="hero-parallax-near left-[7%] top-[14%]" />
      <VanGoghStar className="hero-parallax-near right-[13%] top-[20%]" compact />
      <svg className="painterly-swirl absolute -left-32 top-4 h-[72%] w-[88%] opacity-90" viewBox="0 0 820 560" fill="none" aria-hidden>
        <path d="M34 300C126 156 256 217 338 144C441 52 606 77 706 147C807 218 771 353 653 363C538 373 451 242 526 166C584 108 702 137 712 223" stroke="#FFD65F" strokeOpacity=".46" strokeWidth="42" strokeLinecap="round" />
        <path d="M48 364C170 234 282 338 410 230C539 121 663 263 795 178" stroke="#2F70CB" strokeOpacity=".42" strokeWidth="34" strokeLinecap="round" />
        <path d="M78 444C220 330 334 452 472 338C596 236 683 384 810 304" stroke="#0F8C8B" strokeOpacity=".28" strokeWidth="30" strokeLinecap="round" />
        <path d="M92 270C216 210 303 252 420 202C536 152 626 174 718 230" stroke="#FFF1BF" strokeOpacity=".22" strokeWidth="15" strokeLinecap="round" />
        <path d="M118 405C250 350 353 394 484 334C604 279 700 318 782 365" stroke="#A8C7FF" strokeOpacity=".22" strokeWidth="16" strokeLinecap="round" />
      </svg>
      <svg className="painterly-swirl absolute -right-36 bottom-0 h-[68%] w-[82%] opacity-80 [animation-delay:1.6s]" viewBox="0 0 820 560" fill="none" aria-hidden>
        <path d="M80 275C178 139 331 225 439 136C541 52 722 111 744 243C769 392 562 434 471 333C397 251 464 154 553 177C625 196 669 247 663 313" stroke="#F3C64E" strokeOpacity=".36" strokeWidth="40" strokeLinecap="round" />
        <path d="M45 394C188 285 298 420 429 319C560 218 652 362 790 270" stroke="#547FE0" strokeOpacity=".4" strokeWidth="36" strokeLinecap="round" />
        <path d="M118 330C241 265 341 340 456 270C566 203 660 248 746 198" stroke="#E8D99E" strokeOpacity=".2" strokeWidth="16" strokeLinecap="round" />
      </svg>
      <svg className="absolute inset-x-0 bottom-[-5%] h-[38%] w-full opacity-70" viewBox="0 0 1200 360" fill="none" preserveAspectRatio="none" aria-hidden>
        <path d="M0 248C111 164 212 238 320 180C455 108 571 239 700 159C823 82 973 148 1200 58V360H0V248Z" fill="#050915" fillOpacity=".78" />
        <path d="M0 275C156 180 282 278 446 207C621 130 762 264 940 177C1028 134 1117 113 1200 92" stroke="#1D4F9F" strokeOpacity=".36" strokeWidth="26" strokeLinecap="round" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050915] to-transparent" />
    </div>
  );
}

function BrushLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="brush-orbit absolute left-[8%] top-[18%] h-28 w-72 rotate-[-18deg] rounded-full bg-cinnabar/30 blur-2xl" />
      <div className="brush-orbit absolute bottom-[18%] left-[18%] h-24 w-80 rotate-[14deg] rounded-full bg-gilt/30 blur-2xl [animation-delay:1.2s]" />
      <div className="brush-orbit absolute right-[8%] top-[34%] h-36 w-56 rotate-[28deg] rounded-full bg-plum/20 blur-2xl [animation-delay:2.1s]" />
      <svg className="absolute left-8 top-20 h-[62%] w-[86%] opacity-60" viewBox="0 0 620 520" fill="none" aria-hidden>
        <path d="M36 419C130 276 251 352 318 205C385 58 509 98 586 44" stroke="#071224" strokeOpacity=".22" strokeWidth="30" strokeLinecap="round" />
        <path d="M68 156C154 218 211 129 296 186C380 244 441 239 528 162" stroke="#FFD86F" strokeOpacity=".42" strokeWidth="18" strokeLinecap="round" />
        <path d="M114 260C225 198 325 282 460 198" stroke="#4E84D9" strokeOpacity=".22" strokeWidth="15" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function DataLayer() {
  const nodes = [
    ["12%", "18%"],
    ["27%", "44%"],
    ["44%", "24%"],
    ["63%", "55%"],
    ["78%", "28%"],
    ["86%", "72%"]
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_28%,rgba(15,140,139,0.2),transparent_24rem)]" />
      <div className="slow-spin absolute right-8 top-24 h-72 w-72 rounded-full border border-[#f3c64e]/20" />
      <svg className="absolute inset-0 h-full w-full opacity-70" aria-hidden>
        <path d="M10 74C112 21 181 116 279 72C382 26 466 86 556 32" stroke="#6DA6FF" strokeOpacity=".24" strokeWidth="10" strokeLinecap="round" />
        <path d="M28 220C124 151 228 247 334 170C436 96 508 195 620 126" stroke="#0F8C8B" strokeOpacity=".24" strokeWidth="9" strokeLinecap="round" />
        <path d="M78 330C185 278 280 348 392 288C496 232 553 290 640 246" stroke="#F3C64E" strokeOpacity=".2" strokeWidth="8" strokeLinecap="round" />
      </svg>
      {nodes.map(([left, top], index) => (
        <span
          key={`${left}-${top}`}
          className="node-pulse absolute h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(103,232,249,0.75)]"
          style={{ left, top, animationDelay: `${index * 0.35}s` }}
        />
      ))}
    </div>
  );
}

function ArtistMiniVisual() {
  return (
    <svg
      className="artist-mini-visual mb-4 h-[100px] w-full"
      viewBox="0 0 280 100"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="artist-cobalt" x1="12" y1="50" x2="270" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#356FBE" stopOpacity="0" />
          <stop offset=".14" stopColor="#356FBE" stopOpacity=".82" />
          <stop offset=".82" stopColor="#356FBE" stopOpacity=".68" />
          <stop offset="1" stopColor="#356FBE" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="artist-ultramarine" x1="17" y1="70" x2="268" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#253F8F" stopOpacity="0" />
          <stop offset=".18" stopColor="#253F8F" stopOpacity=".72" />
          <stop offset=".78" stopColor="#253F8F" stopOpacity=".58" />
          <stop offset="1" stopColor="#253F8F" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="artist-teal" x1="23" y1="36" x2="193" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B9895" stopOpacity="0" />
          <stop offset=".18" stopColor="#3B9895" stopOpacity=".78" />
          <stop offset=".8" stopColor="#3B9895" stopOpacity=".52" />
          <stop offset="1" stopColor="#3B9895" stopOpacity="0" />
        </linearGradient>
        <filter id="artist-soft-texture" x="-10%" y="-20%" width="120%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency=".055 .22" numOctaves="2" seed="8" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" xChannelSelector="R" yChannelSelector="B" />
        </filter>
        <filter id="artist-light-glow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        className="artist-rhythm-band artist-rhythm-cobalt"
        d="M12 64C39 43 68 57 91 51C112 46 125 26 151 27C179 28 191 54 218 58C238 61 255 53 270 42"
        stroke="url(#artist-cobalt)"
        strokeWidth="16"
        strokeLinecap="round"
        filter="url(#artist-soft-texture)"
      />
      <path
        className="artist-rhythm-band artist-rhythm-ultramarine"
        d="M17 78C48 59 73 77 102 72C129 67 143 46 169 47C198 48 218 76 244 74C254 73 262 69 268 65"
        stroke="url(#artist-ultramarine)"
        strokeWidth="10"
        strokeLinecap="round"
        filter="url(#artist-soft-texture)"
      />
      <path
        className="artist-rhythm-band artist-rhythm-teal"
        d="M23 49C43 29 66 39 85 36C107 33 121 14 143 17C164 19 179 30 193 38"
        stroke="url(#artist-teal)"
        strokeWidth="7"
        strokeLinecap="round"
        filter="url(#artist-soft-texture)"
      />
      <path
        className="artist-rhythm-band artist-rhythm-cream"
        d="M37 68C65 52 87 62 109 55C130 48 145 35 164 39C180 42 193 51 204 57"
        stroke="#F5E8B8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        className="artist-rhythm-motion"
        d="M35 85C76 68 102 92 142 70C178 50 207 73 249 48"
        stroke="#D7A642"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <circle className="artist-rhythm-light" cx="228" cy="27" r="4.5" fill="#F3C64E" filter="url(#artist-light-glow)" />
      <circle cx="228" cy="27" r="9" fill="#F3C64E" opacity=".09" />
    </svg>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  function updateParallax(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || !heroRef.current) return;

    const bounds = heroRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    heroRef.current.style.setProperty("--hero-far-x", `${x * 5}px`);
    heroRef.current.style.setProperty("--hero-far-y", `${y * 5}px`);
    heroRef.current.style.setProperty("--hero-near-x", `${x * 16}px`);
    heroRef.current.style.setProperty("--hero-near-y", `${y * 16}px`);
  }

  function resetParallax() {
    if (!heroRef.current) return;

    ["--hero-far-x", "--hero-far-y", "--hero-near-x", "--hero-near-y"].forEach((property) =>
      heroRef.current?.style.removeProperty(property)
    );
  }

  return (
    <header
      ref={heroRef}
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#071224] text-white"
      onPointerMove={updateParallax}
      onPointerLeave={resetParallax}
    >
      <StarryNightLayer />
      <div className="absolute inset-0 grid lg:grid-cols-2">
        <div className="relative min-h-[50vh] overflow-hidden text-white">
          <BrushLayer />
          <div className="absolute inset-0 bg-gradient-to-br from-cinnabar/20 via-transparent to-gilt/10" />
        </div>
        <div className="relative min-h-[50vh] overflow-hidden">
          <DataLayer />
          <div className="absolute inset-0 bg-gradient-to-bl from-lapis/25 via-transparent to-[#050915]/70" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-10 pt-28 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title-reveal font-serif text-5xl font-semibold leading-[0.9] text-white text-balance sm:text-7xl lg:text-8xl"
            >
              {heroContent.title}
            </motion.h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              {heroContent.subtitle}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href={heroContent.ctas.artist.href}
                className="hero-cta hero-cta-star group inline-flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-[#f3c64e] px-5 py-4 text-sm font-black text-[#071224] shadow-2xl shadow-[#f3c64e]/25"
              >
                <Brush size={18} aria-hidden />
                {heroContent.ctas.artist.label}
              </a>
              <a
                href={heroContent.ctas.data.href}
                className="hero-cta hero-cta-blue group inline-flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-[#1d4f9f] px-5 py-4 text-sm font-black text-white shadow-2xl shadow-[#1d4f9f]/30"
              >
                <BrainCircuit size={18} aria-hidden />
                {heroContent.ctas.data.label}
              </a>
              <a
                href={heroContent.ctas.ask.href}
                className="hero-cta hero-cta-teal group inline-flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-[#0f8c8b] px-5 py-4 text-sm font-black text-white shadow-2xl shadow-[#0f8c8b]/25"
              >
                <Bot size={18} aria-hidden />
                {heroContent.ctas.ask.label}
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2">
            <a
              href={heroContent.artistCard.href}
              className="painted-card hero-card-interactive hero-card-warm moonlit-panel group relative block min-h-[620px] cursor-pointer overflow-hidden rounded-[2rem] border border-gilt/30 p-5 text-ink shadow-2xl shadow-black/30 backdrop-blur focus:outline-none focus:ring-4 focus:ring-gilt/40"
              aria-label={heroContent.artistCard.ariaLabel}
            >
              <BrushLayer />
              <div className="relative grid min-h-[580px] grid-rows-[255px_52px_230px] gap-y-5">
                <div className="hero-card-title-block">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cinnabar text-white shadow-lg shadow-cinnabar/25 gold-glow">
                    <Brush size={25} aria-hidden />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-cinnabar">{heroContent.artistCard.eyebrow}</p>
                  <h2 className="hero-card-heading mt-4 text-ink">{heroContent.artistCard.title}</h2>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  {heroContent.artistCard.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-ink/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="hero-card-lower h-[230px] rounded-3xl border border-ink/10 bg-white/80 p-4 backdrop-blur">
                  <ArtistMiniVisual />
                  <p className="text-sm font-semibold leading-6 text-ink/70">{heroContent.artistCard.body}</p>
                </div>
              </div>
            </a>

            <a
              href={heroContent.dataCard.href}
              className="painted-card hero-card-interactive hero-card-cool night-panel group relative block min-h-[620px] cursor-pointer overflow-hidden rounded-[2rem] border border-cyan-200/20 p-5 shadow-2xl shadow-black/40 backdrop-blur focus:outline-none focus:ring-4 focus:ring-cyan-200/30"
              aria-label={heroContent.dataCard.ariaLabel}
            >
              <DataLayer />
              <div className="relative grid min-h-[580px] grid-rows-[255px_52px_230px] gap-y-5">
                <div className="hero-card-title-block">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gilt text-[#071224] shadow-lg shadow-gilt/20 gold-glow">
                    <BrainCircuit size={26} aria-hidden />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-gilt">{heroContent.dataCard.eyebrow}</p>
                  <h2 className="hero-card-heading mt-4 text-white">{heroContent.dataCard.title}</h2>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  {heroContent.dataCard.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="hero-card-lower h-[230px] rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <div className="mb-4 flex items-end gap-2">
                    {heroContent.dataCard.barHeights.map((height, index) => (
                      <span
                        key={`${height}-${index}`}
                        className="w-full rounded-t-md bg-gradient-to-t from-lapis via-cyan-200 to-gilt transition group-hover:brightness-125"
                        style={{ height }}
                      />
                    ))}
                  </div>
                  <p className="text-sm font-semibold leading-6 text-white/70">{heroContent.dataCard.body}</p>
                </div>
              </div>
            </a>
          </motion.div>
        </motion.div>

        <a
          href={heroContent.scrollPrompt.href}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white/70 backdrop-blur transition hover:bg-white hover:text-ink lg:inline-flex"
        >
          {heroContent.scrollPrompt.label}
          <ArrowDown size={15} aria-hidden />
        </a>
      </div>

      <Orbit className="absolute bottom-8 right-8 h-16 w-16 text-white/10 slow-spin" aria-hidden />
    </header>
  );
}
