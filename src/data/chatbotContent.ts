export type ChatPrompt = {
  question: string;
  answer: string;
};

// Edit Ask W labels, starter message, fallback answer, and keyword routing here.
export const chatbotContent = {
  section: {
    eyebrow: "Ask Wen",
    title: "Ask W about Wen’s good stories."
  },
  introMessage:
    "Beep beep — W is online. Ask me anything. I know the good stories.",
  fallbackAnswer:
    "Hmm, my tiny robot brain is not good at this one. Could you please check with Wen and share the answer with me?",
  promptStarterTitle: "Ask W these",
  promptStarterSubtitle: "Tiny robot guide · story mode",
  runPromptLabel: "Ask W",
  consoleTitle: "Ask W Console",
  consoleSubtitle: "W is awake · story mode",
  statusLabel: "W mode",
  inputPlaceholder: "Ask W something about Wen...",
  keywordResponses: [
    { keywords: ["outside work", "free time", "travel", "museum"], promptIndex: 0 },
    { keywords: ["food", "cook", "cooking", "dim sum"], promptIndex: 1 },
    { keywords: ["movie", "movies", "film", "007", "kingsman"], promptIndex: 2 },
    { keywords: ["strangest", "nerdy thing", "exam", "test"], promptIndex: 3 },
    { keywords: ["not know", "may not know", "confidence", "confident"], promptIndex: 4 },
    { keywords: ["data work", "analytics", "dashboard", "programming"], promptIndex: 5 },
    { keywords: ["favorite place", "favourite place", "favorite city", "travel photos"], promptIndex: 6 },
    { keywords: ["unexpected hobby", "lego", "eiffel tower", "sagrada"], promptIndex: 7 }
  ]
};

// Edit suggested questions and self-contained prepared answers here.
export const samplePrompts: ChatPrompt[] = [
  {
    question: "What does Wen do outside work?",
    answer:
      "Wen loves traveling around the world, visiting art museums, collecting visual memories, and turning those memories into paintings, meals, and stories. She is the kind of person who may visit a museum, fall in love with a color palette, then come home wanting to paint, cook, or reorganize her whole life around the feeling."
  },
  {
    question: "What kind of food does Wen love to cook?",
    answer:
      "Wen believes good food is one of life’s greatest joys. She loves traditional Chinese dim sum, classic dishes you would find in a fancy Chinese restaurant, and anything with beautiful flavor and technique. She can also wander into French and Italian cooking when travel memories call her back.",
  },
  {
    question: "What movies does Wen secretly enjoy?",
    answer:
      "Wen does not usually go for classic ‘girl movies.’ She is much more entertained by action movies — even the silly ones. The 007 series, Kingsman, RED, and similar movies are her kind of fun: stylish, fast, dramatic, and just a little ridiculous in the best way."
  },
  {
    question: "What is the strangest nerdy thing about Wen?",
    answer:
      "Wen actually likes taking exams. Very nerdy, yes. She enjoys surviving the boring study phase, feeling nervous before the test, and then getting the satisfaction of a good score. For her, exams are like tiny boss fights with paperwork."
  },
  {
    question: "What is something people may not know about Wen?",
    answer:
      "Wen may look confident, but she is not always as confident as she appears. After years of competitions, performances, evaluations, and being judged, the first question she often asks herself is, ‘Am I good enough?’ She hides it well, but a lot of her strength comes from quietly trying very hard to keep up, improve, and keep going."
  },
  {
    question: "What kind of data work has Wen done?",
    answer:
      "Wen’s data journey started early — first as an intern statistician at Novartis, where she began turning numbers into real-world insight. She later joined a consulting company and worked on many CDC and NIH projects, building experience across public health, research, analytics, and federal data systems.\n\nSome of the projects she is most proud of include work connected to one of the largest HIV surveillance databases, NIH cancer studies, and CMS machine learning models. Over time, her work grew from statistical programming into dashboards, analytics platforms, machine learning, AI methods, and tools that help people understand complex data."
  },
  {
    question: "What is Wen’s favorite place?",
    answer:
      "Wen travels a lot, so picking one favorite city is almost impossible. If you ask her at different times, I guarantee the answer may change. She loves European cities and has visited many of them — collecting photos, videos, museum memories, food memories, and little visual details everywhere she goes. Honestly, just ask her to show you her travel photos. There are a lot."
  },
  {
    question: "What is Wen’s most unexpected hobby?",
    answer:
      "Wen is a huge LEGO fan. She has built many sets, and so far her largest one is the Eiffel Tower. Her next target is the Sagrada Família church — because apparently tiny bricks, architecture, patience, and mild suffering are also part of the data nerd personality."
  }
];

// Known prepared answers that can be typed manually without appearing as prompt starters.
export const additionalPreparedPrompts: ChatPrompt[] = [
  {
    question: "What should I look at first?",
    answer:
      "Start with Roots & Expression for the emotional side of Wen’s story, then visit The Data Nerd to see where her pattern-loving brain found another playground."
  }
];
