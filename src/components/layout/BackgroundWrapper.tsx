"use client"

import { useTheme } from "@/lib/useTheme"

export default function BackgroundWrapper() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <div
            className={`absolute inset-0 transition-colors duration-500 ${
                isDark
                    ? 'bg-gradient-to-b from-black/40 via-black/30 to-black/40'
                    : 'bg-gradient-to-b from-white/60 via-white/40 to-white/60'
            }`}
        />
    )
}
