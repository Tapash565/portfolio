import { Metadata } from 'next';
import Projects from '@/components/sections/Projects';
import ProjectsBackground from '@/components/layout/ProjectsBackground';
import BackgroundWrapper from '@/components/layout/BackgroundWrapper';
import { useTheme } from '@/lib/useTheme';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Portfolio of Data Science, Machine Learning, and AI projects by Tapash Kumar.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-20 relative min-h-screen">
      {/* 3D Space Scene Background - No scroll animation, faster rotations */}
      <ProjectsBackground />

      {/* Content */}
      <div className="relative z-10">
        <Projects />

        {/* Additional niche projects or a call to action could go here */}
        <section className="py-12 border-t border-zinc-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-zinc-600 dark:text-zinc-400 italic">
              &quot;More projects are available on my GitHub profile.&quot;
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
