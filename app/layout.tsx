import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import logo from "@/app/assets/logo/favicon.png"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: {
    icon: logo.src,
  },
  title: 'Vidhyonix IT Solutions',
  description: 'Vidhyonix delivers Web, Mobile & Cloud solutions that help businesses grow. We design scalable, secure & user-friendly digital experiences that turn ideas into impactful technology.',
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
