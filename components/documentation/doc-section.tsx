'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/animations/variants';
import { cn } from '@/lib/utils';

interface DocSectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function DocSection({ id, title, children, className }: DocSectionProps) {
  return (
    <section id={id} className={cn('py-12 sm:py-16 first:pt-0', className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        {title && (
          <h2 className="font-persian text-2xl sm:text-3xl font-bold text-text-primary mb-6 scroll-mt-24">
            {title}
          </h2>
        )}
        <div className="prose prose-persian max-w-none">
          {children}
        </div>
      </motion.div>
    </section>
  );
}
