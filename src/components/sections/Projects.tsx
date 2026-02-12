"use client"

import { motion } from 'framer-motion'
import { Github, ExternalLink, Database, Cpu, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const FloatingShapes = dynamic(
    () => import('@/components/three/FloatingShapes'),
    { ssr: false }
)

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
        tech: ["LangGraph", "Vector DBs", "RAG"],
        icon: <MessageSquare className="text-purple-400" />,
        github: "https://github.com/Tapash565/chatbot-langgraph",
        demo: "#"
    },
    {
        title: "Geodata Analysis System",
        description: "Implementing AI/ML techniques for satellite data interpretation and geodata analysis. Developing tools for automated spatial pattern recognition and mapping.",
        tech: ["Python", "AI/ML", "Geospatial Data", "Scikit-learn"],
        icon: <Cpu className="text-pink-400" />,
        github: "https://github.com/Tapash565",
        demo: "#"
    }
]

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 overflow-hidden">
            {/* 3D Floating Shapes Background */}
            <FloatingShapes className="opacity-60" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
                        <p className="text-zinc-500 text-lg max-w-xl">
                            A selection of projects where I&#39;ve applied machine learning and data science to solve real-world problems.
                        </p>
                    </motion.div>
                    <Link href="/projects" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                        View all projects →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group glass-morphism rounded-3xl p-8 hover:translate-y-[-8px] transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {project.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-zinc-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded-md">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                <Link href={project.github} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                                    <Github size={16} />
                                    Code
                                </Link>
                                <Link href={project.demo} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors ml-auto">
                                    <ExternalLink size={16} />
                                    Live Demo
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        </section>
    )
}
