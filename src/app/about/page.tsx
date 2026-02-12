import { Metadata } from 'next';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Tapash Kumar - Data Scientist, ML Engineer, and AI Specialist.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <div className="border-t border-white/5" />
      <Experience />
    </div>
  );
}
