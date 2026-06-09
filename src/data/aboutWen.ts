// Edit site-wide footer text here.
export const siteContent = {
  metadata: {
    title: "Meet Wen: Half Artist, Half Data Nerd",
    description: "A visual AI profile about creativity, data science, cybersecurity, and lifelong learning."
  },
  footer: "Meet Wen: Half Artist, Half Data Nerd."
};

// Edit floating navigation labels and anchor targets here.
export const navContent = {
  brand: "Meet Wen",
  items: [
    { href: "#top", label: "Home" },
    { href: "#creative-world", label: "Creative" },
    { href: "#data-nerd", label: "Data Nerd" },
    { href: "#ask-wen", label: "Ask Wen" }
  ]
};

// Edit homepage hero text, CTA labels, and hero card copy here.
export const heroContent = {
  title: "Meet Wen: Half Artist, Half Data Nerd",
  subtitle:
    "A visual story of brushstrokes, rhythm, data, and curiosity — where an artist’s eye meets a data nerd’s heart.",
  ctas: {
    artist: {
      label: "Explore Artist Side",
      href: "#creative-world"
    },
    data: {
      label: "Explore Data Nerd Side",
      href: "#data-nerd"
    },
    ask: {
      label: "Ask Wen",
      href: "#ask-wen"
    }
  },
  artistCard: {
    href: "#creative-world",
    ariaLabel: "Explore Artist Wen and creative world",
    eyebrow: "Artist Wen",
    title: "Brush, rhythm, wonder",
    tags: ["Painting", "Dance", "Life"],
    body: "Brushstrokes, rhythm, and curiosity shape a creative life in motion."
  },
  dataCard: {
    href: "#data-nerd",
    ariaLabel: "Explore Data Nerd Wen and professional work",
    eyebrow: "Data Nerd Wen",
    title: "Numbers, patterns, models",
    tags: ["Math", "Algorithms", "Visualization", "AI/ML"],
    body: "From a love of math and statistical analysis to machine learning, visualization, and AI.",
    barHeights: [62, 38, 86, 54, 100, 72, 44]
  },
  scrollPrompt: {
    label: "Scroll into the story",
    href: "#story"
  }
};
