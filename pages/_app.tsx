import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, AnimationProvider } from '@/components/ThemeProvider';
import { PageTransition } from '@/components/PageTransition';
import '@/app/globals.css';
import { APP_NAME } from '@/components/layout/Footer';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <AnimationProvider>
        <Head>
          <title>{APP_NAME} - Web development agency</title>
          <meta name="description" content={`${APP_NAME} is a digital agency specializing in web development, app development, and digital marketing services.`} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </AnimationProvider>
    </ThemeProvider>
  );
}