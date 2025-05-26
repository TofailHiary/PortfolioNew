import React from 'react';
import { useTheme } from '@/contexts/ThemeContext'; // Adjusted path
import { Button } from '@/components/ui/button'; // Assuming a Button component exists
import { Sun, Moon } from 'lucide-react';

export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost" // Assuming ghost variant for icon buttons
      size="icon" // Assuming icon size for icon buttons
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
};
