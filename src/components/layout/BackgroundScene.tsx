"use client"

import dynamic from 'next/dynamic'
import { useTheme } from '@/lib/useTheme'

// Dynamically import Three.js component to avoid SSR issues
const SpaceScene = dynamic(
    () => import('@/components/three/SpaceScene'),
    { ssr: false }
)

export default function BackgroundScene() {
    const { theme, mounted } = useTheme()

    if (!mounted || theme !== 'dark') {
        return null
    }

    return (
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
            <SpaceScene />
        </div>
    )
}
