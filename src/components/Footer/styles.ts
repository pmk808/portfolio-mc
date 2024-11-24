// src/components/Footer/styles.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.bg.secondary};
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;  // Matches other sections
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.875rem;
`;

export const MadeWithText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.875rem;
`;

export const TechStack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin-left: 0.25rem;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text.secondary};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const RepoLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text.secondary};
  margin-left: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;