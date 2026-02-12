"use client"

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
    {
        role: "AI Engineering Intern",
        company: "Stabor India Private Limited",
        period: "Dec 2025 - Present",
        description: "Focusing on AI-driven solutions and informatics research. Implementing advanced algorithms for data analysis and experimental modeling.",
        icon: <Briefcase size={20} />
    },
    {
        role: "Intern",
        company: "CSIR-National Physical Laboratory (NPL)",
        period: "Jun 2025 - Jul 2025",
        description: "Specializing in Informatics with a strong focus on Data Science, Machine Learning, and Intelligent Systems. Maintaining a strong academic record while building practical AI solutions.",
        icon: <GraduationCap size={20} />
    },
    {
        role: "Intern",
        company: "ISRO Telemetry Tracking and Command Network (ISTRAC)",
        period: "Jun 2024 - Jul 2024",
        description: "Specializing in Informatics with a strong focus on Data Science, Machine Learning, and Intelligent Systems. Maintaining a strong academic record while building practical AI solutions.",
        icon: <GraduationCap size={20} />
    }
]

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
                    <p className="text-zinc-500 text-lg">My career path in the world of data and intelligence.</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-zinc-800" />
                    
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`mb-12 relative flex items-center justify-between w-full ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                        >
                            <div className="hidden md:block w-[45%]" />

                            {/* Dot */}
                            <div className="absolute left-[2px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-black z-10" />

                            <div className="w-full pl-12 md:pl-0 md:w-[45%]">
                                <div className="glass-morphism p-6 md:p-8 rounded-3xl hover:border-blue-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2 text-blue-400">
                                        {exp.icon}
                                        <span className="text-sm font-bold tracking-widest uppercase">{exp.period}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                                    <p className="text-zinc-300 font-medium mb-4">{exp.company}</p>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
