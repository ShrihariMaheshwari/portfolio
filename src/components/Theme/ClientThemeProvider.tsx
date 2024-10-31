// src/components/theme/ClientThemeProvider.tsx
import { ThemeProvider } from './ThemeProvider';
import ThemeToggle from './ThemeToggle';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ClientThemeProvider({ children }: Props) {
  return (
    <ThemeProvider>
      <div className="relative">
        <div className="fixed top-4 right-6 z-[100]">
          <ThemeToggle />
        </div>
        {children}
      </div>
    </ThemeProvider>
  );
}