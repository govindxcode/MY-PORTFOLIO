import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle fixed right-5 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-red-400/70 bg-[#100708]/95 text-red-300 shadow-[0_0_22px_rgba(255,40,65,0.25)] backdrop-blur transition-all duration-300 hover:scale-110 hover:border-red-200 hover:shadow-[0_0_30px_rgba(255,40,65,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 max-sm:right-3 max-sm:top-auto max-sm:bottom-5 max-sm:translate-y-0"
      aria-label={isDark ? 'Turn off dark mode' : 'Turn on dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Dark mode is on' : 'Dark mode is off'}
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-colors" />
      ) : (
        <Moon className="h-5 w-5 transition-colors" />
      )}
    </button>
  );
}
