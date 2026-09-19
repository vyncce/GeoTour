'use client';

import React, { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const emptySubscribe = () => () => {};

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Theme toggle loading">
        <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      title={`Theme actuel: ${theme || 'system'} (Cliquer pour changer)`}
      aria-label="Changer le thème de l'application"
      className="relative text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
    >
      {theme === 'dark' && <Moon className="h-5 w-5 transition-transform duration-300 rotate-0 scale-100" />}
      {theme === 'light' && <Sun className="h-5 w-5 transition-transform duration-300 rotate-0 scale-100 text-amber-500" />}
      {theme === 'system' && <Monitor className="h-5 w-5 transition-transform duration-300 rotate-0 scale-100 text-sky-500" />}
    </Button>
  );
};
