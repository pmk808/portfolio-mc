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
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const TechnologiesSection = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const TechCategory = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.text.primary};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const TechItem = styled.span`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text.secondary};

  @media (max-width: 480px) {
    font-size: 0.8125rem;
    padding: 0.375rem 0.75rem;
  }
`;