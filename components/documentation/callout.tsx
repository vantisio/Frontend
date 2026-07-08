'use client';

import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type CalloutType = 'info' | 'warning' | 'success' | 'error';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutStyles = {
  info: {
    container: 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
    title: 'text-blue-900 dark:text-blue-100',
    Icon: Info,
  },
  warning: {
    container: 'bg-yellow-50/50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800',
    icon: 'text-yellow-600 dark:text-yellow-400',
    title: 'text-yellow-900 dark:text-yellow-100',
    Icon: AlertTriangle,
  },
  success: {
    container: 'bg-green-50/50 dark:bg-green-950/20 border-green-200 dark:border-green-800',
    icon: 'text-green-600 dark:text-green-400',
    title: 'text-green-900 dark:text-green-100',
    Icon: CheckCircle,
  },
  error: {
    container: 'bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-800',
    icon: 'text-red-600 dark:text-red-400',
    title: 'text-red-900 dark:text-red-100',
    Icon: XCircle,
  },
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const style = calloutStyles[type];
  const Icon = style.Icon;

  return (
    <div className={cn('my-6 p-4 rounded-lg border', style.container)}>
      <div className="flex items-start gap-3">
        <Icon className={cn('w-5 h-5 shrink-0 mt-0.5', style.icon)} />
        <div className="flex-1">
          {title && (
            <h4 className={cn('font-persian font-semibold mb-2', style.title)}>
              {title}
            </h4>
          )}
          <div className="font-persian text-sm text-text-secondary leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
