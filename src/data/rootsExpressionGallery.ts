export type RootsExpressionTabId = "paintings" | "dance" | "life";

export type RootsExpressionItem = {
  title: string;
  description: string;
  image: string;
  fallbackImage: string;
  tags: string[];
};

// Edit Roots & Expression stories, descriptions, tags, and image paths here.
// Place the original photos or finished collages in public/images/roots-expression/.
export const rootsExpressionGallery: Record<RootsExpressionTabId, RootsExpressionItem[]> = {
  paintings: [
    {
      title: "First Exhibition Memory",
      description:
        "In the Year of the Tiger, 1998, three generations of my family — my grandpa, my dad, and me — shared an exhibition in our small town. Because both my dad and my grandpa were known for tiger paintings, the exhibition drew a great deal of local attention and became one of my earliest artistic memories.",
      image: "/images/roots-expression/first-exhibition-memory.jpg",
      fallbackImage: "/images/childhood-exhibition.svg",
      tags: ["Family", "Exhibition", "Year of the Tiger", "1998", "Three Generations"]
    },
    {
      title: "Chinese Painting Practice",
      description:
        "A large part of my early training came through Chinese traditional painting — brushwork, ink, composition, and patience.",
      image: "/images/roots-expression/chinese-painting-collage.jpg",
      fallbackImage: "/images/chinese-painting.svg",
      tags: ["Chinese Painting", "Brushwork", "Ink", "Tradition"]
    },
    {
      title: "Post-Impressionist Studies",
      description:
        "As I grew older, I became deeply drawn to late 19th-century European art — especially Monet, Van Gogh, Klimt, and Renoir. I began by studying and recreating their works, then used those experiments to explore color, mood, brushwork, and eventually a visual style of my own.",
      image: "/images/roots-expression/van-gogh-and-other-styles-collage.jpg",
      fallbackImage: "/images/van-gogh-inspired.svg",
      tags: ["Post-Impressionism", "Monet", "Van Gogh", "Klimt", "Renoir", "Style Exploration"]
    }
  ],
  dance: [
    {
      title: "Dance Archive",
      description:
        "My mom began training me in traditional and folk dance when I was five. It was beautiful, but also demanding — long practices, competitions, group performances, solo moments, and the discipline of repeating movements until they became part of the body.\n\nDance shaped my sense of rhythm, patience, expression, and movement from an early age. It taught me that beauty often comes from practice, endurance, and emotion working together.",
      image: "/images/roots-expression/dance-archive-collage.jpg",
      fallbackImage: "/images/dance-archive.svg",
      tags: ["Dance", "Rhythm", "Discipline", "Performance"]
    }
  ],
  life: [
    {
      title: "Food and Everyday Beauty",
      description:
        "In Chinese culture, delicious food is one of life’s greatest joys. For me, food is also a form of memory — a way to remember places, people, travel, and love.\n\nAs we traveled around the world, we tasted different cuisines, collected food memories, and then tried to recreate those flavors at home. Cooking became another creative practice: part curiosity, part care, and part storytelling.",
      image: "/images/roots-expression/food-and-everyday-beauty.jpg",
      fallbackImage: "/images/cooking-studio.svg",
      tags: ["Food", "Travel", "Cooking", "Memory", "Home", "Joy", "Care"]
    }
  ]
};

export const rootsExpressionTabs: { id: RootsExpressionTabId; label: string }[] = [
  { id: "paintings", label: "Paintings" },
  { id: "dance", label: "Dance" },
  { id: "life", label: "Life" }
];

export const rootsWorldContent = {
  title: "Roots & Expression",
  subtitle: "A visual story of paintings, dance, and everyday creative life."
};
