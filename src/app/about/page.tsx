import { Metadata } from 'next';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Tapash Kumar - Data Scientist, ML Engineer, and AI Specialist.',
};

import { publications } from '@/data/publications';
import { PublicationCard } from '@/components/PublicationCard';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <div className="border-t border-white/5" />
      <Experience />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">Achievements</h2>
          <div className="h-px flex-1 bg-linear-to-r from-blue-500/50 to-transparent" />
        </div>

        <div className="grid gap-8">
          {publications.map((p) => (
            <PublicationCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
