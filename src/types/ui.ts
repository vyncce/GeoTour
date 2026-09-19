import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string | number;
}

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  actions?: ReactNode;
}

export interface CardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
  headerAction?: ReactNode;
}
