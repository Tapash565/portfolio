"use client"

import Research from "@/components/sections/Research";
import Footer from "@/components/layout/Footer";
import BackgroundScene from "@/components/layout/BackgroundScene";

export default function ResearchPage() {
    return (
        <main className="relative min-h-screen pt-20">
            {/* Background */}
            <BackgroundScene />

            <div className="relative z-10">
                <Research />
                <Footer />
            </div>
        </main>
    )
}
