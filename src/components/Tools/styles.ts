// src/components/Tools/styles.ts
import styled from 'styled-components';

export const ToolsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px; // Match other sections
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const TechnologiesSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TechCategory = styled.div`
  width: 100%;

  h4 {
    margin-bottom: 1.25rem;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text.primary};
    font-weight: 500;
  }
`;

export const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TechItem = styled.span`
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text.secondary};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    color: ${({ theme }) => theme.text.primary};
  }
`;