// src/components/ThemeToggle/ThemeToggle.tsx
import { FC, useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme, Theme } from '@/context/ThemeContext';
import {
  ThemePickerContainer,
  ThemeButton,
  ThemeDropdown,
  ThemeOption
} from './styles';

interface ThemeConfig {
  id: Theme;
  label: string;
  icon: typeof Sun | typeof Moon | typeof Monitor;
}

const themes: ThemeConfig[] = [
  { id: 'light', label: 'Light', icon: Sun },
  { id: 'dark', label: 'Dark', icon: Moon },
  { id: 'system', label: 'System', icon: Monitor }
];

export const ThemeToggle: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCurrentIcon = () => {
    const currentTheme = themes.find(t => t.id === theme);
    const Icon = currentTheme?.icon || Sun;
    return <Icon size={20} />;
  };

  return (
    <ThemePickerContainer ref={dropdownRef}>
      <ThemeButton
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select theme"
      >
        {getCurrentIcon()}
      </ThemeButton>

      {isOpen && (
        <ThemeDropdown>
          {themes.map(({ id, label, icon: Icon }) => (
            <ThemeOption
              key={id}
              onClick={() => {
                setTheme(id);
                setIsOpen(false);
              }}
              className={theme === id ? 'active' : ''}
            >
              <Icon size={16} />
              <span>{label}</span>
              {theme === id && <span className="theme-check">•</span>}
            </ThemeOption>
          ))}
        </ThemeDropdown>
      )}
    </ThemePickerContainer>
  );
};