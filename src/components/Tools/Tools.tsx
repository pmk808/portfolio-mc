// src/components/Tools/Tools.tsx
import { FC } from 'react';
import * as S from './styles';

const Tools: FC = () => {
  const technologies = {
    current: [
      "Go",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker",
      "Git",
      "NodeJS",
      "MongoDB",
      "Azure DevOps"
    ],
    previous: [
      "Laravel",
      "Django REST Framework",
      "VueJS",
      "MySQL",
      "Flutter",
      "Firebase",
      "Supabase"
    ],
    interest: [
      "Web3",
      "Machine Learning",
      "Blockchain",
      "AI",
      "Decentralized Systems"
    ]
  };

  return (
    <S.ToolsSection id="tools">
      <S.ContentContainer>
        <S.SectionTitle>Technologies & Tools</S.SectionTitle>
        <S.TechnologiesSection>
          <S.TechCategory>
            <h4>Currently Using</h4>
            <S.TechGrid>
              {technologies.current.map(tech => (
                <S.TechItem key={tech}>{tech}</S.TechItem>
              ))}
            </S.TechGrid>
          </S.TechCategory>

          <S.TechCategory>
            <h4>Previously Worked With</h4>
            <S.TechGrid>
              {technologies.previous.map(tech => (
                <S.TechItem key={tech}>{tech}</S.TechItem>
              ))}
            </S.TechGrid>
          </S.TechCategory>

          <S.TechCategory>
            <h4>Interested In</h4>
            <S.TechGrid>
              {technologies.interest.map(tech => (
                <S.TechItem key={tech}>{tech}</S.TechItem>
              ))}
            </S.TechGrid>
          </S.TechCategory>
        </S.TechnologiesSection>
      </S.ContentContainer>
    </S.ToolsSection>
  );
};

export default Tools;