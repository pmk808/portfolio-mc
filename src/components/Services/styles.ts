// src/components/Services/styles.ts
import styled from 'styled-components';

export const ServicesSection = styled.section`
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
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.secondary};
  text-align: center;
  max-width: 600px;
  margin-bottom: 3rem;
`;

export const ServicesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accent};
  color: white;
  margin-bottom: 1.5rem;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const ServiceDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
`;