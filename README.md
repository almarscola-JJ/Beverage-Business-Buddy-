# Beverage Business Buddy

A comprehensive full-stack application for managing a beverage company's financial accounts and operations.

## 📋 Project Overview

**Beverage Business Buddy** is a business management system that helps beverage companies:
- Manage financial accounts
- Track operations and inventory
- Handle authentication and user management
- Organize business data efficiently

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Backend:** Node.js/Bun + TanStack Router
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Styling:** CSS + Custom UI Components
- **Package Manager:** Bun

## 🏗️ Project Structure

```
src/
├── components/          # React UI components
│   ├── ui/             # Reusable UI components
│   ├── AppShell.tsx    # Main app shell
│   └── PageHeader.tsx  # Page header component
├── hooks/              # Custom React hooks
│   ├── useAuth.tsx     # Authentication hook
│   └── use-mobile.tsx  # Mobile detection hook
├── integrations/       # Third-party integrations
│   └── supabase/       # Supabase setup and config
├── lib/                # Utilities and helpers
│   ├── api/            # API utilities
│   ├── config.server.ts
│   ├── error-capture.ts
│   └── utils.ts
├── routes/             # TanStack Router configuration
│   ├── _authenticated/ # Protected routes
│   ├── auth.tsx        # Auth routes
│   └── index.tsx       # Home route
├── styles/             # Global styles
└── supabase/           # Database migrations
    └── migrations/
```

## 🚀 Getting Started

### Prerequisites
- Bun (or Node.js with npm)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/almarscola-JJ/Beverage-Business-Buddy-.git
   cd Beverage-Business-Buddy-
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your Supabase credentials
   ```

4. **Run database migrations:**
   ```bash
   bun run migrate
   ```

5. **Start development server:**
   ```bash
   bun run dev
   ```

## 📝 Development Status

This project is currently under active development with files being migrated from Lovable.

### Migration Checklist

- [ ] Configuration files (package.json, tsconfig.json, vite.config.ts, bunfig.toml)
- [ ] Environment setup (.env, .env.example)
- [ ] Components (UI, AppShell, PageHeader)
- [ ] Hooks (useAuth, use-mobile)
- [ ] Routes and Router setup (__root.tsx, auth.tsx, index.tsx, router.tsx)
- [ ] Supabase integrations and auth setup
- [ ] Database migrations and config
- [ ] Styling and CSS
- [ ] Server configuration and utilities
- [ ] Error handling and reporting

## 📦 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier
- `bun run migrate` - Run database migrations

## 🔐 Environment Variables

Required environment variables (see `.env.example`):
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `VITE_API_URL` - API endpoint URL
- `DATABASE_URL` - Database connection string
- `SESSION_SECRET` - Secret for session management

## 📞 Support & Contributing

For issues or questions, please open an issue on GitHub.

---

**Created:** June 15, 2026  
**Status:** 🔄 In Progress  
**Last Updated:** June 15, 2026
