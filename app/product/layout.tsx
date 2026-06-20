import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SkillyTalk - AI Interview Platform & ATS Resume Checker | Vidhyonix',
  description: 'SkillyTalk delivers autonomous AI-powered interview automation with real-time voice analysis, intelligent follow-ups, ATS resume scoring, and comprehensive talent analytics. Built by Vidhyonix.',
  keywords: 'SkillyTalk, AI interview platform, ATS score checker, AI recruitment, voice interview AI, automated interviews, Vidhyonix product',
  openGraph: {
    title: 'SkillyTalk - AI Interview Platform',
    description: 'Transform hiring with autonomous AI interviews and ATS resume optimization.',
    type: 'website',
  }
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
