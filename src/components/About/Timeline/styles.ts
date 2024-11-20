// src/components/About/Timeline/styles.ts
import styled from 'styled-components';

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
    justify-content: flex-end;
    padding-left: 2.5rem;

    &::before {
      left: 0;
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
    width: calc(100% - 3rem);

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