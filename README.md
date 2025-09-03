# Enable AI - Educational Platform

A modern educational platform built with Next.js that helps users become deeply competent with AI across work and life. Features a comprehensive tutorial system, search functionality, and responsive design with a Carolina blue theme.

## Features

- 🎯 **Curated Learning Resources**: Browse tutorials, articles, and courses across multiple domains
- 🔍 **Advanced Search & Filtering**: Filter by content type, domain, and skill level
- 📱 **Responsive Design**: Optimized for desktop and mobile experiences
- 🎨 **Modern UI**: Built with Tailwind CSS v4 and shadcn/ui components
- 🔐 **Authentication Modal**: Login/register with OAuth support (Google, GitHub)
- 📄 **Tutorial System**: Rich markdown content with syntax highlighting
- 🎯 **Pagination**: Efficient content browsing with pagination controls

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Images**: Unsplash API integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd enable-ai
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   └── tutorial/[id]/     # Dynamic tutorial pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── figma/            # Figma-specific components
│   └── *.tsx             # Feature components
├── lib/                  # Utility functions and data
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Key Components

- **Header**: Navigation with auth modal triggers
- **Hero**: Bold hero section with main headline
- **SearchFilters**: Advanced filtering for learning resources
- **TrainingGrid**: Responsive grid with pagination
- **TutorialPage**: Rich content display with markdown support
- **AuthModal**: Authentication with OAuth options

## Styling System

The project uses a custom design system built on Tailwind CSS v4 with:

- **Carolina Blue Theme**: Primary color palette
- **CSS Custom Properties**: For consistent theming
- **Responsive Typography**: Mobile-first approach
- **Component-based Architecture**: Reusable UI patterns

## Content Management

Training content is currently managed through:
- Mock data in `/lib/data.ts`
- Figma asset integration for images
- Dynamic routing for tutorial pages

## Development Guidelines

- Use TypeScript for all new components
- Follow the existing component structure
- Maintain responsive design principles
- Use semantic HTML and proper accessibility
- Keep components focused and reusable


## License

This project is private and proprietary.