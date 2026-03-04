"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
    const [isDark, setIsDark] = useState(true)

    // Theme detection
    useEffect(() => {
        const checkTheme = () => {
            const isDarkMode = document.documentElement.classList.contains('dark')
            setIsDark(isDarkMode)
        }

        checkTheme()

        const observer = new MutationObserver(checkTheme)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="px-4 py-2 rounded-full glass-morphism text-blue-400 text-sm font-medium tracking-wider uppercase mb-6 inline-block">
                            Available for new opportunities
                        </span>
                        <h1 className={`text-5xl md:text-8xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Tapash Kumar
                        </h1>
                        <h2 className={`text-2xl md:text-4xl font-semibold mb-6 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                            Data Scientist | ML Engineer | AI Engineer
                        </h2>
                        <p className={`text-lg md:text-xl max-w-2xl mx-auto italic ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                            "Transforming Data into Intelligent Solutions"
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href="#projects"
                            className="group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Tapash_Kumar_Resume.pdf"
                            className={`px-8 py-4 glass-morphism rounded-full font-bold flex items-center gap-2 transition-all duration-300 ${
                                isDark
                                    ? 'hover:bg-white/15 hover:border-white/25'
                                    : 'hover:bg-black/5 hover:border-black/15 text-zinc-800'
                            }`}
                        >
                            Download Resume
                            <Download size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute bottom-10 left-1/2 -translate-x-1/2 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}
            >
                <div className={`w-6 h-10 border-2 rounded-full flex justify-center p-1 ${isDark ? 'border-zinc-400' : 'border-zinc-500'}`}>
                    <div className={`w-1 h-2 rounded-full ${isDark ? 'bg-zinc-400' : 'bg-zinc-500'}`} />
                </div>
            </motion.div>
        </section>
    )
}
