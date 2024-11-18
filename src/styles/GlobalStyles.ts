// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-primary: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --max-width: 1200px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-primary);
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 640px) {
      padding: 0 1.5rem;
    }

    @media (min-width: 1024px) {
      padding: 0 2rem;
    }
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    text-align: center;
    width: 100%;
  }

  .section-subtitle {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.text.secondary};
    text-align: center;
    max-width: 600px;
    margin: 0 auto 3rem;
  }
`;