'use client';

import React from 'react';
import { Compass, HardDrive } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Badge } from '@/components/ui/Badge';
import { HeaderProps } from '@/types/ui';

export const Header: React.FC<HeaderProps> = ({
  title = 'GEOTour',
  subtitle = 'EMCockpit Architecture',
  actions,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* App Title & Branding */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-900/20">
            <Compass className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-slate-900 dark:text-slate-100 sm:text-lg tracking-tight">
                {title}
              </h1>
              <Badge variant="emerald" size="sm" className="hidden sm:inline-flex">
                <HardDrive className="h-3 w-3" />
                Local-First
              </Badge>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Action controls & Theme toggle */}
        <div className="flex items-center gap-2">
          {actions}
          <div className="h-5 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
