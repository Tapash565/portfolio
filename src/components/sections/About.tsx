"use client"

import { motion } from 'framer-motion'
import { Code2, BrainCircuit, Database, Laptop } from 'lucide-react'

const skillCategories = [
    {
        title: "Programming",
        icon: <Code2 className="text-blue-400" />,
        skills: ["Python", "SQL", "C++", "JavaScript", "TypeScript"]
    },
    {
        title: "ML / AI",
        icon: <BrainCircuit className="text-purple-400" />,
        skills: ["LangChain", "FAISS", "Hugging Face", "Scikit-learn", "NLP", "CNN"]
    },
    {
        title: "Tools & Frameworks",
        icon: <Database className="text-indigo-400" />,
        skills: ["Streamlit", "Next.js", "Tailwind CSS", "Git", "Docker"]
    },
    {
        title: "Backend & Databases",
        icon: <Laptop className="text-pink-400" />,
        skills: ["FastAPI", "Node.js", "MySQL", "PostgreSQL"]
    }
]

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">About Me</h2>
                        <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
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
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {skillCategories.map((category, idx) => (
                            <div
                                key={idx}
                                className="p-6 glass-morphism rounded-2xl hover:border-white/20 transition-colors group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {category.icon}
                                    <h3 className="font-bold text-white uppercase tracking-wider text-sm">
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-white/5 rounded-md text-zinc-400 text-xs hover:bg-white/10 hover:text-white transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
