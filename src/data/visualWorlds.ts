export type ToolNode = {
  label: string;
  x: number;
  y: number;
  tone: "gold" | "blue" | "teal";
};

// Edit shared modal labels here.
export const modalContent = {
  closeLabel: "Close",
  previousLabel: "Previous",
  nextLabel: "Next"
};

// Edit Data Nerd modal content here. Visuals are abstract placeholders only.
export const dataWorld = {
  title: "The Data Nerd",
  subtitle: "Pattern, logic, and problem-solving became my second creative language.",
  tools: [
    { label: "Python", x: 14, y: 28, tone: "gold" },
    { label: "SAS", x: 28, y: 58, tone: "blue" },
    { label: "SQL", x: 39, y: 22, tone: "teal" },
    { label: "Splunk", x: 52, y: 48, tone: "gold" },
    { label: "Power BI", x: 66, y: 28, tone: "blue" },
    { label: "Tableau", x: 78, y: 60, tone: "teal" },
    { label: "ML", x: 24, y: 82, tone: "gold" },
    { label: "NLP", x: 48, y: 78, tone: "blue" },
    { label: "GenAI", x: 70, y: 82, tone: "gold" },
    { label: "Cybersecurity", x: 88, y: 38, tone: "teal" }
  ] satisfies ToolNode[],
  timeline: ["Math sensitivity", "Healthcare analytics", "AI/ML", "Cybersecurity analytics", "Agentic AI"],
  projects: [
    {
      title: "Healthcare Analytics",
      description: "Federal healthcare data, dashboards, policy analytics, and storytelling."
    },
    {
      title: "AI/ML + NLP",
      description: "Machine learning, text analytics, automation, and practical model development."
    },
    {
      title: "Cybersecurity Analytics",
      description: "Splunk-based analytics, anomaly detection, and AI-assisted security workflows."
    }
  ],
  quote: "Art trained my eyes. Data trained my logic."
};

// Edit Bridge modal comparison content here.
export const bridgeWorld = {
  title: "The Bridge",
  centerMessage: "Both worlds are about seeing what others may miss.",
  quote: "I do not see art and data as opposites. I see them as two ways of paying attention.",
  artistTitle: "Artist habits",
  dataTitle: "Data habits",
  artistHabits: ["Observation", "Rhythm", "Composition", "Patience", "Emotion", "Visual storytelling"],
  dataHabits: ["Pattern recognition", "Logic", "Structure", "Evidence", "Iteration", "Decision support"]
};
