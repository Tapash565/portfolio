"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Link as LinkIcon, ExternalLink, ChevronDown, FileText, Quote } from 'lucide-react'
import { useTheme } from '@/lib/useTheme'

const publications = [
    {
        type: "JOURNAL",
        doi: "10.55041/ISJEM05556",
        title: "Innovative Cavity Design For Hydrogen Masers Using Simulation Methods",
        author: "Tapash Kumar",
        institution: "Delhi Technological University",
        journal: "International Scientific Journal of Engineering and Management (ISJEM)",
        details: "Vol. 05 • Issue 03 • March 2026",
        tags: ["Active Hydrogen Maser", "ANSYS", "HFSS", "Microwave Cavity", "ANSYS HFSS", "ANSYS Maxwell"],
        abstract: "This research focuses on the optimization of microwave cavity designs for Hydrogen Masers. Using advanced simulation methods in ANSYS HFSS and Maxwell, we achieved precise frequency alignment with minimal deviation. The study explores the relationship between cavity geometry and the Q-factor, providing a roadmap for enhanced timing stability in atomic clocks.",
        citations: {
            apa: "Kumar, T. (2026). Innovative cavity design for hydrogen masers using simulation methods. International Scientific Journal of Engineering and Management (ISJEM), 5(3). https://doi.org/10.55041/ISJEM05556",
            ieee: 'T. Kumar, "Innovative Cavity Design For Hydrogen Masers Using Simulation Methods," International Scientific Journal of Engineering and Management (ISJEM), vol. 5, no. 3, Mar. 2026, doi: 10.55041/ISJEM05556.'
        },
        links: {
            doi: "https://doi.org/10.55041/ISJEM05556",
            issue: "#"
        }
    }
]

export default function Research() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    const [isAbstractOpen, setIsAbstractOpen] = useState(false)

    return (
        <section id="research" className="py-24 relative overflow-hidden transition-all duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Publications</h2>
                    <p className={`text-lg ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>Research papers and scientific contributions.</p>
                </motion.div>

                <div className="space-y-12">
                    {publications.map((pub, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`relative p-8 md:p-12 rounded-[2.5rem] overflow-hidden border transition-all duration-500 ${isDark
                                    ? 'bg-zinc-900/40 border-white/10 hover:border-blue-500/30 shadow-2xl'
                                    : 'bg-white/80 border-black/5 hover:border-blue-400/30 shadow-xl'
                                } glass-morphism`}
                        >
                            {/* Header Info */}
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold tracking-widest border border-blue-500/20">
                                    {pub.type}
                                </span>
                                <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium">
                                    <span>DOI: {pub.doi}</span>
                                </div>
                                <div className="ml-auto flex gap-4">
                                    <a href={pub.links.doi} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-blue-500 transition-colors">
                                        <LinkIcon size={14} /> DOI
                                    </a>
                                    <a href={pub.links.issue} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-blue-500 transition-colors">
                                        <FileText size={14} /> Issue Page
                                    </a>
                                </div>
                            </div>

                            {/* Title & Author */}
                            <div className="mb-8">
                                <h3 className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                    {pub.title}
                                </h3>
                                <div className="flex flex-wrap items-baseline gap-2">
                                    <span className={`text-lg font-bold border-b-2 ${isDark ? 'border-blue-500/50 text-white' : 'border-blue-400/50 text-zinc-900'}`}>
                                        {pub.author}
                                    </span>
                                    <span className="text-zinc-500 text-sm">({pub.institution})</span>
                                </div>
                            </div>

                            {/* Journal Info */}
                            <div className="flex items-center gap-3 mb-8 text-zinc-500">
                                <BookOpen size={18} className="text-blue-400" />
                                <span className="font-medium">{pub.journal}</span>
                                <span className="hidden md:inline text-zinc-700">•</span>
                                <span className="text-sm italic">{pub.details}</span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-10">
                                {pub.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all ${isDark
                                            ? 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                                            : 'bg-blue-50/50 text-blue-600 border border-blue-100/50 hover:bg-blue-100/50'
                                        }`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Abstract Accordion */}
                            <div className="mb-12 border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-8">
                                <button
                                    onClick={() => setIsAbstractOpen(!isAbstractOpen)}
                                    className="flex items-center gap-2 group text-sm font-bold tracking-widest uppercase text-zinc-500 hover:text-blue-500 transition-colors"
                                >
                                    <ChevronDown size={18} className={`transition-transform duration-300 ${isAbstractOpen ? 'rotate-180' : ''}`} />
                                    Show Abstract
                                </button>
                                <AnimatePresence>
                                    {isAbstractOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className={`mt-6 text-lg leading-relaxed italic ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                                {pub.abstract}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Citations Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Quote size={14} className="text-blue-400" />
                                        <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400">APA Citation</h4>
                                    </div>
                                    <p className={`text-xs leading-relaxed font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                        {pub.citations.apa}
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Quote size={14} className="text-blue-400" />
                                        <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400">IEEE Citation</h4>
                                    </div>
                                    <p className={`text-xs leading-relaxed font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                        {pub.citations.ieee}
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
