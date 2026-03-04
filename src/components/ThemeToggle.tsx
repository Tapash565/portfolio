"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/lib/useTheme"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-9 h-9" />
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-9 h-9 flex items-center justify-center rounded-full glass-morphism hover:scale-110 transition-transform"
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "light" ? 0 : 180,
                    scale: theme === "light" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Moon size={18} className="text-zinc-600" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : -180,
                    scale: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Sun size={18} className="text-yellow-400" />
            </motion.div>
        </motion.button>
    )
}
