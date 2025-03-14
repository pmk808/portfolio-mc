// src/components/About/About.tsx
import { FC } from 'react';
import * as S from './styles';
import { Certifications } from './Certifications';
import { FileText } from 'lucide-react';

const About: FC = () => {
  return (
    <S.AboutSection id="about Me">
      <S.ContentContainer>
        <S.SectionTitle>About Me</S.SectionTitle>
        <S.SectionSubtitle>
          Here's my {' '}
          <S.ResumeLink href="/resume_cabanes.pdf" download>
            <span>resume</span>
            <FileText size={14} />
          </S.ResumeLink>
          {' '} if you're interested
        </S.SectionSubtitle>

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
                    <S.TerminalTitle>PowerShell</S.TerminalTitle>
                  </S.TerminalHeader>
                  <S.TerminalBody>
                    <S.TerminalLine>
                      <S.Prompt>PS C:\Users\Guest&gt;</S.Prompt>
                      <span>cd .\Developer\McPhy</span>
                    </S.TerminalLine>
                    <S.TerminalLine>
                      <S.Prompt>PS C:\Users\Guest\Developer\McPhy&gt;</S.Prompt>
                      <span>Get-Content .\identity.json</span>
                    </S.TerminalLine>
                    <S.TerminalOutput>
                      {`{
  "name": "MC PHY CABANES",
  "role": "Web Developer",
  "motto": "Mind over matter",
  "status": "Available for part-time positions and freelance projects"
}`}
                    </S.TerminalOutput>
                    <S.TerminalLine>
                      <S.Prompt>PS C:\Users\Guest\Developer\McPhy&gt;</S.Prompt>
                      <span>Get-Content .\about.txt</span>
                    </S.TerminalLine>
                    <S.TerminalOutput>
                      I do stuff on the web - building things that work behind the scenes and sometimes what you see on screen too.
                      Right now, I'm focusing on leveling up my backend skills, but I love learning and trying out different parts
                      of web development. Always excited to build new things and figure out better ways to make them work!
                      
                      Currently looking for new opportunities to collaborate on interesting projects or join a team where I can contribute my skills.
                    </S.TerminalOutput>
                    <S.TerminalLine>
                      <S.Prompt>PS C:\Users\Guest\Developer\McPhy&gt;</S.Prompt>
                      <S.BlinkingCursor>_</S.BlinkingCursor>
                    </S.TerminalLine>
                  </S.TerminalBody>
                </S.TerminalCard>
              </S.IntroHeader>
            </S.BioContent>
          </S.BiographySection>

          <Certifications />
        </S.AboutGrid>
      </S.ContentContainer>
    </S.AboutSection>
  );
};


export default About;