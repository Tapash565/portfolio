"use client"

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { useTheme } from '@/lib/useTheme'

export default function Contact() {
    const { theme, mounted } = useTheme()

    if (!mounted) {
        return (
            <section id="contact" className="py-32 relative overflow-hidden" />
        )
    }

    const isDark = theme === 'dark'

    /* ─── DARK MODE (preserved) ───────────────────────────────────────── */
    if (isDark) {
        return (
            <section id="contact" className="py-32 relative overflow-hidden transition-colors duration-700 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-7xl mb-8 text-balance leading-tight font-bold text-white">
                                Let&#39;s create something together.<span className="gradient-text">remarkable</span>
                            </h2>
                            <p className="text-xl mb-12 max-w-lg leading-relaxed text-zinc-500">
                                Have a vision you want to bring to life? I&apos;m always open to discussing technical leadership, AI architecture, or full-stack innovations.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: <Mail size={20} />, label: "Direct Email", value: "kumar.tapash565@gmail.com", href: "mailto:kumar.tapash565@gmail.com" },
                                    { icon: <Linkedin size={20} />, label: "LinkedIn Professional", value: "tapashk", href: "https://www.linkedin.com/in/tapashk/" },
                                    { icon: <Github size={20} />, label: "GitHub Repository", value: "Tapash565", href: "https://github.com/Tapash565" },
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className="flex items-center gap-6 group transition-all duration-300"
                                    >
                                        <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 bg-white/5 group-hover:bg-blue-500/20 group-hover:text-blue-400">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 text-zinc-500">{item.label}</p>
                                            <p className="text-lg transition-colors text-zinc-300 group-hover:text-white">{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="p-8 md:p-16 rounded-[40px] relative transition-all duration-500 glass-morphism border-white/10"
                        >
                            <div className="mb-10 p-5 rounded-2xl border bg-amber-500/10 border-amber-500/20 text-amber-400">
                                <p className="text-sm leading-relaxed">
                                    <strong className="uppercase tracking-wider mr-2">Status:</strong>
                                    This form is currently being integrated. For the fastest response, reach out via the direct links provided.
                                </p>
                            </div>

                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 gap-8">
                                    <div className="space-y-3">
                                        <label htmlFor="fullNameInput" className="text-[10px] font-bold uppercase tracking-widest ml-1 text-zinc-500">Full Name</label>
                                        <input
                                            id="fullNameInput"
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full border-b transition-all px-1 py-4 focus:outline-none bg-transparent border-white/10 focus:border-blue-500 text-white placeholder:text-zinc-700"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor='emailInput' className="text-[10px] font-bold uppercase tracking-widest ml-1 text-zinc-500">Email Address</label>
                                        <input
                                            id='emailInput'
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full border-b transition-all px-1 py-4 focus:outline-none bg-transparent border-white/10 focus:border-blue-500 text-white placeholder:text-zinc-700"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor='messageTextarea' className="text-[10px] font-bold uppercase tracking-widest ml-1 text-zinc-500">Your Message</label>
                                    <textarea
                                        id='messageTextarea'
                                        rows={4}
                                        placeholder="Briefly describe your project or inquiry"
                                        className="w-full border-b transition-all px-1 py-4 focus:outline-none resize-none bg-transparent border-white/10 focus:border-blue-500 text-white placeholder:text-zinc-700"
                                    />
                                </div>
                                <button
                                    disabled
                                    aria-disabled="true"
                                    title="Submission disabled — use direct links above"
                                    className="w-full py-5 rounded-full font-bold flex items-center justify-center gap-3 bg-white text-zinc-900 opacity-50 cursor-not-allowed"
                                >
                                    <span className="tracking-widest uppercase text-xs">Send Message</span>
                                    <Send size={16} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        )
    }

    /* ─── LIGHT MODE — refined_contact_page design ─────────────── */
    return (
        <section id="contact" className="py-32 relative overflow-hidden transition-colors duration-700 bg-[#F5F0E8]">
            {/* subtle split background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fcf9f8] z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left column: copy + contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Available pill badge with pulsing dot */}
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#e8dfd2] text-[#4A453E] text-xs font-bold uppercase tracking-[0.2em] mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a13612] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a13612]" />
                            </span>
                            Available for projects
                        </div>

                        <h2 className="text-5xl md:text-7xl mb-8 text-balance leading-tight font-playfair text-[#1B110E]">
                            Let&apos;s create something{' '}
                            <span className="italic text-[#a13612]">remarkable</span>{' '}
                            together.
                        </h2>

                        <p className="text-xl mb-12 max-w-lg leading-relaxed font-light text-[#4A453E]/85">
                            Have a vision you want to bring to life? I&apos;m always open to discussing AI engineering,
                            data platforms, or full-stack ML products.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <Mail size={20} />, label: "Email", value: "kumar.tapash565@gmail.com", href: "mailto:kumar.tapash565@gmail.com" },
                                { icon: <Linkedin size={20} />, label: "LinkedIn", value: "tapashk", href: "https://www.linkedin.com/in/tapashk/" },
                                { icon: <Github size={20} />, label: "GitHub", value: "Tapash565", href: "https://github.com/Tapash565" },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="flex items-center gap-6 group transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 bg-[#E8E4D8]/70 group-hover:bg-[#1B110E] group-hover:text-white shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 text-[#8C7A5B]">
                                            {item.label}
                                        </p>
                                        <p className="text-lg text-[#1A1A1A] group-hover:text-[#8C7A5B] font-medium transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right column: refined form card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-14 rounded-[32px] relative transition-all duration-500 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-[#E8E4D8]"
                    >
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#a13612]/10 rounded-full blur-3xl" />

                        <div className="mb-10 p-5 rounded-2xl border bg-[#FEF9EC] border-[#F3E6C8] text-[#856404]">
                            <p className="text-sm leading-relaxed">
                                <strong className="uppercase tracking-wider mr-2">Note:</strong>
                                This form is being wired up. For urgent work, use the direct links on the left.
                            </p>
                        </div>

                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="space-y-3">
                                    <label htmlFor='fullNameInputLight' className="text-[10px] font-bold uppercase tracking-widest ml-1 text-[#4A453E]/70">
                                        Full Name
                                    </label>
                                    <input
                                        id='fullNameInputLight'
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#C8C0B0] focus-glow"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor='emailInputLight' className="text-[10px] font-bold uppercase tracking-widest ml-1 text-[#4A453E]/70">
                                        Email Address
                                    </label>
                                    <input
                                        id='emailInputLight'
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#C8C0B0] focus-glow"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor='messageTextareaLight' className="text-[10px] font-bold uppercase tracking-widest ml-1 text-[#4A453E]/70">
                                    Your Message
                                </label>
                                <textarea
                                    id='messageTextareaLight'
                                    rows={4}
                                    placeholder="Briefly describe your project or inquiry"
                                    className="w-full rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#C8C0B0] focus-glow resize-none"
                                />
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-6 pt-2">
                                <button
                                    disabled
                                    aria-disabled="true"
                                    title="Submission disabled — use direct links on the left"
                                    className="liquid-button inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-4 rounded-full border border-[#a13612]/40 text-[#a13612]/40 font-bold tracking-[0.2em] uppercase text-xs bg-transparent opacity-50 cursor-not-allowed"
                                >
                                    <span>Send Message</span>
                                    <Send size={16} />
                                </button>

                                {/* Social icons inline with submit */}
                                <div className="flex items-center gap-4 text-xs text-[#8C7A5B]">
                                    <span className="uppercase tracking-[0.2em] font-semibold">Or reach via</span>
                                    <div className="flex items-center gap-3">
                                        <a href="mailto:kumar.tapash565@gmail.com" aria-label="Email">
                                            <Mail size={18} className="text-[#8C7A5B] hover:text-[#a13612] transition-colors" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/tapashk/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                            <Linkedin size={18} className="text-[#8C7A5B] hover:text-[#a13612] transition-colors" />
                                        </a>
                                        <a href="https://github.com/Tapash565" target="_blank" rel="noreferrer" aria-label="GitHub">
                                            <Github size={18} className="text-[#8C7A5B] hover:text-[#a13612] transition-colors" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
