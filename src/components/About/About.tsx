// src/components/About/About.tsx
import { FC } from 'react';
import * as S from './styles';
import { Certifications } from './Certifications';
import { Terminal, Code2, Quote } from 'lucide-react';

const About: FC = () => {
  return (
    <S.AboutSection id="about Me">
      <S.ContentContainer>
        <S.SectionTitle>About Me</S.SectionTitle>

        <S.AboutGrid>
          <S.BiographySection>
            <S.BioContent>
              <S.IntroHeader>
                <S.TerminalCard>
                  <S.TerminalHeader>
                    <S.TerminalDots>
                      <span></span>
                      <span></span>
                      <span></span>
                    </S.TerminalDots>
                    <S.TerminalTitle>Terminal</S.TerminalTitle>
                  </S.TerminalHeader>
                  <S.TerminalBody>
                    <S.TerminalLine>
                      <Terminal size={16} />
                      <span>MC PHY CABANES</span>
                    </S.TerminalLine>
                    <S.TerminalLine>
                      <Code2 size={16} />
                      <span>Backend Developer</span>
                    </S.TerminalLine>
                    <S.TerminalLine>
                      <Quote size={16} />
                      <span>Mind over matter</span>
                    </S.TerminalLine>
                  </S.TerminalBody>
                </S.TerminalCard>
              </S.IntroHeader>
              <S.BioText>
                I specialize in building backend systems and APIs, constantly expanding my knowledge
                in server-side technologies. Passionate about learning new tools and best practices,
                I'm dedicated to growing my expertise while delivering reliable solutions.
              </S.BioText>
            </S.BioContent>
          </S.BiographySection>

          <Certifications />
        </S.AboutGrid>
      </S.ContentContainer>
    </S.AboutSection>
  );
};

export default About;