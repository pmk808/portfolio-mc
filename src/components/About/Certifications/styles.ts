// src/components/About/Certifications/styles.ts
import styled from 'styled-components';

export const CertificationsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

export const CertificationsContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const CertificationCategory = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategorySubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2rem;
    height: 2px;
    background-color: ${({ theme }) => theme.accent};
  }
`;

export const CertificationsList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export const CertificationCard = styled.div`
  width: 280px; // Fixed width for consistency
  padding: 1.25rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  h4 {
    font-size: 0.9375rem;
    font-weight: 500;
    margin-bottom: 0.375rem;
    color: ${({ theme }) => theme.text.primary};
    text-align: center;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text.secondary};
    margin-bottom: 0.25rem;
    text-align: center;
  }

  span {
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.text.secondary};
    display: block;
    text-align: center;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;