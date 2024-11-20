// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-outfit: 'Outfit', sans-serif;
    --max-width: 1200px;
    
    /* Base font sizes */
    --text-xs: 0.875rem;    // 14px
    --text-sm: 1rem;        // 16px
    --text-base: 1.125rem;  // 18px
    --text-lg: 1.25rem;     // 20px
    --text-xl: 1.5rem;      // 24px
    --text-2xl: 1.75rem;    // 28px
    --text-3xl: 2rem;       // 32px
    --text-4xl: 2.5rem;     // 40px
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px; // Base font size
  }

  body {
    font-family: var(--font-outfit);
    font-size: var(--text-base);  // Increased base font size to 1.125rem (18px)
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: var(--text-4xl);
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: var(--text-3xl);
    }
  }

  h2 {
    font-size: var(--text-3xl);
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: var(--text-2xl);
    }
  }

  h3 {
    font-size: var(--text-2xl);
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: var(--text-xl);
    }
  }

  h4 {
    font-size: var(--text-xl);
    font-weight: 500;
    
    @media (max-width: 768px) {
      font-size: var(--text-lg);
    }
  }

  p {
    font-size: var(--text-base);
    
    @media (max-width: 768px) {
      font-size: var(--text-sm);
    }
  }

  button {
    font-family: var(--font-outfit);
    font-size: var(--text-base);
  }

  small {
    font-size: var(--text-sm);
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
    font-size: var(--text-4xl);
    font-weight: 600;
    margin-bottom: 2rem;
    text-align: center;
    width: 100%;

    @media (max-width: 768px) {
      font-size: var(--text-3xl);
    }
  }

  .section-subtitle {
    font-size: var(--text-lg);
    color: ${({ theme }) => theme.text.secondary};
    text-align: center;
    max-width: 600px;
    margin: 0 auto 3rem;

    @media (max-width: 768px) {
      font-size: var(--text-base);
    }
  }
`;