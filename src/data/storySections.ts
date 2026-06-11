import type { LucideIcon } from "lucide-react";
import { Cpu, Sparkles } from "lucide-react";

export type StorySection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  icon: LucideIcon;
  tone: "warm" | "lapis";
  glow: "warm" | "cool";
};

// Edit story page heading and side labels here.
export const storySectionContent = {
  eyebrow: "Story Path",
  title: "",
  clickHint: "Open story",
  sideLabels: {
    warm: "Roots",
    lapis: "Signal"
  }
};

// Edit story cards here: section ids are used as anchor targets.
export const storySections: StorySection[] = [
  {
    id: "creative-world",
    eyebrow: "Roots & Expression",
    title: "Brushwork, rhythm, and memory shaped the way I see.",
    body:
      "Wen grew up surrounded by painting, dance, and family studios. Trained in Chinese traditional painting and dance from age four, she learned to notice line, rhythm, color, discipline, and emotion long before she ever called herself a data scientist.",
    icon: Sparkles,
    tone: "warm",
    glow: "warm"
  },
  {
    id: "data-nerd",
    eyebrow: "The Data Nerd",
    title: "Data, syntax, and logic became Wen’s nerdy creative language.",
    body:
      "Later, Wen found another kind of pattern language: data, logic, code, and models. What started as a love of math and statistical analysis grew into a career in programming, machine learning, visualization, and applied analytics. She has built dashboards, developed analytics platforms, explored AI/ML methods, studied algorithmic bias, and turned complex federal health data into tools and stories people can actually use.",
    icon: Cpu,
    tone: "lapis",
    glow: "cool"
  }
];
