// src/components/About/Certifications/Certifications.tsx
import { FC } from 'react';
import * as S from './styles';
import { CategoryTitle } from '../styles';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string; 
}

interface CertificationCategory {
  title: string;
  items: Certification[];
}

const certificationCategories: CertificationCategory[] = [
  {
    title: "Professional Certification",
    items: [
      {
        name: "Network Security ITS Certification",
        issuer: "Certiport",
        date: "2023",
        // link: "your-credential-link" // Optional
      }
    ]
  },
  {
    title: "Local Certification",
    items: [
      {
        name: "Computer System Servicing NC II",
        issuer: "TESDA",
        date: "2023",
      }
    ]
  },
  {
    title: "Online Certifications",
    items: [
      {
        name: "Meta Front-End Developer",
        issuer: "Meta",
        date: "2023"
      },
      {
        name: "Meta Back-End Developer",
        issuer: "Meta",
        date: "2023"
      },
      {
        name: "Google UX Design",
        issuer: "Google",
        date: "2023"
      },
      // Add other Meta and Google certifications
    ]
  }
];

export const Certifications: FC = () => {
  return (
    <S.CertificationsSection>
      <CategoryTitle>Certifications</CategoryTitle>
      <S.CertificationsContainer>
        {certificationCategories.map((category) => (
          <S.CertificationCategory key={category.title}>
            <S.CategorySubtitle>{category.title}</S.CategorySubtitle>
            <S.CertificationsList>
              {category.items.map((cert) => (
                <S.CertificationCard key={`${cert.name}-${cert.date}`}>
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                  <span>{cert.date}</span>
                </S.CertificationCard>
              ))}
            </S.CertificationsList>
          </S.CertificationCategory>
        ))}
      </S.CertificationsContainer>
    </S.CertificationsSection>
  );
};