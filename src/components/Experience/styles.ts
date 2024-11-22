// src/components/Experience/styles.ts
import styled from 'styled-components';

export const ExperienceSection = styled.section`
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
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
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
      left: 0;
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
    padding-left: 2.5rem;
    
    &::before {
      left: 0;
      transform: translate(-50%, -50%);
    }
  }
`;

export const TimelineContent = styled.div<{ isLeft: boolean }>`
  width: 45%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${({ isLeft }) => isLeft ? 'right: -0.5rem' : 'left: -0.5rem'};
    transform: translateY(-50%) rotate(${({ isLeft }) => isLeft ? '45deg' : '45deg'}); // Fixed rotation
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
      transform: translateY(-50%) rotate(135deg);
    }
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const TimelineDate = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 0.5rem;
  display: block;
`;
export const TimelineType = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.secondary};
  font-style: italic;
`;

export const TimelineTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 500;
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