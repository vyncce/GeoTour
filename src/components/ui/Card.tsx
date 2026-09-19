import React from 'react';
import { cn } from '@/lib/utils';
import { CardProps } from '@/types/ui';

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className,
  footer,
  headerAction,
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200/80 dark:border-slate-800/80',
        'bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-200',
        'p-4 sm:p-6 flex flex-col gap-4',
        className
      )}
    >
      {(title || description || headerAction) && (
        <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
          <div>
            {title && (
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {description}
              </p>
            )}
          </div>
          {headerAction && <div className="shrink-0">{headerAction}</div>}
        </div>
      )}

      <div className="flex-1 text-sm text-slate-700 dark:text-slate-300">{children}</div>

      {footer && (
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
          {footer}
        </div>
      )}
    </div>
  );
};
