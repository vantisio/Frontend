import { cn } from '@/lib/utils';

interface StatusDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function StatusDescription({ children, className }: StatusDescriptionProps) {
  return (
    <p className={cn(
      'text-lg sm:text-xl text-text-secondary mb-8',
      'leading-relaxed',
      className
    )}>
      {children}
    </p>
  );
}
