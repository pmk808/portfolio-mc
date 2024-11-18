// src/pages/Home/styles.ts
import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 4rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;