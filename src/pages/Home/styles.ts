// src/pages/Home/styles.ts
import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > section {
    width: 100%;
    padding: 6rem 1rem; 
    
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.bg.secondary};
    }

    @media (max-width: 768px) {
      padding: 4rem 1rem;
    }
  }

  > div {  // For the "Coming Soon" sections
    width: 100%;
    padding: 6rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.text.secondary};
    background-color: ${({ theme }) => theme.bg.primary};
    
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.bg.secondary};
    }

    @media (max-width: 768px) {
      padding: 4rem 1rem;
    }
  }
`;