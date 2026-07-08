'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/animations/variants';
import { cn } from '@/lib/utils';

interface TimelineItem {
  date: string;
  title: string;
  description?: string;
  status?: 'completed' | 'in-progress' | 'planned';
}

interface TimelineProps {
  items: TimelineItem[];
}

const statusStyles = {
  completed: 'bg-accent-primary text-white',
  'in-progress': 'bg-accent-secondary text-white',
  planned: 'bg-border/30 text-text-muted',
};

export function Timeline({ items }: TimelineProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-border/30" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            variants={staggerItem}
            className="relative pr-16"
          >
            {/* Timeline dot */}
            <div
              className={cn(
                'absolute right-4 w-5 h-5 rounded-full border-4 border-card',
                statusStyles[item.status || 'planned']
              )}
            />

            {/* Content */}
            <div className="p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-persian text-sm text-text-muted">
                  {item.date}
                </span>
                {item.status && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-persian font-medium bg-accent-primary/10 text-accent-primary">
                    {item.status === 'completed' && 'تکمیل شده'}
                    {item.status === 'in-progress' && 'در حال انجام'}
                    {item.status === 'planned' && 'برنامه‌ریزی شده'}
                  </span>
                )}
              </div>
              <h4 className="font-persian font-semibold text-text-primary mb-1">
                {item.title}
              </h4>
              {item.description && (
                <p className="font-persian text-sm text-text-muted">
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
