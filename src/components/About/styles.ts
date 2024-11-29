// src/components/About/styles.ts
import styled, { keyframes } from 'styled-components';

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
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
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
  margin-bottom: 3rem;
`;

export const BioContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const IntroHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const TerminalCard = styled.div`
  width: 100%;
  max-width: 900px;
  background: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.9rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.secondary};
  text-align: left;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

export const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
    
    svg {
      transform: translateY(-1px);
    }
  }

  svg {
    transition: transform 0.2s ease;
  }
`;

export const TerminalHeader = styled.div`
  background: ${({ theme }) => theme.bg.primary};
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const TerminalDots = styled.div`
  display: flex;
  gap: 0.375rem;
  margin-right: 1rem;

  span {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    
    &:nth-child(1) {
      background-color: #ff5f56;
    }
    
    &:nth-child(2) {
      background-color: #ffbd2e;
    }
    
    &:nth-child(3) {
      background-color: #27c93f;
    }
  }

  @media (max-width: 768px) {
    gap: 0.25rem;
    
    span {
      width: 0.625rem;
      height: 0.625rem;
    }
  }
`;

export const TerminalTitle = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.875rem;
  font-family: monospace;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const Prompt = styled.span`
  color: ${({ theme }) => theme.accent};
  margin-right: 0.5rem;
  user-select: none;
  flex-shrink: 0;

  @media (max-width: 480px) {
    max-width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const TerminalOutput = styled.pre`
  font-family: 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.text.primary};
  margin: 0.5rem 0 1rem 0;
  white-space: pre-wrap;
  padding-left: 1rem;
  width: 100%;
  overflow-x: auto;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding-left: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.4;
  }
`;

export const BlinkingCursor = styled.span`
  animation: ${blink} 1s step-end infinite;
  color: ${({ theme }) => theme.text.primary};
`;

export const TerminalLine = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Consolas', monospace;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.primary};
  white-space: nowrap;
  min-width: min-content;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const TerminalBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.bg.primary};
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 1rem;
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

export const TerminalBio = styled.div`
  font-family: monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
  padding: 1rem 0;
  white-space: pre-wrap;
`;