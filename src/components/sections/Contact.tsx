"use client"

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
                            Let&#39;s build something <span className="gradient-text">intelligent</span> together.
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-500 text-lg mb-12">
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
                                    className="flex items-center gap-4 group p-4 rounded-2xl glass-morphism hover:bg-zinc-100 dark:hover:bg-white/5 transition-all w-fit"
                                >
                                    <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-xl flex items-center justify-center group-hover:text-blue-400 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-wider">{item.label}</p>
                                        <p className="text-zinc-700 dark:text-zinc-300 font-medium">{item.value}</p>
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
                        <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                            <p className="text-sm text-amber-600 dark:text-amber-400">
                                <strong>Note:</strong> The contact form is currently not functional as it requires backend integration. Please use the email or social links on the left to reach out directly.
                            </p>
                        </div>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-500 ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-zinc-100 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500/50 focus:outline-none transition-colors text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-500 ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-zinc-100 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500/50 focus:outline-none transition-colors text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-500 ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can I help you?"
                                    className="w-full bg-zinc-100 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500/50 focus:outline-none transition-colors resize-none text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
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
