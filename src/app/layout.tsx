import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import { ThemeProvider } from "@/lib/useTheme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tapash Kumar | AI & Data Science Portfolio",
    template: "%s | Tapash Kumar"
  },
  description: "A showcase of my web development projects and skills. Explore my work in modern web technologies including React, Next.js, and TypeScript.",
  keywords: ["web developer", "portfolio", "React", "Next.js", "TypeScript", "full-stack developer"],
  authors: [{ name: "Tapash Kumar" }],
  creator: "Tapash Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Tapash565",
    title: "Tapash Kumar | AI & Data Science",
    description: "Portfolio of Tapash Kumar - Data Scientist, ML Engineer, and AI Specialist.",
    siteName: "Tapash Kumar Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        <ThemeProvider>
          <Navigation />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
