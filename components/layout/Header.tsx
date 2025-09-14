'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import logo from "@/app/assets/logo/logoheader.png"
import { 
  Menu, X, ChevronDown, Star, Globe, Code, Send,
  Sparkles, Sun, Moon, MonitorSmartphone 
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { buttonHover } from '@/lib/animations';
import { APP_NAME } from './Footer';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [headerBg, setHeaderBg] = useState<string | null>(`rgb(15 25 38)`);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  
  // Track scroll position for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute average color from logo to set header background
  useEffect(() => {
    if (!logo?.src) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = logo.src;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, 1, 1);
        const { data } = ctx.getImageData(0, 0, 1, 1);
        const r = data[0];
        const g = data[1];
        const b = data[2];
        setHeaderBg(`rgb(15 25 38)`);
      } catch (e) {
        // Fallback color
        setHeaderBg('rgb(15 25 38)');
      }
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Menu animation variants
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/3d-design', label: '3D Design' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blogs' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md shadow-sm border-b text-white",
        "border-white/10"
      )}
      style={{ backgroundColor: headerBg || undefined }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-primary font-bold text-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            {/* <span className="text-primary">{APP_NAME}</span> */}
            <a className="group flex items-center space-x-2 cursor-pointer" href="/preview/3e66e85c-f045-498e-aa5d-fb31a30e4d2b/1314647">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"> */}
                <img 
                  src={logo.src}
                  alt="Vidhyonix Logo" 
                  className="w-48 h-15 object-contain"
                />
              {/* </div> */}
            </a>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => 
            false ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    variants={buttonHover}
                  >
                    {link.label}
                    <ChevronDown size={16} />
                  </motion.button>
                </DropdownMenuTrigger>
              </DropdownMenu>
            ) : (
              <Link 
                key={link.label}
                href={link.href}
                className={cn(
                  "relative text-white/80 hover:text-white transition-colors",
                  pathname === link.href && "text-white font-medium"
                )}
              >
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={buttonHover}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/80 rounded-full"
                      layoutId="activeNav"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </motion.div>
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* CTA Button */}
          <Link href="/contact">
            <motion.button
              className="bg-gradient-to-r from-sky-400 via-fuchsia-250 to-pink-400 text-white rounded-full px-6 py-2 font-medium shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="lg:hidden overflow-hidden bg-black/50 backdrop-blur-md border-t border-white/10 text-white"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
              {navLinks.map((link) => 
                false ? (
                  <div key={link.label} className="flex flex-col space-y-2">
                    <div className="font-medium">{link.label}</div>
                  </div>
                ) : (
                  <Link 
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "text-white/80 hover:text-white py-1",
                      pathname === link.href && "text-white font-medium"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Mobile CTA */}
              <Link href="/contact" className="inline-block">
                <button className="w-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 text-white rounded-full px-6 py-3 font-medium shadow-md">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}