"use client"

import dynamic from 'next/dynamic'
import { useState , useEffect } from 'react'
import { useTheme } from '@/lib/useTheme'

// Dynamically import Three.js component to avoid SSR issues
const SpaceScene = dynamic(
    () => import('@/components/three/SpaceScene'),
    { ssr: false, loading: () => null }
)

export default function ProjectsBackground() {
    const { theme } = useTheme()
    // Lazy initialization to avoid hydration mismatch
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted || theme !== 'dark') {
        return null
    }

    return (
        <div className="fixed inset-0 w-full h-full z-0">
            <SpaceScene disableScrollAnimation={true} />
        </div>
    )
}
