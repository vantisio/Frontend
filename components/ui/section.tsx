import { cn } from '@/lib/utils';
import { Container } from './container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'muted' | 'accent';
}

const variantClasses = {
  default: 'bg-background',
  muted: 'bg-background-secondary',
  accent: 'bg-surface',
};

export function Section({ children, className, id, variant = 'default' }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 lg:py-32', variantClasses[variant], className)}>
      <Container>{children}</Container>
    </section>
  );
}
