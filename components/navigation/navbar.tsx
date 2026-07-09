"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { easing } from "@/animations/variants";
import Image from "next/image";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  const navItems = [
    { label: "محصولات", href: "#products" },
    { label: "تیم", href: "#team" },
    { label: "سرمایه‌گذاران", href: "#investors" },
    { label: "ارتباط", href: "#contact" },
  ];

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 96; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard navigation for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Focus first menu item when menu opens
      firstMenuItemRef.current?.focus();
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-6 left-6 right-6 z-50 rounded-2xl transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg"
            : "bg-transparent border-0",
        )}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: easing }}
            className="flex items-center gap-3 rounded focus:outline-none focus:ring-2 focus:ring-accent-primary"
            aria-label="ونتیس - صفحه اصلی"
          >
            <Image
              src="/logo.png"
              alt="لوگوی ونتیس"
              width={72}
              height={72}
              priority
              className="h-13 w-13 object-contain"
            />

            <span className="font-persian text-3xl font-bold text-text-primary">
              ونتیس
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: easing }}
            className="hidden lg:flex items-center gap-8"
            role="menubar"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-persian text-2xl text-text-secondary hover:text-text-primary transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary rounded px-2 py-1"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Right Side Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: easing }}
            className="flex items-center gap-4"
          >
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-card transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? (
                  <Sun className="w-7 h-7 text-text-secondary" />
                ) : (
                  <Moon className="w-7 h-7 text-text-secondary" />
                )}
              </button>
            )}

            <Button
              size="sm"
              className="hidden md:flex font-persian text-xl focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
              onClick={() => handleScrollToSection("investors")}
              aria-label="Read investment proposal"
            >
              مطالعه پروپوزال
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              ref={menuToggleRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-card transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-text-primary" />
              )}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Premium Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: easing }}
              className="h-full flex flex-col justify-center items-center px-6"
            >
              <h2 id="mobile-menu-title" className="sr-only">
                منوی اصلی
              </h2>

              <nav aria-label="Mobile navigation">
                <div className="flex flex-col items-center gap-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      ref={index === 0 ? firstMenuItemRef : undefined}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.3,
                        ease: easing,
                      }}
                      className="font-persian text-2xl font-medium text-text-primary hover:text-accent-primary transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary rounded px-4 py-2"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.3, ease: easing }}
                className="mt-12"
              >
                <Button
                  size="lg"
                  className="font-persian text-base focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollToSection("investors");
                  }}
                  aria-label="Read investment proposal"
                >
                  مطالعه پروپوزال
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-16 flex items-center gap-6"
                aria-label="Social links"
              >
                <a
                  href="#"
                  className="p-2 rounded-lg hover:bg-card transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  aria-label="GitHub profile"
                >
                  <Github className="w-6 h-6 text-text-secondary" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg hover:bg-card transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-6 h-6 text-text-secondary" />
                </a>
                <a
                  href="mailto:hello@vantis.io"
                  className="p-2 rounded-lg hover:bg-card transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  aria-label="Send email"
                >
                  <Mail className="w-6 h-6 text-text-secondary" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
