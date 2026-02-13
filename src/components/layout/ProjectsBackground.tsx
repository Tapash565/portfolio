"use client"

import dynamic from 'next/dynamic'

// Dynamically import Three.js component to avoid SSR issues
const SpaceScene = dynamic(
    () => import('@/components/three/SpaceScene'),
    { ssr: false }
)

export default function ProjectsBackground() {
    return (
        <div className="fixed inset-0 w-full h-full z-0">
            <SpaceScene disableScrollAnimation={true} rotationSpeedMultiplier={3} />
        </div>
    )
}
