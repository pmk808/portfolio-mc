// src/components/Projects/styles.ts
import styled from 'styled-components';

export const ProjectsSection = styled.section`
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
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ProjectCard = styled.article`
  background: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ProjectContent = styled.div`
  padding: 1rem;
`;

export const ProjectMainContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ThumbnailContainer = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const ProjectThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectInfo = styled.div`
  flex-grow: 1;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.text.secondary};
  display: flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const ProjectDate = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.secondary};
  display: block;
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.text.secondary};
  margin: 0;
  
  // Line clamping for description
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;