"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/ThemeToggle'
import { useTheme } from '@/lib/useTheme'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeMobileMenu = () => setMobileMenuOpen(false)

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled ? "glass-morphism py-3" : "bg-transparent py-5 border-transparent",
                isDark ? "border-white/10" : "border-black/10"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold gradient-text" aria-label="Home">
                        TK.
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    pathname === link.href
                                        ? "text-blue-400"
                                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <a
                            href="/resume.pdf"
                            download="Tapash_Kumar_Resume.pdf"
                            className="text-zinc-600 hover:text-blue-400 dark:text-zinc-400 transition-colors"
                            aria-label="Download Resume"
                            title="Download Resume"
                        >
                            <FileText size={20} />
                        </a>
                        <a
                            href="https://github.com/Tapash565"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tapashk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white focus:outline-none"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "md:hidden glass-morphism border-t overflow-hidden",
                            isDark ? "border-white/10" : "border-black/10"
                        )}
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className={cn(
                                        "block px-3 py-4 text-base font-medium rounded-lg transition-all",
                                        pathname === link.href
                                            ? "text-blue-400"
                                            : isDark
                                                ? "text-zinc-400 hover:text-white hover:bg-white/5"
                                                : "text-zinc-600 hover:text-zinc-900 hover:bg-black/5"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/resume.pdf"
                                download="Tapash_Kumar_Resume.pdf"
                                className={cn(
                                    "block px-3 py-4 text-base font-medium rounded-lg transition-all",
                                    isDark
                                        ? "text-zinc-400 hover:text-blue-400 hover:bg-white/5"
                                        : "text-zinc-600 hover:text-blue-600 hover:bg-black/5"
                                )}
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
