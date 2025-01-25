// src/components/Blog/styles.ts
import styled from 'styled-components';

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
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.text.primary};
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 3rem;
  text-align: left;
`;

export const ConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  
  svg {
    margin-bottom: 1rem;
  }
`;

export const ConstructionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const ConstructionText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.secondary};
`;

export const Emphasis = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

export const PostsContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
`;

export const PostItem = styled.article`
  background: ${({ theme }) => theme.background.secondary};
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PostTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 0.5rem;
`;

export const PostDate = styled.time`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.secondary};
  display: block;
  margin-bottom: 1rem;
`;

export const PostContent = styled.p`
  color: ${({ theme }) => theme.text.primary};
  line-height: 1.6;
`;