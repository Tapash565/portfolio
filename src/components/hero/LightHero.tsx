"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LightHero() {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Ambient blur blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#a13612]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-120 h-120 bg-[#a13612]/3 rounded-full blur-[120px]" />
            </div>

            {/* Main hero content */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 text-center relative z-10 pt-24 pb-16">
                <div className="max-w-4xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-3"
                    >
                        {/* Eyebrow */}
                        <span className="text-[#a13612] font-medium tracking-[0.2em] uppercase text-xs">
                            AI Engineer &amp; Data Scientist
                        </span>

                        {/* Big serif heading */}
                        <h1 className="font-playfair text-[clamp(3rem,10vw,7rem)] text-[#1B110E] leading-[1.1] tracking-tight">
                            Transforming Data into{' '}
                            <br />
                            <span className="italic text-[#a13612]/90">Intelligent</span> Solutions
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-xl mx-auto text-[#1B110E]/60 text-lg md:text-xl font-light leading-relaxed"
                    >
                        Specializing in Large Language Models, Vector Databases, and ML Engineering.
                        Bridging the gap between raw compute and real-world impact.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="bg-[#a13612] text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#8a2d0f] transition-all shadow-lg shadow-[#a13612]/20 hover:-translate-y-0.5"
                        >
                            View Projects
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Tapash_Kumar_Resume.pdf"
                            className="group flex items-center gap-2 text-[#1B110E] font-medium text-sm tracking-widest uppercase py-4 px-8 hover:opacity-70 transition-all"
                        >
                            Download Resume
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </motion.div>
                </div>
            </main>

            {/* Bottom strip */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full px-8 md:px-16 py-8 flex flex-col md:flex-row items-end justify-between relative z-10 border-t border-[#a13612]/5"
            >
                {/* Status */}
                <div className="flex flex-col gap-1.5">
                    <p className="text-[#1B110E]/40 text-[10px] uppercase tracking-[0.3em]">Current Status</p>
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a13612] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a13612]" />
                        </span>
                        <span className="text-[#1B110E]/80 text-xs font-medium uppercase tracking-widest">
                            Available for new opportunities
                        </span>
                    </div>
                </div>

                {/* Social + scroll */}
                <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-8">
                        {[
                            { label: 'GitHub', href: 'https://github.com/Tapash565' },
                            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tapashk/' },
                            { label: 'Email', href: 'mailto:kumar.tapash565@gmail.com' },
                        ].map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noreferrer"
                                className="text-[#1B110E]/40 hover:text-[#a13612] transition-colors uppercase text-[10px] tracking-widest font-bold"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="text-[#1B110E]/30 text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to explore</span>
                        <svg className="text-[#1B110E]/30 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </div>
            </motion.footer>
        </section>
    )
}
