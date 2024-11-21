// src/components/Tools/Tools.tsx
import { FC } from 'react';
import * as S from './styles';

interface TechnologyCategories {
  current: string[];
  previous: string[];
  interested: string[];
}

const Tools: FC = () => {
  const technologies: TechnologyCategories = {
    current: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ],
    previous: [
      "Angular",
      "Python",
      "MongoDB",
      "Redux",
      "Express"
    ],
    interested: [
      "Rust",
      "Go",
      "Web3",
      "Machine Learning"
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
              {technologies.interested.map(tech => (
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