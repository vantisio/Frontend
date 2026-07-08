import { cn } from '@/lib/utils';

interface ActionButtonsProps {
  children: React.ReactNode;
  className?: string;
}

export function ActionButtons({ children, className }: ActionButtonsProps) {
  return (
    <div className={cn(
      'flex flex-col sm:flex-row gap-4 justify-center items-center',
      className
    )}>
      {children}
    </div>
  );
}
