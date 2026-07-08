/**
 * Typography Components
 * 
 * Reusable typography components that enforce consistent text styling.
 * All text should use these components instead of raw HTML tags.
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { typography } from '@/config/design-tokens';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

interface HeadingProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

interface TextProps extends TypographyProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Heading({ 
  level = 1, 
  className, 
  children, 
  ...props 
}: HeadingProps) {
  const sizeClasses = {
    1: 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
    2: 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight',
    3: 'text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight',
    4: 'text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight',
    5: 'text-lg sm:text-xl lg:text-2xl font-medium',
    6: 'text-base sm:text-lg font-medium',
  };
  
  const classNameStr = cn(
    'text-text-primary',
    sizeClasses[level],
    className
  );
  
  if (level === 1) {
    return <h1 className={classNameStr} {...props}>{children}</h1>;
  }
  if (level === 2) {
    return <h2 className={classNameStr} {...props}>{children}</h2>;
  }
  if (level === 3) {
    return <h3 className={classNameStr} {...props}>{children}</h3>;
  }
  if (level === 4) {
    return <h4 className={classNameStr} {...props}>{children}</h4>;
  }
  if (level === 5) {
    return <h5 className={classNameStr} {...props}>{children}</h5>;
  }
  return <h6 className={classNameStr} {...props}>{children}</h6>;
}

export function Text({ 
  size = 'base', 
  weight = 'normal', 
  className, 
  children, 
  ...props 
}: TextProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  };
  
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };
  
  return (
    <p 
      className={cn(
        'text-text-primary',
        sizeClasses[size],
        weightClasses[weight],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function MutedText({ 
  size = 'base', 
  className, 
  children, 
  ...props 
}: Omit<TextProps, 'weight'>) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  };
  
  return (
    <p 
      className={cn(
        'text-text-muted',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Link({ 
  external = false, 
  className, 
  children, 
  ...props 
}: LinkProps) {
  return (
    <a
      className={cn(
        'text-accent-primary hover:text-accent-primary-hover transition-colors duration-200 underline-offset-4 hover:underline',
        className
      )}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

export function Code({ 
  className, 
  children, 
  ...props 
}: TypographyProps) {
  return (
    <code 
      className={cn(
        'font-mono text-sm bg-card border border-border rounded px-1.5 py-0.5 text-text-primary',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
