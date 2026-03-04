"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export default function LightHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-linear-to-br from-orange-50 via-blue-50 to-indigo-50">
            {/* Subtle animated blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium tracking-wider uppercase mb-6 inline-block">
                            Available for new opportunities
                        </span>

                        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4 text-slate-900">
                            Tapash Kumar
                        </h1>

                        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-slate-700">
                            Data Scientist | ML Engineer | AI Engineer
                        </h2>

                        <p className="text-lg md:text-xl max-w-2xl mx-auto italic text-slate-500">
                            &quot;Transforming Data into Intelligent Solutions&quot;
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
                            className="group px-8 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
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
                            className="group px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                        >
                            Download Resume
                            <Download size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Clean Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <div className="w-6 h-10 border-2 rounded-full flex justify-center p-1 border-slate-500">
                    <div className="w-1 h-2 rounded-full bg-slate-500" />
                </div>
            </motion.div>
        </section>
    )
}
