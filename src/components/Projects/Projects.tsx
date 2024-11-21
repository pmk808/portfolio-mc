// src/components/Projects/Projects.tsx
import { FC } from 'react';
import { Github } from 'lucide-react';
import ecommerceThumb from '@/assets/images/projects/ecommerce-thumb.png';
import taskAppThumb from '@/assets/images/projects/task-app-thumb.png';
import analyticsThumb from '@/assets/images/projects/analytics-thumb.png';
import portfolioThumb from '@/assets/images/projects/portfolio-thumb.png';
import * as S from './styles';

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  monthYear: string;
  githubUrl?: string;
}

const Projects: FC = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with React and Node.js. Features include user authentication, product management, and payment integration using Stripe.",
      thumbnail: ecommerceThumb, 
      monthYear: "Mar 2024",
      githubUrl: "https://github.com/yourusername/ecommerce-project"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application with team workspace functionality, notifications, and dynamic dashboards.",
      thumbnail: taskAppThumb, 
      monthYear: "Jan 2024",
      githubUrl: "https://github.com/yourusername/task-manager"
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive analytics dashboard featuring customizable reports, data visualization, and real-time metrics tracking.",
      thumbnail: analyticsThumb, 
      monthYear: "Nov 2023",
      githubUrl: "https://github.com/yourusername/analytics-dashboard"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React, TypeScript, and Styled Components, featuring responsive design and dark mode.",
      thumbnail: portfolioThumb,
      monthYear: "Sep 2023",
      githubUrl: "https://github.com/yourusername/portfolio"
    }
  ];

  return (
    <S.ProjectsSection id="projects">
      <S.ContentContainer>
        <S.SectionTitle>Projects</S.SectionTitle>
        
        <S.ProjectsGrid>
          {projects.map((project, index) => (
            <S.ProjectCard key={index}>
              <S.ProjectContent>
                <S.ProjectMainContent>
                  <S.ThumbnailContainer>
                    <S.ProjectThumbnail 
                      src={project.thumbnail} 
                      alt={`${project.title} preview`}
                    />
                  </S.ThumbnailContainer>
                  <S.ProjectInfo>
                    <S.ProjectHeader>
                      <S.ProjectTitle>{project.title}</S.ProjectTitle>
                      {project.githubUrl && (
                        <S.ProjectLink 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github size={18} />
                        </S.ProjectLink>
                      )}
                    </S.ProjectHeader>
                    <S.ProjectDate>{project.monthYear}</S.ProjectDate>
                    <S.ProjectDescription>
                      {project.description}
                    </S.ProjectDescription>
                  </S.ProjectInfo>
                </S.ProjectMainContent>
              </S.ProjectContent>
            </S.ProjectCard>
          ))}
        </S.ProjectsGrid>
      </S.ContentContainer>
    </S.ProjectsSection>
  );
};

export default Projects;