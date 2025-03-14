// src/components/Contact/styles.ts
import styled from 'styled-components';

export const ContactSection = styled.section`
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
  align-items: flex-start;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.text.primary};
  width: 100%;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.secondary};
  text-align: left;
  margin-bottom: 3rem;
  width: 100%;
`;

export const ContactContent = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
`;

export const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
  text-align: left;
  max-width: 600px;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactLink = styled.a`
    display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.text.secondary};
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.border};
  flex: 1;
  min-width: 200px;

  svg {
    width: 15px;
    height: 15px;
    min-width: 15px; 
    min-height: 15px; 
  }

  span {
    font-size: 0.90rem;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => `${theme.bg.secondary}`};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: 500;
`;