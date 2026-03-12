"use client"

import { motion } from 'framer-motion'
import { Code2, BrainCircuit, Database, Laptop, Github, Mail } from 'lucide-react'
import { useTheme } from '@/lib/useTheme'

const skillCategories = [
    {
        title: "Programming",
        icon: <Code2 className="text-blue-400" />,
        skills: ["Python", "SQL", "C++", "JavaScript", "TypeScript"]
    },
    {
        title: "ML / AI",
        icon: <BrainCircuit className="text-purple-400" />,
        skills: ["TensorFlow", "Keras", "PyTorch", "LangChain", "LangGraph", "LangSmith", "FAISS", "Hugging Face", "Scikit-learn", "NLP", "CNN", "RNN"]
    },
    {
        title: "Data & Visualization",
        icon: <Database className="text-indigo-400" />,
        skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Excel"]
    },
    {
        title: "DevOps & Cloud",
        icon: <Laptop className="text-pink-400" />,
        skills: ["FastAPI", "Streamlit", "Docker", "Azure", "Git", "Jupyter", "Postman", "PostgreSQL", "MySQL"]
    }
]

// Flat skill list for light-mode pill tags
const allSkills = [
    "Python", "SQL", "C++", "JavaScript", "TypeScript",
    "TensorFlow", "Keras", "PyTorch", "LangChain", "LangGraph", "FAISS",
    "Hugging Face", "Scikit-learn", "FastAPI", "Streamlit", "Docker", "Azure",
    "NumPy", "Pandas", "Matplotlib", "Power BI",
]

