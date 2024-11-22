// src/components/About/About.tsx
import { FC } from 'react';
import * as S from './styles';
import { Certifications } from './Certifications';
import profile from '@/assets/images/about/profile.jpg';

const About: FC = () => {
  return (
    <S.AboutSection id="about Me">
      <S.ContentContainer>
        <S.SectionTitle>About Me</S.SectionTitle>

        <S.AboutGrid>
          <S.BiographySection>
            <S.BioSection>
              <S.ImageContainer>
                <S.ProfileImage
                  src={profile}
                  alt="MC Phy Cabanes"
                />
              </S.ImageContainer>
              <S.BioContent>
                <S.NameTitle>MC PHY CABANES</S.NameTitle>
                <S.RoleLabel>Backend Developer</S.RoleLabel>
                <p>
                  I specialize in building backend systems and APIs, constantly expanding my knowledge
                  in server-side technologies. Passionate about learning new tools and best practices,
                  I'm dedicated to growing my expertise while delivering reliable solutions.
                </p>
              </S.BioContent>
            </S.BioSection>
          </S.BiographySection>

          <Certifications />
        </S.AboutGrid>
      </S.ContentContainer>
    </S.AboutSection>
  );
};

export default About;