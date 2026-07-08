/**
 * Icon Component
 * 
 * Reusable icon wrapper that enforces consistent icon sizing and styling.
 * All icons should use this component for consistency.
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

export function Icon({ children, className, size = 'md' }: IconProps) {
  return (
    <span className={cn('inline-flex items-center justify-center', sizeClasses[size], className)}>
      {children}
    </span>
  );
}
