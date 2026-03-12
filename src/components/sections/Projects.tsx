"use client"
import { motion } from 'framer-motion'
import { Github, ExternalLink, Database, Cpu, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/lib/useTheme'
import React from 'react'

type Project = {
  title: string
  description: string
  tech: string[]
  icon: React.ReactElement
  github: string
  demo: string
  borderAccent: string
  year: string
  category: string
}

const borderMap: Record<string, string> = {
  blue:   "border-t-blue-400",
  purple: "border-t-purple-400",
  pink:   "border-t-pink-400",
}

const projects: Project[] = [
  {
    title: "NLP-Based Movie Recommendation System",
    description: "A sophisticated recommendation engine leveraging LangChain, FAISS, and Hugging Face for semantic search and personalized suggestions. Features integrated LLMs for contextual movie discovery.",
    tech: ["LangChain", "FAISS", "Hugging Face", "FastAPI", "Next.js"],
    icon: <Database className="text-blue-400" />,
    github: "https://github.com/Tapash565/movie-recommendation-system",
    demo: "https://movie-recommendation-system-phi-lac.vercel.app/",
    borderAccent: "blue",
    year: "2025",
    category: "NLP / Recommendation"
  },
  {
    title: "AI Intelligent Chatbot",
    description: "An advanced NLP-driven chatbot capable of context-aware conversations and intent recognition using LangGraph and Vector Databases for RAG-based responses.",
    tech: ["LangChain", "LangGraph", "Vector Database", "RAG", "Streamlit"],
    icon: <MessageSquare className="text-purple-400" />,
    github: "https://github.com/Tapash565/chatbot-langgraph",
    demo: "#",
    borderAccent: "purple",
    year: "2026",
    category: "Conversational AI"
  },
  {
    title: "Brain MRI Prediction Using CNN",
    description: "Engineered a custom TensorFlow/Keras CNN for brain tumor detection using data augmentation and hyperparameter tuning. Achieved 94% F1-score with 12% accuracy improvement over baseline.",
    tech: ["Python", "TensorFlow", "Keras", "Scikit-learn", "CNN", "Data Augmentation", "FastAPI"],
    icon: <Cpu className="text-pink-400" />,
    github: "#",
    demo: "#",
    borderAccent: "pink",
    year: "2023",
    category: "Medical AI / CV"
  }
]

export default function Projects() {
  const { theme, mounted } = useTheme()
  const isDark = theme === 'dark'

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return null
  }

  /* ─── DARK MODE (preserved exactly) ──────────────────────── */
  if (isDark) {
    return (
      <section id="projects" className="relative py-24 overflow-hidden transition-all duration-500">
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Work</h2>
              <p className="text-lg max-w-xl text-zinc-500">
                Projects at the intersection of AI, ML, and real-world impact.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative p-8 rounded-2xl border-t-2 border border-white/10 transition-all duration-300 glass-morphism
                  ${borderMap[project.borderAccent]}
                  hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]`}
              >
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-sm mb-6 leading-relaxed text-zinc-400">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium transition-all duration-200
                        bg-white/5 text-zinc-400 hover:bg-indigo-500/20 hover:text-indigo-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <Link href={project.github} className="flex items-center gap-2 text-sm transition-colors text-zinc-400 hover:text-white">
                    <Github size={16} /> Code
                  </Link>
                  <Link href={project.demo} className="flex items-center gap-2 text-sm transition-colors ml-auto text-zinc-400 hover:text-white">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  /* ─── LIGHT MODE — interactive_projects_grid design ────────── */
  return (
    <section id="projects" className="relative py-24 overflow-hidden transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 max-w-2xl mb-20"
        >
          <div className="flex items-center gap-2 text-[#a13612] font-bold uppercase tracking-widest text-xs">
            <span className="h-px w-8 bg-[#a13612]" />
            <span>Case Studies</span>
          </div>
          <h2 className="text-slate-900 text-5xl md:text-7xl font-black leading-none tracking-tighter">
            SELECTED <br />
            <span className="text-[#a13612] italic font-light">PROJECTS</span>
          </h2>
          <p className="text-[#97604e] text-lg md:text-xl font-normal leading-relaxed mt-4">
            ML systems and AI applications developed at the intersection of research and real-world engineering.
          </p>
        </motion.div>

        {/* Projects grid — staggered offset */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24 md:gap-x-16 mb-0">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`perspective-1000 group ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="tilt-card flex flex-col gap-6 cursor-pointer">
                {/* Card image area */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-[#f3eae7]">
                  {/* Gradient placeholder with project icon */}
                  <div className="h-full w-full flex flex-col items-center justify-center gap-6 transition-transform duration-700 group-hover:scale-105 bg-gradient-to-br from-[#f3eae7] to-[#e8d8d1]">
                    <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
                      <span className="scale-[2]">{project.icon}</span>
                    </div>
                    <div className="text-center px-8">
                      <p className="text-[#97604e]/60 text-xs uppercase tracking-widest font-bold">{project.category}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>

                {/* Card meta */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold tracking-tight text-[#1B110E] leading-snug">{project.title}</h3>
                    <span className="text-xs font-bold border border-[#f3eae7] px-2 py-1 rounded text-[#1B110E]/60 ml-3 shrink-0">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-[#97604e] text-sm uppercase tracking-widest font-semibold">{project.category}</p>

                  {/* Animated underline */}
                  <div className="h-px w-0 group-hover:w-full bg-[#a13612] transition-all duration-500 mt-1" />

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-white/60 border border-[#a13612]/15 text-slate-700 hover:border-[#a13612]/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#a13612]/10 mt-2">
                    <Link href={project.github} className="flex items-center gap-2 text-sm transition-colors text-[#97604e] hover:text-[#a13612]">
                      <Github size={16} /> Code
                    </Link>
                    <Link href={project.demo} className="flex items-center gap-2 text-sm transition-colors ml-auto text-[#97604e] hover:text-[#a13612]">
                      <ExternalLink size={16} /> Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 bg-[#a13612]/5 rounded-2xl py-20 px-8 text-center flex flex-col items-center gap-8"
        >
          <h2 className="text-4xl md:text-5xl font-black max-w-2xl leading-tight text-[#1B110E]">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="text-lg text-[#97604e] max-w-xl">
            Open to new opportunities. Let&#39;s discuss how AI can solve your toughest challenges.
          </p>
          <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="bg-[#a13612] text-white font-bold py-4 px-10 rounded-full hover:shadow-xl hover:shadow-[#a13612]/20 transition-all hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}