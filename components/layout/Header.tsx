'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
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
    // { 
    //   href: '#',
    //   label: 'Services',
    //   dropdown: [
    //     { href: '/services/web-development', label: 'Web Development', icon: <Code size={16} /> },
    //     { href: '/services/app-development', label: 'App Development', icon: <MonitorSmartphone size={16} /> },
    //     { href: '/services/digital-marketing', label: 'Digital Marketing', icon: <Globe size={16} /> },
    //     { href: '/services/branding', label: 'Branding', icon: <Sparkles size={16} /> },
    //   ]
    // },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blogs' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrollY > 50 
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/50" 
          : "bg-transparent"
      )}
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
            <span className="text-primary">{APP_NAME}</span>
            {/* <span className="text-blue-500">X</span> */}
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => 
            false ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    className="text-foreground/80 hover:text-foreground flex items-center gap-1 transition-colors"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    variants={buttonHover}
                  >
                    {link.label}
                    <ChevronDown size={16} />
                  </motion.button>
                </DropdownMenuTrigger>
                {/* <DropdownMenuContent className="bg-card/95 backdrop-blur-md border border-border/50">
                  {link.dropdown.map((item) => (
                    <DropdownMenuItem key={item.label} asChild>
                      <Link href={item.href} className="flex items-center gap-2">
                        {item.icon}
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent> */}
              </DropdownMenu>
            ) : (
              <Link 
                key={link.label}
                href={link.href}
                className={cn(
                  "relative text-foreground/80 hover:text-foreground transition-colors",
                  pathname === link.href && "text-foreground font-medium"
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
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
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
          {/* Theme Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={buttonHover}
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <MonitorSmartphone className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA Button */}
          <Link href="/contact">
            <motion.button
              className="bg-primary text-primary-foreground rounded-full px-6 py-2 font-medium shadow-md hover:shadow-lg transition-all"
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
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
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
            className="lg:hidden overflow-hidden bg-background border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
              {navLinks.map((link) => 
                false ? (
                  <div key={link.label} className="flex flex-col space-y-2">
                    <div className="font-medium">{link.label}</div>
                    {/* <div className="pl-4 flex flex-col space-y-2">
                      {link.dropdown.map((item) => (
                        <Link 
                          key={item.label}
                          href={item.href}
                          className="text-foreground/80 hover:text-foreground flex items-center gap-2 py-1"
                        >
                          {item.icon}
                          {item.label}
                        </Link>
                      ))}
                    </div> */}
                  </div>
                ) : (
                  <Link 
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "text-foreground/80 hover:text-foreground py-1",
                      pathname === link.href && "text-foreground font-medium"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Mobile CTA */}
              <Link href="/contact" className="inline-block">
                <button className="w-full bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium shadow-md">
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