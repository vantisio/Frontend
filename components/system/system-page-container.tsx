import { cn } from '@/lib/utils';

interface SystemPageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SystemPageContainer({ children, className }: SystemPageContainerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern text-text-primary pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Content */}
      <div className={cn('relative z-10 w-full px-4 sm:px-6 lg:px-8', className)}>
        {children}
      </div>
    </div>
  );
}
