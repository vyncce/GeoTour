'use client';

import React from 'react';
import { NavItem } from '@/types/ui';
import { cn } from '@/lib/utils';

export interface MobileNavProps {
  items: NavItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ items, activeTab, onTabChange }) => {
  return (
    <nav
      aria-label="Navigation principale mobile"
      className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg pb-[env(safe-area-inset-bottom)]"
    >
      <div className="flex h-16 items-center justify-around px-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                'flex flex-1 flex-col items-center justify-center min-h-11 py-1 px-2 rounded-xl transition-all duration-200 select-none relative',
                isActive
                  ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              )}
            >
              {/* Active Indicator Bar */}
              {isActive && (
                <span className="absolute top-0 w-8 h-1 bg-linear-to-r from-emerald-500 to-teal-400 rounded-b-full shadow-sm shadow-emerald-500/50 animate-in fade-in zoom-in duration-200" />
              )}

              <div className="relative">
                <Icon
                  className={cn(
                    'h-5 w-5 transition-transform duration-200',
                    isActive ? 'scale-110 stroke-[2.5]' : 'scale-100 stroke-[1.8]'
                  )}
                />
                {item.badge !== undefined && (
                  <span className="absolute -top-1 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white px-1">
                    {item.badge}
                  </span>
                )}
              </div>

              <span className="text-[11px] mt-1 tracking-tight leading-tight truncate max-w-18">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
