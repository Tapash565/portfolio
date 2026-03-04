"use client"

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { useTheme } from '@/lib/useTheme'

const experiences = [
    {
        role: "AI Engineering Intern",
        company: "Stabor India Private Limited",
        period: "Dec 2025 - Present",
        description: "Developed and optimized an XGBoost demand forecasting model, improving prediction accuracy by 15–20% on real-time time-series data. Built high-throughput data pipelines for continuous streaming inputs and performed hyperparameter tuning (including L1/L2 regularization) to reduce overfitting and improve model generalization.",
        icon: <Briefcase size={20} />
    },
    {
        role: "Intern",
        company: "CSIR-National Physical Laboratory (NPL)",
        period: "Jun 2025 - Jul 2025",
        description: "Implemented a custom Allan Deviation algorithm to analyze short-term and long-term noise characteristics in atomic clocks. Estimated frequency drift and benchmarked results against BIPM global standards, achieving a 20% improvement in alignment for enhanced long-term stability assessment.",
        icon: <GraduationCap size={20} />
    },
    {
        role: "Intern",
        company: "ISRO Telemetry Tracking and Command Network (ISTRAC)",
        period: "Jun 2024 - Jul 2024",
        description: "Optimized a microwave cavity design in Ansys targeting the TE011 mode at 1.42040575177 GHz. Achieved precise frequency alignment with only 43.99 Hz deviation and improved cavity Q-factor through material optimization to enhance Hydrogen Maser timing stability.",
        icon: <GraduationCap size={20} />
    }
]

export default function Experience() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <section id="experience" className="py-24 relative overflow-hidden transition-all duration-500">
            {/* Subtle background overlay for readability */}
            <div className={`absolute inset-0 transition-colors duration-500 ${isDark
                ? 'bg-linear-to-b from-black/40 via-black/30 to-black/40'
                : 'bg-linear-to-b from-white/20 via-transparent to-white/20'
                }`} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Professional Journey</h2>
                    <p className={`text-lg ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>My career path in the world of data and intelligence.</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className={`absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'
                        }`} />

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`mb-12 relative flex items-center justify-between w-full ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                        >
                            <div className="hidden md:block w-[45%]" />

                            {/* Dot */}
                            <div className={`absolute left-[2px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 z-10 ${isDark ? 'border-black' : 'border-white'
                                }`} />

                            <div className="w-full pl-12 md:pl-0 md:w-[45%]">
                                <div className={`glass-morphism p-6 md:p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-300 ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
                                    }`}>
                                    <div className="flex items-center gap-3 mb-2 text-blue-400">
                                        {exp.icon}
                                        <span className="text-sm font-bold tracking-widest uppercase">{exp.period}</span>
                                    </div>
                                    <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{exp.role}</h3>
                                    <p className={`font-medium mb-4 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{exp.company}</p>
                                    <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
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
