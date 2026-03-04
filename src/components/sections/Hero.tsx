"use client"

import { useState } from 'react'
import { useTheme } from '@/lib/useTheme'
import SpaceHero from '@/components/hero/SpaceHero'
import LightHero from '@/components/hero/LightHero'

export default function Hero() {
    const { theme } = useTheme()
    // Lazy initialization to avoid hydration mismatch
    const [mounted] = useState(() => typeof window !== 'undefined')

    if (!mounted) {
        return <div className="min-h-screen bg-black" />
    }

    return theme === 'dark' ? <SpaceHero /> : <LightHero />
}
