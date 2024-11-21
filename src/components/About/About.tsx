// src/components/About/About.tsx
import { FC } from 'react';
import * as S from './styles';
import { Certifications } from './Certifications';

const About: FC = () => {
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

          {/* Certifications */}
          <Certifications />
        </S.AboutGrid>
      </S.ContentContainer>
    </S.AboutSection>
  );
};

export default About;