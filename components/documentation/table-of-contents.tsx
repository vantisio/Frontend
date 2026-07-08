'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { easing } from '@/animations/variants';

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
  activeId?: string;
}

export function TableOfContents({ items, activeId }: TableOfContentsProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="hidden lg:block">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center gap-2 text-sm font-persian text-text-secondary hover:text-text-primary transition-colors duration-150 mb-4"
      >
        <span>در این صفحه</span>
        <motion.span
          animate={{ rotate: isCollapsed ? -90 : 0 }}
          transition={{ duration: 0.2, ease: easing }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>

      {!isCollapsed && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: easing }}
          className="space-y-1"
        >
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'block py-1.5 pr-3 text-sm font-persian transition-colors duration-150',
                'hover:text-text-primary',
                'focus:outline-none focus:ring-2 focus:ring-accent-primary/50 rounded',
                item.id === activeId
                  ? 'text-accent-primary font-medium border-r-2 border-accent-primary pr-2'
                  : 'text-text-muted',
                item.level > 1 && 'pr-6 text-xs'
              )}
              style={{ paddingRight: `${item.level * 12 + 12}px` }}
            >
              {item.title}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
