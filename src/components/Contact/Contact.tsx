// src/components/Contact/Contact.tsx
import { FC } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import * as S from './styles';

const Contact: FC = () => {
  const ICON_SIZE = 20;
  return (
    <S.ContactSection id="contact">
      <S.ContentContainer>
        <S.SectionTitle>Contact</S.SectionTitle>
        <S.SectionSubtitle>
          Feel free to reach out through any of these platforms
        </S.SectionSubtitle>

        <S.ContactContent>
          <S.ContactInfo>
            <S.ContactText>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. <S.Highlight>Currently available for part-time positions 
              and freelance projects.</S.Highlight>
            </S.ContactText>
            
            <S.SocialLinksContainer>
              <S.ContactLink 
                href="mailto:cabanesmcphy123@gmail.com"
              >
                <Mail size={ICON_SIZE } />
                <span>cabanesmcphy123@gmail.com</span>
              </S.ContactLink>
              
              <S.ContactLink 
                href="https://github.com/pmk808" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={ICON_SIZE } />
                <span>github.com/pmk808</span>
              </S.ContactLink>
              
              <S.ContactLink 
                href="https://www.linkedin.com/in/mc-phy-cabanes-6b35b31b7/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={ICON_SIZE } />
                <span>linkedin.com/in/mcphy</span>
              </S.ContactLink>
            </S.SocialLinksContainer>
          </S.ContactInfo>
        </S.ContactContent>
      </S.ContentContainer>
    </S.ContactSection>
  );
};

export default Contact;