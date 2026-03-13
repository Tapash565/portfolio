"use client"
import { useState, useEffect } from 'react'
import { useTheme } from '@/lib/useTheme'
import SpaceHero from '@/components/hero/SpaceHero'
import LightHero from '@/components/hero/LightHero'

export default function Hero() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return theme === 'dark' ? <SpaceHero /> : <LightHero />
}
