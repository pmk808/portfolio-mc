// src/components/Header/Header.tsx
import { FC, useState } from 'react';
import { ThemeToggle } from '../ThemeToggle';
import { Menu, X } from 'lucide-react';
import * as S from './styles';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); 
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderLeft>
          <S.HeaderTitle>mc_phy.cabanes</S.HeaderTitle>
          <ThemeToggle />
        </S.HeaderLeft>

        {/* Desktop Navigation */}
        <S.HeaderNav>
          {NAVIGATION_ITEMS.map((section) => (
            <S.NavButton
              key={section}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </S.NavButton>
          ))}
        </S.HeaderNav>

        {/* Mobile Menu Button */}
        <S.MobileMenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </S.MobileMenuButton>

        {/* Mobile Navigation */}
        <S.MobileNav isOpen={isMenuOpen}>
          {NAVIGATION_ITEMS.map((section) => (
            <S.MobileNavButton
              key={section}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </S.MobileNavButton>
          ))}
        </S.MobileNav>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};