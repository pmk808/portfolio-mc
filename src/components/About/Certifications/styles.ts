// src/components/About/Certifications/styles.ts
import styled from 'styled-components';

export const CertificationsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
   margin-top: 0;
  padding-top: 0;
`;

export const CertificationsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TopCertifications = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const OnlineCertifications = styled.div`
  width: 100%;
  
  .certs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
    justify-content: center; // Center the grid items
    justify-items: stretch; // Make items fill their grid cells evenly

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
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
  width: 100%;
  padding: 1.25rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 0.9375rem;
    font-weight: 500;
    margin-bottom: 0.375rem;
    color: ${({ theme }) => theme.text.primary};
    text-align: left;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text.secondary};
    margin-bottom: 0.25rem;
    text-align: left;
  }

  span {
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.text.secondary};
    display: block;
    text-align: left;
  }
`;

export const ViewLink = styled.span`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.accent};
  margin-top: 0.5rem;
  cursor: pointer;
  text-align: left;
  display: block;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.bg.primary};
  padding: 2rem;
  border-radius: 8px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  z-index: 1001;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const ModalTitle = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const CertificateImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;