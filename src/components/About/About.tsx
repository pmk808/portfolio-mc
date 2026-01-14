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
          Here's my{' '}
          <S.ResumeLink href="/resume_cabanes_latest_modified.pdf" download>
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
                    <S.TerminalTitle>bash</S.TerminalTitle>
                  </S.TerminalHeader>
                  <S.TerminalBody>
                    <S.TerminalLine>
                      <S.Prompt>~/McPhy&gt;</S.Prompt>
                      <span>whoami</span>
                    </S.TerminalLine>
                    <S.TerminalOutput>
                      {`{
  "name": "MC PHY CABANES",
  "title": "Web Developer",
  "focus": "Building client-focused solutions",
  "status": "Available for part-time positions & freelance projects"
}`}
                    </S.TerminalOutput>
                    <S.TerminalLine>
                      <S.Prompt>~/McPhy&gt;</S.Prompt>
                      <span>cat ./summary.txt</span>
                    </S.TerminalLine>
                    <S.TerminalOutput>
                      I'm a web developer who builds things for the web, handling everything from the user interface you see to the server-side logic that makes it all work.

                      My main goal is to build practical solutions that solve real problems for clients. I focus on understanding the "why" behind every project to ensure the final product delivers genuine value. I enjoy working across the full stack and am always learning new ways to bring ideas to life.

                      I'm currently looking for new opportunities to collaborate on interesting projects or join a team where I can contribute and grow.
                    </S.TerminalOutput>
                    <S.TerminalLine>
                      <S.Prompt>~/McPhy&gt;</S.Prompt>
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