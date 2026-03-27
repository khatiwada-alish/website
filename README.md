# Alish Khatiwada - Portfolio

A modern, premium portfolio website showcasing projects, skills, and experience.

## Features

- **Responsive Design**: Optimized for all devices with smooth, adaptive layouts
- **Premium Animations**: Smooth transitions and interactions powered by Framer Motion
- **Dark Theme**: Modern dark color scheme with red and gold accents
- **Fully Typed**: Built with TypeScript for type safety
- **Component Library**: shadcn/ui components for consistent design
- **Performance Optimized**: Fast load times and smooth performance

## Project Structure

```
src/
├── components/
│   ├── portfolio/     # Portfolio section components
│   ├── ui/           # shadcn/ui components
│   └── ...           # Other reusable components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── styles/           # Global styles
```

## Technologies

This project is built with:

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **shadcn/ui** - Component library
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd <project-name>

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Customization

### Colors

Colors are defined in `src/index.css` using CSS variables:

- `--primary` - Primary red color (#E81C1C)
- `--accent` - Accent gold/yellow (#FFB81C)
- `--background` - Background color
- `--foreground` - Text color

### Fonts

The project uses:

- **Montserrat** - Headings
- **Inter** - Body text
- **JetBrains Mono** - Code/monospace

### Components

All shadc/ui components are located in `src/components/ui/` and can be customized in their respective files.

## Deployment

The project can be deployed on any static hosting service:

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### Docker

```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN npm install -g serve
CMD ["serve", "-s", "dist"]
```

## License

This project is open source and available under the MIT License.

## Contact

For inquiries, reach out via:
- Email: khatiwadaalish0@gmail.com
- GitHub: [github.com/khatiwada-alish](https://github.com/khatiwada-alish)
- LinkedIn: [linkedin.com/in/alish-khatiwada](https://linkedin.com/in/alish-khatiwada)
