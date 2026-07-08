import { cn } from '@/lib/utils';

interface StatusHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function StatusHeading({ children, className }: StatusHeadingProps) {
  return (
    <h1 className={cn(
      'text-6xl sm:text-7xl lg:text-8xl font-bold text-text-primary mb-6',
      'tracking-tight',
      className
    )}>
      {children}
    </h1>
  );
}
