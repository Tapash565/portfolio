import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";
import BackgroundScene from "@/components/layout/BackgroundScene";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Full-page 3D Animated Background */}
      <BackgroundScene />
      
      {/* Content Wrapper with proper layering */}
      <div className="relative z-10">
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Projects />

      {/* Featured CTA for Contact */}
      <section className="py-24 relative transition-all duration-500">
        {/* Subtle background overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to innovate?</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            I&#39;m currently open to new projects and collaborations in the field of Artificial Intelligence and Data Science.
          </p>
          <a
            href="/contact"
            className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
      </div>
    </main>
  );
}
