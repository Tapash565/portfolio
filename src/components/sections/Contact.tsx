"use client"

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Contact() {
    const [isDark, setIsDark] = useState(true)

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
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-balance ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Let&#39;s build something <span className="gradient-text">intelligent</span> together.
                        </h2>
                        <p className={`text-lg mb-12 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
                            Interested in collaborating or have a question? Feel free to reach out through the form or my social channels.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <Mail />, label: "Email", value: "kumar.tapash565@gmail.com", href: "mailto:kumar.tapash565@gmail.com" },
                                { icon: <Linkedin />, label: "LinkedIn", value: "linkedin.com/in/tapashk", href: "https://www.linkedin.com/in/tapashk/" },
                                { icon: <Github />, label: "GitHub", value: "github.com/Tapash565", href: "https://github.com/Tapash565" },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className={`flex items-center gap-4 group p-4 rounded-2xl glass-morphism hover:transition-all w-fit ${
                                        isDark
                                            ? 'hover:bg-white/5'
                                            : 'hover:bg-black/5'
                                    }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:text-blue-400 transition-colors ${
                                        isDark ? 'bg-white/5' : 'bg-black/5'
                                    }`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{item.label}</p>
                                        <p className={isDark ? 'text-zinc-300 font-medium' : 'text-zinc-700 font-medium'}>{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-morphism p-8 md:p-12 rounded-[2rem]"
                    >
                        <div className={`mb-6 p-4 border rounded-xl ${isDark ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-200'}`}>
                            <p className={`text-sm ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
                                <strong>Note:</strong> The contact form is currently not functional as it requires backend integration. Please use the email or social links on the left to reach out directly.
                            </p>
                        </div>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className={`text-xs font-bold uppercase ml-1 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className={`w-full border rounded-xl px-4 py-3 focus:border-blue-500/50 focus:outline-none transition-colors ${
                                            isDark
                                                ? 'bg-white/5 border-white/10 text-white placeholder:text-zinc-600'
                                                : 'bg-black/5 border-black/10 text-zinc-900 placeholder:text-zinc-400'
                                        }`}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={`text-xs font-bold uppercase ml-1 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className={`w-full border rounded-xl px-4 py-3 focus:border-blue-500/50 focus:outline-none transition-colors ${
                                            isDark
                                                ? 'bg-white/5 border-white/10 text-white placeholder:text-zinc-600'
                                                : 'bg-black/5 border-black/10 text-zinc-900 placeholder:text-zinc-400'
                                        }`}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className={`text-xs font-bold uppercase ml-1 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can I help you?"
                                    className={`w-full border rounded-xl px-4 py-3 focus:border-blue-500/50 focus:outline-none transition-colors resize-none ${
                                        isDark
                                            ? 'bg-white/5 border-white/10 text-white placeholder:text-zinc-600'
                                            : 'bg-black/5 border-black/10 text-zinc-900 placeholder:text-zinc-400'
                                    }`}
                                />
                            </div>
                            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
