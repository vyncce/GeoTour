'use client';

import React from 'react';
import { NavItem, HeaderProps } from '@/types/ui';
import { Header } from './Header';
import { MobileNav } from './MobileNav';
import { cn } from '@/lib/utils';
import { ShieldCheck } from 'lucide-react';

export interface AppShellProps {
  navItems: NavItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
  headerProps?: HeaderProps;
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({
  navItems,
  activeTab,
  onTabChange,
  headerProps,
  children,
}) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased selection:bg-emerald-500/30">
      {/* Top Header */}
      <Header {...headerProps} />

      {/* Main Layout Area */}
      <div className="flex-1 mx-auto w-full max-w-7xl flex">
        {/* Desktop Sidebar (lg breakpoint and up) */}
        <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200/80 dark:border-slate-800/80 p-4 sticky top-16 h-[calc(100vh-4rem)]">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 px-3">
            Navigation
          </div>

          <nav className="space-y-1 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={cn(
                    'w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 min-h-11',
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn('h-5 w-5', isActive ? 'text-emerald-500' : 'text-slate-400')} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Footer Badge */}
          <div className="mt-auto p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              <p className="font-semibold text-slate-700 dark:text-slate-300">Standalone & Offline</p>
              <p>Client-side LocalStorage</p>
            </div>
          </div>
        </aside>

        {/* Content Container (padded bottom for mobile nav bar) */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-8 w-full overflow-x-hidden">
          {children}
        </main>
      </div>

      {/* Mobile / Tablet Bottom Navigation Bar */}
      <MobileNav items={navItems} activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
};
