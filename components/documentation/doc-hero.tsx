'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { fadeUp } from '@/animations/variants';

interface DocHeroProps {
  title: string;
  description?: string;
  badge?: string;
}

export function DocHero({ title, description, badge }: DocHeroProps) {
  return (
    <div className="border-b border-border/50 bg-card/30">
      <Container className="py-16 sm:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl"
        >
          {badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-persian font-medium mb-4">
              {badge}
            </span>
          )}
          <h1 className="font-persian text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {title}
          </h1>
          {description && (
            <p className="font-persian text-lg sm:text-xl text-text-secondary leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </Container>
    </div>
  );
}
