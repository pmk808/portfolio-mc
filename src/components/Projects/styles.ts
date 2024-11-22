// src/components/Projects/styles.ts
import styled from 'styled-components';

export const ProjectsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px; // Match other sections
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

export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProjectCard = styled.article`
  width: 100%;
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
  padding: 1.75rem;
`;

export const ProjectMainContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ThumbnailContainer = styled.div`
  width: 200px;  
  height: 140px; 
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 480px) {
    width: 160px;  
    height: 100px; 
  }
`;

export const ProjectThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  // object-fit: contain;  // Use this if you want to ensure the whole image is visible
  background-color: ${({ theme }) => theme.bg.primary}; // Add background color for 'contain' mode
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
  font-size: 1.1rem;
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
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text.secondary};
  display: block;
  margin-bottom: 0.75rem;
`;

export const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
  margin: 0;
  
  // Line clamping for description
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;