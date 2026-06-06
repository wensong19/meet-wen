export type ChatPrompt = {
  question: string;
  answer: string;
};

export type SuggestedVisualCard = {
  title: string;
  meta: string;
};

// Edit chatbot labels, starter message, fallback answer, and visual-card suggestions here.
export const chatbotContent = {
  section: {
    eyebrow: "Ask Wen",
    title: "A mock AI profile console with suggested questions and visual cards."
  },
  introMessage:
    "Mock Ask Wen is online. Ask about art roots, analytics work, cybersecurity signals, or the bridge between creative and technical thinking.",
  fallbackAnswer:
    "Mock answer: Wen's profile blends art, data science, cybersecurity analytics, and AI. Later, this panel can use a secure server-side OpenAI route with a local Wen knowledge file.",
  promptStarterTitle: "Prompt starters",
  promptStarterSubtitle: "Local mock answers only",
  runPromptLabel: "Run mock response",
  suggestedVisualCardsTitle: "Suggested visual cards",
  consoleTitle: "Ask Wen Console",
  consoleSubtitle: "No API connected",
  statusLabel: "Mock mode",
  inputPlaceholder: "Ask a mock question about Wen...",
  keywordResponses: [
    { keywords: ["art", "paint", "dance"], promptIndex: 0 },
    { keywords: ["data", "analytics", "work"], promptIndex: 1 },
    { keywords: ["connect", "bridge", "pattern"], promptIndex: 2 }
  ],
  suggestedVisualCards: [
    { title: "Childhood Exhibition", meta: "Origin card" },
    { title: "Chinese Brush Painting", meta: "Artist card" },
    { title: "Data Nerd Toolkit", meta: "Lab card" }
  ] satisfies SuggestedVisualCard[]
};

// Edit sample chatbot questions and mock answers here.
export const samplePrompts: ChatPrompt[] = [
  {
    question: "How did Wen become both artistic and technical?",
    answer:
      "Wen's creative foundation began with Chinese painting and dance at age four. Her technical side grew through math sensitivity, analytics, dashboards, machine learning, NLP, and cybersecurity work. The common thread is pattern recognition."
  },
  {
    question: "What kind of data work has Wen done?",
    answer:
      "Wen has worked across federal healthcare analytics, CMS-style dashboarding, FDA cybersecurity analytics, Splunk analysis, Python, SAS, SQL, Tableau, Power BI, AI/ML, NLP, and agentic AI exploration."
  },
  {
    question: "How do art and data connect for Wen?",
    answer:
      "Both require seeing structure before it is obvious. In art, that means composition, rhythm, and color. In data, it means signals, anomalies, narratives, and decisions. Wen uses visual thinking to make complex systems more understandable."
  },
  {
    question: "What visuals should I look at first?",
    answer:
      "Start with the childhood exhibition placeholder, then compare the Chinese painting, Van Gogh-inspired, and Klimt-inspired cards. They show how family history, color, pattern, and movement can become a personal visual archive."
  }
];
