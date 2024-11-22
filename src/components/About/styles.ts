// src/components/About/styles.ts
import styled from 'styled-components';

export const AboutSection = styled.section`
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
  padding: 0 2rem; 
`;

export const SectionTitle = styled.h2`
  width: 100%;
  max-width: 800px;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const AboutGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const BiographySection = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
`;

export const BioContent = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  line-height: 1.6;
  text-align: left;

  p {
    font-size: 1.19rem;
  }

  @media (max-width: 768px) {
    text-align: center;
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

export const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.125rem;
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

export const CertificationsSection = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CertificationsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); 
  }
`;

export const CertificationCard = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  text-align: center;

  h4 {
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.text.primary};
  }

  p {
    color: ${({ theme }) => theme.text.secondary};
    margin-bottom: 0.25rem;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text.secondary};
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

export const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const Timeline = styled.div`
  width: 100%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.border};

    @media (max-width: 768px) {
      left: 1rem;
      transform: none;
    }
  }
`;

export const TimelineItem = styled.div<{ isLeft: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${({ isLeft }) => isLeft ? 'flex-start' : 'flex-end'};
  padding: 2rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.accent};
    border: 2px solid ${({ theme }) => theme.bg.primary};
    z-index: 2;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 3rem;
    
    &::before {
      left: 1rem;
      transform: translate(-50%, -50%);
    }
  }
`;

export const TimelineContent = styled.div<{ isLeft: boolean }>`
  width: 45%;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${({ isLeft }) => isLeft ? 'right: -0.5rem' : 'left: -0.5rem'};
    transform: translateY(-50%) rotate(${({ isLeft }) => isLeft ? '45deg' : '-135deg'});
    width: 1rem;
    height: 1rem;
    background-color: ${({ theme }) => theme.bg.secondary};
    border-right: ${({ isLeft, theme }) => isLeft ? `1px solid ${theme.border}` : 'none'};
    border-top: ${({ isLeft, theme }) => isLeft ? `1px solid ${theme.border}` : 'none'};
    border-left: ${({ isLeft, theme }) => !isLeft ? `1px solid ${theme.border}` : 'none'};
    border-bottom: ${({ isLeft, theme }) => !isLeft ? `1px solid ${theme.border}` : 'none'};
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    
    &::before {
      left: -0.5rem;
      transform: translateY(-50%) rotate(-135deg);
    }
  }
`;

export const TimelineDate = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 0.5rem;
  display: block;
`;

export const TimelineTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const TimelineCompany = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 0.75rem;
  display: block;
`;

export const TimelineDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.secondary};
  line-height: 1.6;
`;

export const BioSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 240px 1fr; // Fixed width for image column
  gap: 2.5rem;
  align-items: start;
  max-width: 800px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 240px;
  aspect-ratio: 1;

  @media (max-width: 768px) {
    width: 180px;
    margin: 0 auto;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  filter: grayscale(20%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

export const NameTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
`;

export const RoleLabel = styled.h4`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1.8rem;
  font-weight: 500;
`;