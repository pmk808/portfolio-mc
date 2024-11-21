// src/components/Header/Header.tsx
import { FC } from 'react';
import { ThemeToggle } from '../ThemeToggle';
import {
  HeaderContainer,
  HeaderContent,
  HeaderLeft,
  HeaderTitle,
  HeaderNav,
  NavButton
} from './styles';

const NAVIGATION_ITEMS = [
  'about Me',
  'services',
  'tools',
  'experience',
  'projects',
  'blog',
  'contact'
] as const;

export const Header: FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLeft>
          <HeaderTitle>mc_phy.cabanes</HeaderTitle>
          <ThemeToggle />
        </HeaderLeft>
        <HeaderNav>
          {NAVIGATION_ITEMS.map((section) => (
            <NavButton
              key={section}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </NavButton>
          ))}
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  );
};