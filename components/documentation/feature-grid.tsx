'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/animations/variants';
import { Check } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          variants={staggerItem}
          className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-card/50"
        >
          <div className="w-6 h-6 rounded-full bg-accent-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-4 h-4 text-accent-primary" />
          </div>
          <div>
            <h4 className="font-persian font-medium text-text-primary mb-1">
              {feature.title}
            </h4>
            <p className="font-persian text-sm text-text-muted">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
