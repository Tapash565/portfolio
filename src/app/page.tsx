"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";
import BackgroundScene from "@/components/layout/BackgroundScene";
import BackgroundWrapper from "@/components/layout/BackgroundWrapper";
import { useTheme } from '@/lib/useTheme';

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <BackgroundScene />

      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Projects />

        {isDark && (
          <section className="py-24 relative transition-all duration-500">
            <BackgroundWrapper />
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
                Ready to innovate?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                I&#39;m currently open to new projects and collaborations in the field of Artificial Intelligence and Data Science.
              </p>
              <a
                href="/contact"
                className="px-10 py-4 rounded-full font-bold hover:scale-105 transition-all inline-block shadow-lg bg-white text-black hover:bg-zinc-200"
              >
                Get In Touch
              </a>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </main>
  );
}