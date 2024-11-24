// src/components/Header/styles.ts
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.primary};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: var(--max-width);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const MobileNav = styled.nav<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.bg.primary};
    border-bottom: 1px solid ${({ theme }) => theme.border};
    padding: 1rem;
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px ${({ theme }) => `${theme.border}40`};
  }
`;

export const MobileNavButton = styled(NavButton)`
  width: 100%;
  padding: 1rem;
  text-align: left;
  font-size: 1.1rem;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  &:hover {
    background-color: ${({ theme }) => theme.bg.secondary};
  }
`;