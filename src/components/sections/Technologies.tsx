"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/lib/useTheme'
import { useEffect, useState } from 'react'

const technologies = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Keras', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
    { name: 'scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'Hugging Face', logo: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
]

export default function Technologies() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted && theme === 'dark'

    const duplicatedTechnologies = [...technologies, ...technologies]

    return (
        <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${
                isDark ? 'bg-transparent' : 'bg-[#FDFCF7]'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-[#E5E5E5] text-[#1A1A1A] text-sm font-medium mb-6">
                        Tools
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-4`}>Technologies</h2>
                    <p className={`text-lg text-zinc-600`}>Tools and frameworks I work with</p>
                </motion.div>
            </div>

            {/* Scrolling Container */}
            <div className="relative w-full overflow-hidden z-10">
                {/* Scrolling logos - First row */}
                <div className="flex mb-8">
                    <motion.div
                        className="flex gap-16 pr-16"
                        animate={{
                            x: [0, -50 + '%'],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedTechnologies.map((tech, idx) => (
                            <div
                                key={`${tech.name}-${idx}`}
                                className="shrink-0 w-24 h-24 flex flex-col items-center justify-center gap-3 group"
                            >
                                <div className="w-14 h-14 flex items-center justify-center relative">
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                        unoptimized
                                    />
                                </div>
                                <span className={`text-xs font-medium transition-colors duration-300 ${
                                    isDark
                                        ? 'text-zinc-600 group-hover:text-white'
                                        : 'text-zinc-400 group-hover:text-[#1A1A1A]'
                                }`}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scrolling logos - Second row (reverse) */}
                <div className="flex">
                    <motion.div
                        className="flex gap-16 pr-16"
                        animate={{
                            x: [-50 + '%', 0],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedTechnologies.map((tech, idx) => (
                            <div
                                key={`${tech.name}-reverse-${idx}`}
                                className="shrink-0 w-24 h-24 flex flex-col items-center justify-center gap-3 group"
                            >
                                <div className="w-14 h-14 flex items-center justify-center relative">
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                        unoptimized
                                    />
                                </div>
                                <span className={`text-xs font-medium transition-colors duration-300 ${
                                    isDark
                                        ? 'text-zinc-600 group-hover:text-white'
                                        : 'text-zinc-400 group-hover:text-[#1A1A1A]'
                                }`}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
