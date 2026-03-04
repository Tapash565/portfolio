"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/lib/useTheme'

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
    const isDark = theme === 'dark'
    // Duplicate the array for seamless infinite scroll
    const duplicatedTechnologies = [...technologies, ...technologies]

    return (
        <section className="py-24 relative overflow-hidden transition-all duration-500">
            {/* Subtle background overlay for readability */}
            <div className={`absolute inset-0 transition-colors duration-500 ${isDark
                ? 'bg-linear-to-b from-black/40 via-black/30 to-black/40'
                : 'bg-linear-to-b from-white/20 via-transparent to-white/20'
                }`} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Technologies</h2>
                    <p className={`text-lg ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>Tools and frameworks I work with</p>
                </motion.div>
            </div>

            {/* Scrolling Container */}
            <div className="relative w-full overflow-hidden z-10">
                {/* Scrolling logos - First row */}
                <div className="flex mb-8">
                    <motion.div
                        className="flex gap-12 pr-12"
                        animate={{
                            x: [0, -50 + '%'],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedTechnologies.map((tech, idx) => (
                            <div
                                key={`${tech.name}-${idx}`}
                                className="shrink-0 w-24 h-24 flex flex-col items-center justify-center gap-3 group"
                            >
                                <div className="w-16 h-16 flex items-center justify-center relative">
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                                        unoptimized
                                    />
                                </div>
                                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scrolling logos - Second row (reverse) */}
                <div className="flex">
                    <motion.div
                        className="flex gap-12 pr-12"
                        animate={{
                            x: [-50 + '%', 0],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedTechnologies.map((tech, idx) => (
                            <div
                                key={`${tech.name}-reverse-${idx}`}
                                className="shrink-0 w-24 h-24 flex flex-col items-center justify-center gap-3 group"
                            >
                                <div className="w-16 h-16 flex items-center justify-center relative">
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                                        unoptimized
                                    />
                                </div>
                                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
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
