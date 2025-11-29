# DRYPNOSIS - Official Website

A premium, luxury music website for artist DRYPNOSIS featuring a futuristic design aesthetic with glassmorphism effects and smooth animations.

## 🎵 Features

- **Music Player**: Built-in audio player with play/pause, seek, and volume controls
- **Discography**: Complete track catalog with streaming platform links
- **Beats Store**: Browse and purchase exclusive beats
- **AI Chatbot (DRYP-BOT)**: Interactive assistant for visitor queries
- **Responsive Design**: Optimized for all devices
- **Contact Form**: Direct communication with artist management

## 🚀 Technologies Used

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router v6** - Client-side routing
- **React Hook Form** - Form validation
- **Zod** - Schema validation
- **Shadcn UI** - Beautiful component library

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd drypnosis-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run on `http://localhost:8080`

## 🎧 Audio Setup

Place your MP3 audio files in the `public/audio/` directory:

```
public/audio/
  └── sample.mp3
```

Update the audio paths in `src/lib/mockData.ts` to match your file names.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MusicPlayer.tsx
│   ├── ChatBot.tsx
│   └── ui/             # Shadcn UI components
├── pages/              # Route pages
│   ├── Home.tsx
│   ├── Discography.tsx
│   ├── Store.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── lib/                # Utilities and data
│   ├── mockData.ts
│   └── utils.ts
├── index.css           # Design system tokens
└── main.tsx           # App entry point
```

## 🎨 Design System

The project uses a custom design system with:
- **HSL color variables** for theming
- **Glassmorphism effects** for cards and overlays
- **Custom gradients** and glows
- **Smooth animations** with framer-motion
- **Modern typography** with futuristic aesthetic

## 🔨 Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The optimized build will be in the `dist/` directory.

## 📝 License

All rights reserved © DRYPNOSIS

## 👨‍💻 Development

This is a frontend-only application using mock data. To add backend functionality:

- Integrate a database (PostgreSQL, MongoDB)
- Add authentication system
- Connect payment gateway for store
- Implement real AI chatbot API

---

Built with ❤️ for premium music experiences
