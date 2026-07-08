import { cn } from '@/lib/utils';

interface ErrorCardProps {
  children: React.ReactNode;
  className?: string;
}

export function ErrorCard({ children, className }: ErrorCardProps) {
  return (
    <div className={cn(
      'mx-auto max-w-2xl text-center',
      'bg-card/50 backdrop-blur-sm border border-border rounded-xl',
      'p-8 sm:p-12 lg:p-16',
      'shadow-lg',
      className
    )}>
      {children}
    </div>
  );
}
