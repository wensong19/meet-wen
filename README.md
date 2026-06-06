# Meet Wen: Half Artist, Half Data Nerd

A polished Milestone 1 visual prototype for Wen Song's personal AI profile website. It blends an art-gallery feel with a modern analytics/AI portfolio and a mock "Ask Wen" chatbot.

## What Is Included

- Next.js App Router with TypeScript
- Tailwind CSS styling
- Framer Motion for lightweight page and card animation
- Responsive landing hero with split Artist / Data Nerd concept
- Interactive story sections for Roots & Expression, The Data Nerd, and The Bridge
- Sticky floating navigation with smooth-scroll anchors
- Roots & Expression modal with Paintings, Dance, and Life image collections
- Client-side mock chatbot console with sample questions and canned answers
- Editable content modules under `src/data/`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Deployment

This app is ready for Vercel deployment:

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Deploy.

No environment variables are required for Milestone 1.

## Future Milestones

- Replace SVG placeholders in `public/images/` with Wen's real artwork and photos.
- Add a local Wen knowledge file for retrieval.
- Connect the Ask Wen panel to a secure server-side OpenAI route.
- Add richer related visual content returned by the chatbot.

## Important

The current chatbot uses mock responses only. It does not call the OpenAI API and no API keys should be committed to source control.
