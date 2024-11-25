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
                      <span>Web Developer</span>
                    </S.TerminalLine>
                    <S.TerminalLine>
                      <Quote size={16} />
                      <span>Mind over matter</span>
                    </S.TerminalLine>
                  </S.TerminalBody>
                </S.TerminalCard>
              </S.IntroHeader>
              <S.BioText>
                I do stuff on the web - building things that work behind the scenes and sometimes what you see on screen too.
                Right now, I'm focusing on leveling up my backend skills, but I love learning and trying out different parts
                of web development. Always excited to build new things and figure out better ways to make them work!
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