# DCG Website

Official website for DTU Consulting Group (DCG) - Delhi Technological University's premier student-run consulting society.

## 🌐 Overview

This is a modern, responsive web application showcasing DCG's services, projects, team, and resources. Built with React, TypeScript, and Vite for optimal performance.

## 🚀 Tech Stack

- **Frontend Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6
- **Routing:** React Router DOM 7
- **Styling:** Tailwind CSS 3
- **Icons:** Font Awesome 6, Lucide React
- **Carousel:** Swiper 11

## 📁 Project Structure

```
dcg-website/
├── public/                 # Static assets
│   ├── Images/            # Image files (logos, photos, etc.)
│   └── _redirects         # Netlify/Vercel redirects
├── src/
│   ├── Components/        # Reusable UI components
│   │   ├── Navbar/       # Navigation bar
│   │   └── Footer/       # Footer component
│   ├── Pages/
│   │   └── Public/       # Public-facing pages
│   │       ├── HomePage/     # Landing page
│   │       │   └── Components/   # Home page sections
│   │       ├── Projects/     # Projects showcase
│   │       │   └── Components/
│   │       ├── Resources/    # Resources & tools
│   │       │   └── Components/
│   │       └── Events/       # Events & activities
│   ├── assets/           # Project assets
│   ├── App.tsx           # Main app component with routes
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── package.json          # Dependencies & scripts
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── README.md            # This file
```

## 🎯 Key Features

### Pages

1. **Home** (`/`)
   - Hero section with call-to-action
   - Services overview (9 core strengths)
   - Impact metrics
   - Client logos
   - Executive council carousel
   - President's quote
   - Testimonials
   - FAQ section
   - Contact form

2. **Projects** (`/projects`)
   - International projects showcase
   - Domestic projects showcase
   - Technical projects
   - NGO partnerships

3. **Resources** (`/resources`)
   - Resource library
   - Newsletter subscription
   - FAQ section

4. **Events** (`/events`)
   - Past and upcoming events
   - Event details and galleries

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/eternalnomad404/dcg-website.git
   cd dcg-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Component Architecture

### Shared Components

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Site-wide footer with links and info

### Page-Specific Components

Each page has its own `Components/` folder containing:
- Modular, reusable sections
- Self-contained logic and styling
- Props-based customization

## 🌐 Routing

The application uses React Router DOM for client-side routing:

```tsx
/              → HomePage
/projects      → Projects
/resources     → Resources
/events        → Events
```

## 🔧 Configuration Files

- **`tsconfig.json`**: TypeScript compiler options
- **`tailwind.config.js`**: Tailwind CSS theme customization
- **`vite.config.ts`**: Vite build configuration
- **`eslint.config.js`**: ESLint rules and plugins
- **`postcss.config.js`**: PostCSS plugins (Tailwind)

## 📦 Dependencies

### Core Dependencies
- `react` & `react-dom`: UI library
- `react-router-dom`: Routing
- `lucide-react`: Modern icon set
- `@fortawesome/fontawesome-free`: Icon library
- `swiper`: Touch-enabled carousel

### Development Dependencies
- `typescript`: Type safety
- `vite`: Build tool
- `tailwindcss`: Utility-first CSS
- `eslint`: Code linting

## 🎨 Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Colors**: Brand colors defined in `tailwind.config.js`
- **Responsive Design**: Mobile-first approach
- **Component-Scoped Styles**: Each component manages its own styling

## 🌍 Deployment

The application is configured for deployment on:
- **Vercel** (via `vercel.json`)
- **Netlify** (via `public/_redirects`)

### Deployment Steps

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting service
3. Ensure SPA redirects are configured

## 📝 Environment Variables

Currently, this project does not require any environment variables as it's a pure frontend application without backend integration.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🏗️ Recent Changes

### Latest Updates (December 2025)
- ✅ Removed all authentication (Supabase, Firebase)
- ✅ Removed admin dashboard and user tracking
- ✅ Removed Think Tank and Login pages
- ✅ Cleaned up unused components and dependencies
- ✅ Simplified to pure frontend application
- ✅ Updated project structure for better organization
- ✅ Replaced outdated leadership information
- ✅ Fixed navigation routing

## 📄 License

This project is maintained by DTU Consulting Group.

## 📞 Contact

For queries regarding DCG or this website:
- **Website**: Visit the live site
- **LinkedIn**: DTU Consulting Group
- **Email**: Contact through website form

---

**Maintained with ❤️ by the DCG Tech Team**
