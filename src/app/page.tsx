import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Projects />

      {/* Featured CTA for Contact */}
      <section className="py-24 bg-gradient-to-b from-transparent to-blue-500/5 dark:to-blue-900/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to innovate?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            I&#39;m currently open to new projects and collaborations in the field of Artificial Intelligence and Data Science.
          </p>
          <a
            href="/contact"
            className="px-10 py-4 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-full font-bold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
