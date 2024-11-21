// src/components/Blog/styles.ts
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const BlogSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 1rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 3rem;
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BlogCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px ${({ theme }) => `${theme.border}40`};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Topic = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text.secondary};
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  line-height: 1.4;
`;

export const Overview = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
`;

export const KeyPointsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.bg.primary};
  border-radius: 8px;
`;

export const KeyPoint = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.secondary};

  span {
    color: ${({ theme }) => theme.accent};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Tag = styled.span<{ color?: string }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  background-color: ${({ color, theme }) => 
    color ? `${color}15` : theme.bg.primary};
  color: ${({ color, theme }) => 
    color || theme.text.secondary};
  border: 1px solid ${({ color, theme }) => 
    color ? `${color}30` : theme.border};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ReadMore = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const LoadMoreButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: center;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: white;
  }
`;

export const LoadingSpinner = styled.div`
  margin: 2rem auto;
  width: 2rem;
  height: 2rem;
  border: 2px solid ${({ theme }) => theme.border};
  border-top-color: ${({ theme }) => theme.accent};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  padding: 2rem;
`;

export const EmptyState = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  padding: 2rem;
`;