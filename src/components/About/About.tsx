// src/components/About/About.tsx
import { FC } from 'react';
import * as S from './styles';
import { Timeline } from './Timeline';
import { Certifications } from './Certifications';

const About: FC = () => {
  const technologies = {
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
    <S.AboutSection id="about Me">
       <S.ContentContainer>
      <S.SectionTitle>About Me</S.SectionTitle>
      
      <S.AboutGrid>
        {/* Biography */}
        <S.BiographySection>
          <S.BioContent>
            <p>
              I'm a Full Stack Developer passionate about building scalable web applications
              and exploring new technologies. With a strong foundation in both frontend and
              backend development, I focus on creating efficient, maintainable solutions.
            </p>
            <p>
              Currently, I specialize in TypeScript, React, and Node.js, while continuously
              expanding my knowledge in cloud technologies and software architecture.
            </p>
          </S.BioContent>
        </S.BiographySection>

        {/* Technologies */}
        <S.TechnologiesSection>
          <S.CategoryTitle>Technologies & Tools</S.CategoryTitle>
          
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

        {/* Certifications */}
        <Certifications />

        {/* Work Timeline */}
        <Timeline />
        </S.AboutGrid>
        </S.ContentContainer>
    </S.AboutSection>
  );
};

export default About;