// src/components/Projects/Projects.tsx
import { FC, useState } from 'react';
import { Github } from 'lucide-react';
import btr from '@/assets/images/projects/btr.png';
import bible from '@/assets/images/projects/bible-bliss.png';
import hiphop from '@/assets/images/projects/pulse.png';
import medcare from '@/assets/images/projects/med_care.png';
import skynet from '@/assets/images/projects/skynet.png';
import cce from '@/assets/images/projects/cce.png';
import pos from '@/assets/images/projects/pos.png';
import diwang from '@/assets/images/projects/diwang.png';
import chatbot from '@/assets/images/projects/chatbot.png';
import * as S from './styles';

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  monthYear: string;
  githubUrl?: string;
}

const Projects: FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects: Project[] = [
    {
      title: "BTr Status Tagging System",
      description: "The BTr Status Tagging System is a simple web-based application developed for the Bureau of the Treasury, RXI, as part of my internship. It features basic data visualization using ChartJS and is used to monitor and manage the status of incoming and outgoing documents.",
      thumbnail: btr,
      monthYear: "May 29, 2024",
      githubUrl: "https://github.com/pmk808/btr-tagging-system"
    },
    {
      title: "Bible Bliss",
      description: "Bible Bliss is a Laravel-powered web application that serves as a Bible content tool with dynamic content delivery, focusing on retrieving and displaying Bible verses from an external API based on user searches and daily verse updates.",
      thumbnail: bible,
      monthYear: "May 23, 2022",
      githubUrl: "https://github.com/pmk808/bible-bliss"
    },
    {
      title: "Hip-Hop Pulse",
      description: "Hip-Hop Pulse is a passion project designed as a simple blog to celebrate and explore the world of hip-hop. Covering its rich history, the trailblazers who shaped the genre, legendary figures, and the evolution of hip-hop today, this blog aims to highlight hip-hop as more than just music—it's a cultural phenomenon. As a hip-hop fan, this project serves as a space to spread awareness and appreciation for the art form and its influence.",
      thumbnail: hiphop,
      monthYear: "April 5, 2024",
      githubUrl: "https://github.com/pmk808/hiphop-pulse"
    },
    {
      title: "MedCare",
      description: "MedCare is a desktop application designed for a medical facility to streamline the storage of patient data and appointments. It implements a stack data structure using the Last-In-First-Out (LIFO) method, ensuring that the latest appointment data is displayed on top of the table view, enabling efficient prioritization.",
      thumbnail: medcare,
      monthYear: "May 5, 2024",
      githubUrl: "https://github.com/pmk808/medcare"
    },
    {
      title: "SkyNet",
      description: "SkyNet is a desktop application developed in VB.NET designed to assist freelancers and remote workers in finding and managing co-working spaces. Born out of the increased demand for flexible work environments during the pandemic, this simple application enables users to clock in and out, and calculates daily, weekly, and monthly payments based on their usage.",
      thumbnail: skynet,
      monthYear: "February 10, 2023",
      githubUrl: "https://github.com/pmk808/Co-Working-Space-Attendance-System"
    },
    {
      title: "CCEtracker",
      description: "CCEtracker is a web-based document management system developed as a capstone project and a requirement for completing my degree. Designed for the Office of the Dean in the College of Computing Education, it enhances data visualization and streamlines document handling. The system allows users to track and manage deliverables efficiently, while administrators can set deadlines, approve documents, and manage templates. Developed using the Agile methodology, CCEtracker addresses challenges in manual tracking, significantly improving academic document management.",
      thumbnail: cce,
      monthYear: "October 27, 2023",
      githubUrl: "https://github.com/pmk808/ccetracker-system"
    },
    {
      title: "POS System",
      description: "POS and Inventory management system for Acaylar Lumber Trading using Laravel, Bootstrap, and MySQL. The system manages sales, inventory, and customer data with an efficient, user-friendly interface.",
      thumbnail: pos,
      monthYear: "October 11, 2022",
      githubUrl: "https://github.com/pmk808/POS_and_Inventory_System"
    },
    {
      title: "Diwang App",
      description: "Diwang, meaning 'Celebration' in Filipino, is a mobile application developed in Flutter to connect event organizers with potential clients. With the surge in events post-pandemic, Diwang aims to simplify the process of finding and booking services like catering, decorations, drinks, and other essential event needs, making it easier for organizers and clients to collaborate.",
      thumbnail: diwang,
      monthYear: "November 23, 2022",
      githubUrl: "https://github.com/pmk808/event_planner"
    },
    {
      title: "ChatBot",
      description: "Developed a Django-based chatbot application called 'Chat with AI' using a free Gemini 1.5 Flash API. The project features a humorous background themed around Allen Iverson.",
      thumbnail: chatbot,
      monthYear: "May 25, 2024",
      githubUrl: "https://github.com/pmk808/gptclone"
    }
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <S.ProjectsSection id="projects">
      <S.ContentContainer>
        <S.SectionTitle>Projects</S.SectionTitle>
        <S.SectionSubtitle>
          A collection of web, mobile, and desktop applications I've built throughout my journey
        </S.SectionSubtitle>
        <S.ProjectsGrid>
          {visibleProjects.map((project, index) => (
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

        {projects.length > 6 && (
          <S.ShowMoreContainer>
            <S.ShowMoreLine />
            <S.ShowMoreButton onClick={() => setShowAllProjects(!showAllProjects)}>
              {showAllProjects ? 'Show Less' : 'Show More'}
            </S.ShowMoreButton>
            <S.ShowMoreLine />
          </S.ShowMoreContainer>
        )}
        <S.ProjectNote>
          Additional backend projects and other work can be found on my GitHub profile.
        </S.ProjectNote>
      </S.ContentContainer>
    </S.ProjectsSection>
  );
};

export default Projects;