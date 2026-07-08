'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { staggerItem } from '@/animations/variants';

interface InfoCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function InfoCard({ title, description, icon, className }: InfoCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        'p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-border-strong transition-all duration-200',
        className
      )}
    >
      {icon && (
        <div className="mb-4">
          <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      <h3 className="font-persian text-lg font-semibold text-text-primary mb-2">
        {title}
      </h3>
      {description && (
        <p className="font-persian text-sm text-text-muted leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
