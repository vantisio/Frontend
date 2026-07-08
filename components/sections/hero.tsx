"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, easing } from "@/animations/variants";

export function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 96; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle background patterns */}
      <div
        className="absolute inset-0 bg-grid-pattern text-border"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-noise" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-secondary/50"
        aria-hidden="true"
      />

      {/* Abstract engineering visualization */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>

        {/* Animated nodes - reduced for mobile performance */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent-primary rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent-secondary rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/2 w-1 h-1 bg-accent-primary rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <Container className="relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-6 sm:space-y-8"
          >
            <motion.h1 className="font-persian text-4xl sm:text-5xl lg:text-[3.375rem] xl:text-[3.70rem] font-bold tracking-tight text-text-primary leading-tight">
              ذهن‌ها به وب می‌آیند
            </motion.h1>

            <motion.p className="font-persian text-xl sm:text-2xl lg:text-3xl text-text-secondary font-medium">
              ما زیرساخت‌های نرم‌افزاری می‌سازیم؛ نه فقط اپلیکیشن
            </motion.p>

            <motion.p className="font-persian text-base sm:text-lg text-text-muted leading-relaxed max-w-xl">
              وانتیس یک شرکت مهندسی است که با تمرکز بر زیرساخت‌های اتوماسیون،
              پلتفرم‌های اجتماعی مقیاس‌پذیر و زیرساخت‌های نرم‌افزاری مدرن، آینده
              تکنولوژی را می‌سازد.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                size="lg"
                className="font-persian text-base w-full sm:w-auto"
                onClick={() => handleScrollToSection('investors')}
              >
                مطالعه پروپوزال
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-persian text-base w-full sm:w-auto"
                onClick={() => handleScrollToSection('products')}
              >
                آشنایی با محصولات
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Abstract visualization - hidden on mobile/tablet */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: easing }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative aspect-square">
              {/* Advanced network topology visualization */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="currentColor"
                      stopOpacity="0.15"
                    />
                    <stop
                      offset="50%"
                      stopColor="currentColor"
                      stopOpacity="0.4"
                    />
                    <stop
                      offset="100%"
                      stopColor="currentColor"
                      stopOpacity="0.15"
                    />
                  </linearGradient>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop
                      offset="0%"
                      stopColor="currentColor"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="currentColor"
                      stopOpacity="0"
                    />
                  </radialGradient>
                </defs>

                {/* Background grid pattern */}
                <g className="text-border/10" opacity="0.5">
                  {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x, i) => (
                    <line
                      key={`v-${i}`}
                      x1={x}
                      y1="0"
                      x2={x}
                      y2="400"
                      strokeWidth="0.5"
                    />
                  ))}
                  {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((y, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={y}
                      x2="400"
                      y2={y}
                      strokeWidth="0.5"
                    />
                  ))}
                </g>

                {/* Connection lines with data flow */}
                <g className="text-border/30">
                  {/* Central hub connections */}
                  {[
                    { x1: 200, y1: 200, x2: 100, y2: 100, delay: 0 },
                    { x1: 200, y1: 200, x2: 300, y2: 100, delay: 0.3 },
                    { x1: 200, y1: 200, x2: 100, y2: 300, delay: 0.6 },
                    { x1: 200, y1: 200, x2: 300, y2: 300, delay: 0.9 },
                    { x1: 200, y1: 200, x2: 200, y2: 80, delay: 1.2 },
                    { x1: 200, y1: 200, x2: 200, y2: 320, delay: 1.5 },
                    { x1: 200, y1: 200, x2: 80, y2: 200, delay: 1.8 },
                    { x1: 200, y1: 200, x2: 320, y2: 200, delay: 2.1 },
                  ].map((line, i) => (
                    <g key={i}>
                      <motion.line
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="url(#lineGradient)"
                        strokeWidth="1.5"
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: line.delay,
                        }}
                      />
                      {/* Data packet */}
                      <motion.circle
                        r="3"
                        fill="currentColor"
                        className="text-accent-primary"
                        animate={{
                          cx: [line.x1, line.x2],
                          cy: [line.y1, line.y2],
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: line.delay + 0.5,
                        }}
                      />
                    </g>
                  ))}

                  {/* Outer ring connections */}
                  {[
                    { x1: 100, y1: 100, x2: 300, y2: 100 },
                    { x1: 100, y1: 300, x2: 300, y2: 300 },
                    { x1: 100, y1: 100, x2: 100, y2: 300 },
                    { x1: 300, y1: 100, x2: 300, y2: 300 },
                    { x1: 200, y1: 80, x2: 100, y2: 100 },
                    { x1: 200, y1: 80, x2: 300, y2: 100 },
                    { x1: 200, y1: 320, x2: 100, y2: 300 },
                    { x1: 200, y1: 320, x2: 300, y2: 300 },
                  ].map((line, i) => (
                    <motion.line
                      key={i}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border/20"
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </g>

                {/* Pulsing activity rings */}
                <g>
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-accent-primary/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-accent-primary/20"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </g>

                {/* Central hub node */}
                <g>
                  {/* Glow effect */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="24"
                    fill="url(#nodeGlow)"
                    className="text-accent-primary"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Outer ring */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent-primary/60"
                    animate={{ scale: [1, 1.08, 1], rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* Inner core */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="10"
                    fill="currentColor"
                    className="text-accent-primary"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </g>

                {/* Satellite nodes */}
                {[
                  { x: 100, y: 100, delay: 0 },
                  { x: 300, y: 100, delay: 0.2 },
                  { x: 100, y: 300, delay: 0.4 },
                  { x: 300, y: 300, delay: 0.6 },
                  { x: 200, y: 80, delay: 0.8 },
                  { x: 200, y: 320, delay: 1.0 },
                  { x: 80, y: 200, delay: 1.2 },
                  { x: 320, y: 200, delay: 1.4 },
                ].map((node, i) => (
                  <g key={i}>
                    {/* Node glow */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="16"
                      fill="url(#nodeGlow)"
                      className="text-accent-secondary"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: node.delay,
                      }}
                    />
                    {/* Node ring */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-accent-secondary/50"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: node.delay,
                      }}
                    />
                    {/* Node core */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="5"
                      fill="currentColor"
                      className="text-accent-secondary"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: node.delay + 0.1,
                      }}
                    />
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: easing }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="font-persian text-xs sm:text-sm">اسکرول کنید</span>
          <ChevronDown className="w-5 h-5" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
