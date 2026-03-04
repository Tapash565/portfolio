"use client"

import { motion } from 'framer-motion'
import { Code2, BrainCircuit, Database, Laptop } from 'lucide-react'
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

export default function About() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <section id="about" className="py-24 relative overflow-hidden transition-all duration-500">
            {/* Subtle background overlay for readability */}
            <div className={`absolute inset-0 transition-colors duration-500 ${isDark
                    ? 'bg-gradient-to-b from-black/40 via-black/30 to-black/40'
                    : 'bg-gradient-to-b from-white/60 via-white/40 to-white/60'
                }`} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>About Me</h2>
                        <div className={`space-y-6 text-lg leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
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
                                className={`p-6 glass-morphism rounded-2xl transition-all duration-300 group ${isDark
                                        ? 'hover:border-white/20 hover:bg-white/10'
                                        : 'hover:border-black/20 hover:bg-black/5'
                                    }`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {category.icon}
                                    <h3 className={`font-bold uppercase tracking-wider text-sm ${isDark ? 'text-white' : 'text-zinc-900'
                                        }`}>
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className={`px-3 py-1 rounded-md text-xs transition-all ${isDark
                                                    ? 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                                                    : 'bg-black/5 text-zinc-600 hover:bg-black/10 hover:text-zinc-900'
                                                }`}
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
