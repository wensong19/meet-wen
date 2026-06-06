import type { LucideIcon } from "lucide-react";
import { Cpu, LineChart, Sparkles } from "lucide-react";

export type StorySection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  details: string[];
  icon: LucideIcon;
  tone: "warm" | "jade" | "lapis" | "plum";
  glow: "warm" | "cool" | "bridge";
};

// Edit story page heading and side labels here.
export const storySectionContent = {
  eyebrow: "Story Path",
  title: "Three luminous rooms: creative roots, data fluency, and the bridge between them.",
  clickHint: "Open story",
  sideLabels: {
    warm: "Roots",
    jade: "Pattern",
    lapis: "Signal",
    plum: "Expression"
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
    details: [
      "Chinese painting and dance training from age four",
      "Father: Chinese traditional painter; mother: traditional dancer",
      "First exhibition memories with grandpa and dad",
      "Paintings, dance, travel, cooking, and daily visual memory"
    ],
    icon: Sparkles,
    tone: "warm",
    glow: "warm"
  },
  {
    id: "data-nerd",
    eyebrow: "The Data Nerd",
    title: "Signals, systems, and data became my second creative language.",
    body:
      "Later, Wen discovered another kind of pattern language: math, data, models, and signals. Her professional journey moved from healthcare analytics and dashboards to AI/ML, NLP, cybersecurity analytics, and agentic AI workflows.",
    details: [
      "Math sensitivity, data intuition, and hidden structure",
      "Federal healthcare analytics, CMS work, dashboards, and storytelling",
      "AI/ML, NLP, automation, Python, SAS, SQL, Power BI, and Tableau",
      "FDA cybersecurity analytics, Splunk, and agentic AI learning"
    ],
    icon: Cpu,
    tone: "lapis",
    glow: "cool"
  },
  {
    id: "bridge",
    eyebrow: "The Bridge",
    title: "Art and data connect through pattern, rhythm, structure, and human-centered storytelling.",
    body:
      "The same habits that support painting also support analysis: seeing structure, staying patient with complexity, practicing discipline, and turning patterns into stories people can understand and use.",
    details: [
      "Pattern recognition across images, dashboards, and datasets",
      "Storytelling that makes complex systems easier to understand",
      "Discipline, structure, iteration, and visual thinking",
      "Human-centered thinking as the shared purpose"
    ],
    icon: LineChart,
    tone: "jade",
    glow: "bridge"
  }
];
