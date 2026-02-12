import { Github, Linkedin, Mail, FileDown } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold gradient-text mb-2">Tapash Kumar</h2>
                        <p className="text-zinc-500 text-sm max-w-xs">
                            Building the future of intelligent systems through Data Science and AI Engineering.
                        </p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a
                            href="/resume.pdf"
                            download="Tapash_Kumar_Resume.pdf"
                            className="text-zinc-400 hover:text-blue-400 transition-colors"
                            aria-label="Download Resume"
                            title="Download Resume"
                        >
                            <FileDown size={20} />
                        </a>
                        <Link href="https://github.com/Tapash565" target="_blank" className="text-zinc-400 hover:text-blue-400 transition-colors">
                            <Github size={20} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/tapashk/" target="_blank" className="text-zinc-400 hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="mailto:kumar.tapash565@gmail.com" className="text-zinc-400 hover:text-blue-400 transition-colors">
                            <Mail size={20} />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                    <p className="text-zinc-600 text-xs">
                        © {new Date().getFullYear()} Tapash Kumar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
