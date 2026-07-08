'use client';

import { cn } from '@/lib/utils';

interface SpecRow {
  label: string;
  value: string;
}

interface SpecTableProps {
  rows: SpecRow[];
  className?: string;
}

export function SpecTable({ rows, className }: SpecTableProps) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full">
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-border/50 last:border-0"
            >
              <td className="py-3 pr-0 pl-4 align-top">
                <span className="font-persian text-sm text-text-muted">
                  {row.label}
                </span>
              </td>
              <td className="py-3 pr-4 pl-0 align-top">
                <span className="font-persian text-sm text-text-primary">
                  {row.value}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
