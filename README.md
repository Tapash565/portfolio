# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark mode support
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎯 TypeScript for type safety + Three.js 3D background + Three.js 3D background
- 💅 Tailwind CSS for styling
- 🔍 SEO optimized with metadata and sitemap
- ♿ Accessible components

## Pages

- **Home**: Hero section with introduction and quick links
- **Projects**: Showcase of development projects with filtering
- **About**: Skills, experience, and background
- **Contact**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Update the following files with your information:

- **Layout metadata**: `src/app/layout.tsx`
- **Home page**: `src/app/page.tsx`
- **Projects**: `src/app/projects/page.tsx`
- **About page**: `src/app/about/page.tsx`
- **Contact page**: `src/app/contact/page.tsx`
- **SEO files**: `src/app/sitemap.ts` and `src/app/robots.ts`

### Adding Projects

Edit the `projects` array in `src/app/projects/page.tsx` with your own project data.

### Adding Skills

Update the `skills` array in `src/app/about/page.tsx` with your technologies.

### Contact Form Integration

The contact form in `src/components/sections/ContactForm.tsx` is currently in demo mode. To make it functional:

1. Choose an email service (e.g., Resend, SendGrid, EmailJS)
2. Set up API route in `src/app/api/contact/route.ts`
3. Update the form submission handler

### Images

Add your project images to the `public/projects/` directory and update the image paths in your project data.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on Vercel, Netlify, or any platform that supports Next.js.

### Deploy on Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## License

MIT License - feel free to use this template for your own portfolio!

## Learn More

To learn more about Next.js, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

