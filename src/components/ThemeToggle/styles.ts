// src/components/ThemeToggle/styles.ts
import styled from 'styled-components';

export const ThemePickerContainer = styled.div`
  position: relative;
`;

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.bg.secondary};
  }
`;

export const ThemeDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.bg.primary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  padding: 0.5rem;
  min-width: 150px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 50;
`;

export const ThemeOption = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  border-radius: 0.375rem;
  gap: 0.75rem;
  font-size: 0.95rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.bg.secondary};
  }

  &.active {
    color: ${({ theme }) => theme.accent};
  }

  .theme-check {
    margin-left: auto;
  }
`;