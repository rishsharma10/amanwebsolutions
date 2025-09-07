import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vidhyonix IT Solutions',
  description: 'Vidionix is a full-service video and event production company based in Indiana, specializing in corporate videos, live streaming, hybrid events, and branded content. From concept to final cut, we deliver high-quality, broadcast-ready media for businesses, government, and nonprofits across the U.S.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
