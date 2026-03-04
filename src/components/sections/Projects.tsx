"use client"

import { motion } from 'framer-motion'
import { Github, ExternalLink, Database, Cpu, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/lib/useTheme'

const projects = [
    {
        title: "NLP-Based Movie Recommendation System",
        description: "A sophisticated recommendation engine leveraging LangChain, FAISS, and Hugging Face for semantic search and personalized suggestions. Features integrated LLMs for contextual movie discovery.",
        tech: ["LangChain", "FAISS", "Hugging Face", "FastAPI", "Next.js"],
        icon: <Database className="text-blue-400" />,
        github: "https://github.com/Tapash565/movie-recommendation-system",
        demo: "https://movie-recommendation-system-phi-lac.vercel.app/"
    },
    {
        title: "AI Intelligent Chatbot",
        description: "An advanced NLP-driven chatbot capable of context-aware conversations and intent recognition using LangGraph and Vector Databases for RAG-based responses.",
        tech: ["LangChain", "LangGraph", "Vector Database", "RAG", "Streamlit"],
        icon: <MessageSquare className="text-purple-400" />,
        github: "https://github.com/Tapash565/chatbot-langgraph",
        demo: "#"
    },
    {
        title: "Brain MRI Prediction Using CNN",
        description: "Engineered a custom TensorFlow/Keras CNN for brain tumor detection using data augmentation and hyperparameter tuning. Achieved 94% F1-score with 12% accuracy improvement over baseline.",
        tech: ["Python", "TensorFlow", "Keras", "Scikit-learn", "CNN", "Data Augmentation", "FastAPI"],
        icon: <Cpu className="text-pink-400" />,
        github: "#",
        demo: "#"
    }
]

export default function Projects() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <section id="projects" className="relative py-24 overflow-hidden transition-all duration-500">
            {/* Subtle background overlay for readability */}
            <div className={`absolute inset-0 transition-colors duration-500 ${isDark
                    ? 'bg-linear-to-b from-black/40 via-black/30 to-black/40'
                    : 'bg-linear-to-b from-white/30 via-transparent to-white/30'
                }`} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Featured Work</h2>
                        <p className={`text-lg max-w-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                            A selection of projects where I&#39;ve applied machine learning and data science to solve real-world problems.
                        </p>
                    </motion.div>
                    <Link href="/projects" className={`font-medium transition-colors ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                        View all projects →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            className={`group glass-morphism rounded-3xl p-8 hover:translate-y-[-8px] transition-all duration-300 ${isDark
                                    ? 'hover:bg-white/10'
                                    : 'hover:bg-black/5'
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isDark ? 'bg-white/5' : 'bg-black/5'
                                }`}>
                                {project.icon}
                            </div>
                            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{project.title}</h3>
                            <p className={`mb-6 line-clamp-3 text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className={`text-[10px] font-bold uppercase tracking-wider border px-2 py-1 rounded-md ${isDark
                                            ? 'text-zinc-500 border-zinc-800'
                                            : 'text-zinc-500 border-zinc-200'
                                        }`}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className={`flex items-center gap-4 pt-4 border-t ${isDark ? 'border-white/5' : 'border-black/5'
                                }`}>
                                <Link href={project.github} className={`flex items-center gap-2 text-sm transition-colors ${isDark
                                        ? 'text-zinc-400 hover:text-white'
                                        : 'text-zinc-600 hover:text-zinc-900'
                                    }`}>
                                    <Github size={16} />
                                    Code
                                </Link>
                                <Link href={project.demo} className={`flex items-center gap-2 text-sm transition-colors ml-auto ${isDark
                                        ? 'text-zinc-400 hover:text-white'
                                        : 'text-zinc-600 hover:text-zinc-900'
                                    }`}>
                                    <ExternalLink size={16} />
                                    Live Demo
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
