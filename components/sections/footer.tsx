"use client";

import { Container } from "@/components/ui/container";
import { useTheme } from "next-themes";
import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeUp } from "@/animations/variants";
import Image from "next/image";

export function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer
      className="border-t border-border py-16 sm:py-20"
      role="contentinfo"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          {/* Logo and tagline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="لوگوی وانتیس"
                width={48}
                height={48}
                priority
                className="h-13 w-13 object-contain"
              />
              <div className="font-persian text-xl sm:text-2xl font-bold text-text-primary">
                وانتیس
              </div>
            </div>

            <p className="font-persian text-sm text-text-muted">
              ذهـن‌ها به وِب می‌آیـنـد!
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center gap-6 sm:gap-8"
          >
            <a
              href="https://github.com/vantisio"
              className="p-2 rounded-lg hover:bg-card transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5 text-text-secondary hover:text-text-primary" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-card transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5 text-text-secondary hover:text-text-primary" />
            </a>
            <a
              href="mailto:contact@vantis.ir"
              className="p-2 rounded-lg hover:bg-card transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary"
              aria-label="Send email to Vantis"
            >
              <Mail className="w-5 h-5 text-text-secondary hover:text-text-primary" />
            </a>
          </motion.div>

          {/* Theme switch and copyright */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center md:items-end gap-4"
          >
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-card transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-text-secondary" />
                ) : (
                  <Moon className="w-5 h-5 text-text-secondary" />
                )}
              </button>
            )}
            <p className="font-persian text-sm text-text-muted">
              © ۱۴۰۵ وانتیس. تمامی حقوق محفوظ است.
            </p>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
