'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/animations/variants';

interface TechItem {
  name: string;
  category: string;
  description?: string;
}

interface TechStackGridProps {
  items: TechItem[];
}

export function TechStackGrid({ items }: TechStackGridProps) {
  const categories = Array.from(new Set(items.map((item) => item.category)));

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="space-y-8"
    >
      {categories.map((category) => {
        const categoryItems = items.filter((item) => item.category === category);
        return (
          <div key={category}>
            <h3 className="font-persian text-lg font-semibold text-text-primary mb-4">
              {category}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={staggerItem}
                  className="p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:border-border-strong transition-all duration-200"
                >
                  <h4 className="font-persian font-medium text-text-primary mb-1">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="font-persian text-sm text-text-muted">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
