// src/layouts/MainLayout/MainLayout.tsx
import { FC, ReactNode } from 'react';
import { Header } from '../../components/Header/Header';
import { LayoutContainer, Main } from './styles';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
    </LayoutContainer>
  );
};