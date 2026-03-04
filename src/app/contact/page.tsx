import { Metadata } from 'next';
import Contact from '@/components/sections/Contact';
import BackgroundWrapper from '@/components/layout/BackgroundWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Tapash Kumar for AI/ML collaborations and opportunities.',
};

export default function ContactPage() {
  return (
    <div className="pt-20 relative min-h-screen">
      <BackgroundWrapper />
      <Contact />
    </div>
  );
}
