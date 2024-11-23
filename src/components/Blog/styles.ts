// src/components/Blog/styles.ts
import styled from 'styled-components';

export const BlogSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 1rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.text.primary};
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 3rem;
  text-align: left;
`;

export const ConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  
  svg {
    margin-bottom: 1rem;
  }
`;

export const ConstructionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const ConstructionText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.secondary};
`;