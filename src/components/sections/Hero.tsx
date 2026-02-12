"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
            </div>

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
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4">
                            Tapash Kumar
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-semibold text-zinc-400 mb-6">
                            Data Scientist | ML Engineer | AI Engineer
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto italic">
                            “Transforming Data into Intelligent Solutions”
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
                            className="px-8 py-4 glass-morphism rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
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
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
            >
                <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-zinc-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    )
}
