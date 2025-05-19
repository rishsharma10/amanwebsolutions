'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: string;
  enableSystem?: boolean;
};

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  // Add a client-side only state to prevent SSR hydration issues
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

// Animation context for coordinating global animations
type AnimationContextType = {
  isPageTransitioning: boolean;
  startPageTransition: () => void;
  endPageTransition: () => void;
};

const AnimationContext = createContext<AnimationContextType>({
  isPageTransitioning: false,
  startPageTransition: () => {},
  endPageTransition: () => {},
});

export const useAnimation = () => useContext(AnimationContext);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  const startPageTransition = () => setIsPageTransitioning(true);
  const endPageTransition = () => setIsPageTransitioning(false);

  return (
    <AnimationContext.Provider
      value={{
        isPageTransitioning,
        startPageTransition,
        endPageTransition,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}