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
      description: "Dance shaped rhythm, discipline, expression, and movement in my life from an early age.",
      image: "/images/roots-expression/dance-archive-collage.jpg",
      fallbackImage: "/images/dance-archive.svg",
      tags: ["Dance", "Movement", "Performance", "Rhythm"]
    }
  ],
  life: [
    {
      title: "Food and Everyday Beauty",
      description:
        "Food, care, and daily rituals are also part of my creative life — another way memory and beauty take shape.",
      image: "/images/roots-expression/food-and-everyday-beauty.jpg",
      fallbackImage: "/images/cooking-studio.svg",
      tags: ["Food", "Cooking", "Daily Life", "Care"]
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