export default function About() {
    const { theme, mounted } = useTheme()
    const isDark = theme === 'dark'

    // Prevent hydration mismatch by not rendering theme-dependent content until mounted
    if (!mounted) {
        return null
    }

    /* ─── DARK MODE (unchanged) ─────────────────────────────────── */
    if (isDark) {
        return (
            <section id="about" className="py-24 relative overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/40" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">About Me</h2>
                            <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
                                <p>
                                    I am a Data Scientist and AI Engineer currently pursuing my B.Tech in Engineering Physics from
                                    <strong> Delhi Technological University (DTU)</strong>. My expertise lies in building
                                    intelligent systems using LLMs, Vector Databases, and modern AI frameworks.
                                </p>
                                <p>
                                    With experience as an <strong>AI Engineering Intern at the Stabor India Private Limited</strong>,
                                    I specialize in creating robust ML models and deploying them via high-performance APIs.
                                    I am passionate about transforming complex data into actionable intelligence.
                                </p>
                                <p>
                                    I thrive at the intersection of AI research and software engineering, constantly
                                    exploring tools like LangChain, FAISS, and Hugging Face to push the boundaries of
                                    what&#39;s possible in the world of data.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {skillCategories.map((category, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="p-6 glass-morphism rounded-2xl transition-all duration-300 group hover:border-white/20 hover:bg-white/10"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        {category.icon}
                                        <h3 className="font-bold uppercase tracking-wider text-sm text-white">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 rounded-md text-xs transition-all bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        )
    }

    /* ─── LIGHT MODE — editorial design ─────────────────────────── */
    return (
        <section id="about" className="py-24 relative overflow-hidden transition-all duration-500">
            {/* Floating accent blobs */}
            <div className="fixed top-0 right-0 w-64 h-64 bg-[#a13612]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="fixed bottom-0 left-0 w-96 h-96 bg-[#a13612]/5 blur-[150px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Header row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7"
                    >
                        <span className="text-[#a13612] font-bold tracking-widest uppercase text-xs mb-4 block">
                            AI Engineer &amp; Data Scientist
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold text-[#1B110E] leading-[1.1] mb-8">
                            Building intelligent<br /> systems with{' '}
                            <span className="italic text-[#a13612]">purpose</span> &amp; data.
                        </h2>
                        {/* Editorial rule */}
                        <div className="editorial-rule w-full mb-2" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 pb-2"
                    >
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light italic">
                            "I believe in transforming raw data into intelligent systems that solve real problems. My approach blends rigorous ML engineering with a passion for clean, production-ready code."
                        </p>
                    </motion.div>
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left: profile card + metadata */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-4 flex flex-col gap-10"
                    >
                        {/* Profile image placeholder */}
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-[#a13612]/5 rounded-xl -rotate-2" />
                            <div className="aspect-[4/5] rounded-xl bg-[#f0e8e4] overflow-hidden relative z-10 border border-[#a13612]/10 shadow-2xl flex items-center justify-center">
                                <div className="text-center space-y-3 px-6">
                                    <div className="w-20 h-20 rounded-full bg-[#a13612]/10 flex items-center justify-center mx-auto">
                                        <span className="text-[#a13612] text-3xl font-bold">TK</span>
                                    </div>
                                    <p className="text-[#1B110E]/50 text-sm">Tapash Kumar</p>
                                </div>
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="space-y-6 px-2">
                            <div>
                                <h4 className="text-[#a13612] text-xs font-bold uppercase tracking-[0.2em] mb-2">Location</h4>
                                <p className="text-[#1B110E] font-medium">New Delhi, India</p>
                            </div>
                            <div>
                                <h4 className="text-[#a13612] text-xs font-bold uppercase tracking-[0.2em] mb-2">Education</h4>
                                <p className="text-[#1B110E] font-medium">B.Tech Engineering Physics</p>
                                <p className="text-[#1B110E]/60 text-sm">Delhi Technological University</p>
                            </div>
                            <div>
                                <h4 className="text-[#a13612] text-xs font-bold uppercase tracking-[0.2em] mb-2">Experience</h4>
                                <p className="text-[#1B110E] font-medium">AI Engineering Intern</p>
                                <p className="text-[#1B110E]/60 text-sm">Stabor India Private Limited</p>
                            </div>
                            <div className="editorial-rule opacity-50" />
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/Tapash565"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#a13612]/10 text-[#a13612] hover:bg-[#a13612] hover:text-white transition-all"
                                >
                                    <Github size={18} />
                                </a>
                                <a
                                    href="mailto:kumar.tapash565@gmail.com"
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#a13612]/10 text-[#a13612] hover:bg-[#a13612] hover:text-white transition-all"
                                >
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: narrative + skills + quote */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-8 flex flex-col"
                    >
                        {/* Narrative */}
                        <div className="max-w-none">
                            <h3 className="text-3xl font-bold text-[#1B110E] mb-6">The Philosophy</h3>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                I am a Data Scientist and AI Engineer with a passion for building end-to-end intelligent systems.
                                My journey began with a curiosity about how machines learn — from fitting a regression line
                                to crafting multi-step LLM agents that reason over complex documents.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed mb-10">
                                I thrive at the intersection of AI research and practical software engineering. Using tools
                                like LangChain, FAISS, and PyTorch, I turn research-grade ideas into production-ready systems
                                that make data work harder for the people who rely on it.
                            </p>
                        </div>

                        {/* Skill tags */}
                        <div className="mt-4">
                            <h4 className="text-[#a13612] text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#a13612]/30" />
                                Expertise &amp; Toolkit
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {allSkills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                        className="cursor-default px-5 py-2 rounded-full border border-[#a13612]/20 bg-white/50 text-slate-800 text-sm font-medium hover:bg-[#a13612]/10 hover:border-[#a13612] transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Pull quote */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-16 p-8 rounded-xl bg-[#a13612]/5 border-l-4 border-[#a13612] italic"
                        >
                            <p className="text-xl text-slate-800 mb-4">
                                "An engineer who understands that the most intelligent system is one that makes complex things feel simple for the people using it."
                            </p>
                            <cite className="text-sm font-bold text-[#a13612] uppercase tracking-widest not-italic">
                                — My Engineering Principle
                            </cite>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
