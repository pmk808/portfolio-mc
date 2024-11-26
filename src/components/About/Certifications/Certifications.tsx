// src/components/About/Certifications/Certifications.tsx
import { FC, useState } from 'react';
import * as S from './styles';
import { CategoryTitle } from '../styles';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  imageUrl: string; 
}

interface ModalState {
  isOpen: boolean;
  imageUrl: string;
  certName: string;
}

const certificationCategories = [
  {
    title: "Professional Certification",
    items: [
      {
        name: "Network Security ITS Certification",
        issuer: "Certiport",
        date: "2023",
        imageUrl: "/images/certificates/its.png" 
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
        imageUrl: "/images/certificates/tesda1.png" 
      }
    ]
  },
  {
    title: "Coursera Certifications",
    items: [
      {
        name: "Version Control",
        issuer: "Meta",
        date: "2023",
        imageUrl: "/images/certificates/meta1.png" 
      },
      {
        name: "Programming with JavaScript",
        issuer: "Meta",
        date: "2023",
        imageUrl: "/images/certificates/meta2.png" 
      },
      {
        name: "HTML and CSS in depth",
        issuer: "Meta",
        date: "2023",
        imageUrl: "/images/certificates/meta3.png" 
      },
      {
        name: "Introduction to Front-End Development",
        issuer: "Meta",
        date: "2023",
        imageUrl: "/images/certificates/meta4.png" 
      },
      {
        name: "Foundations: Data, Data, Everywhere",
        issuer: "Google",
        date: "2024",
        imageUrl: "/images/certificates/google1.png" 
      },
      {
        name: "Technical Support Fundamentals",
        issuer: "Google",
        date: "2024",
        imageUrl: "/images/certificates/google2.png" 
      }
    ]
  }
];

export const Certifications: FC = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    imageUrl: '',
    certName: ''
  });
  const [showAllCoursera, setShowAllCoursera] = useState(false);

  const openModal = (cert: Certification) => {
    setModalState({
      isOpen: true,
      imageUrl: cert.imageUrl,
      certName: cert.name
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      imageUrl: '',
      certName: ''
    });
  };

  const professionalCerts = certificationCategories[0];
  const localCerts = certificationCategories[1];
  const onlineCerts = certificationCategories[2];
  
  const visibleOnlineCerts = showAllCoursera 
    ? onlineCerts.items 
    : onlineCerts.items.slice(0, 3);

  return (
    <>
      <S.CertificationsSection>
        <CategoryTitle>Certifications</CategoryTitle>
        <S.CertificationsContainer>
          <S.TopCertifications>
            {/* Professional Certifications */}
            <S.CertificationCategory>
              <S.CategorySubtitle>{professionalCerts.title}</S.CategorySubtitle>
              <S.CertificationsList>
                {professionalCerts.items.map((cert) => (
                  <S.CertificationCard key={`${cert.name}-${cert.date}`}>
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                    <span>{cert.date}</span>
                    <S.ViewLink onClick={() => openModal(cert)}>
                      View Certificate
                    </S.ViewLink>
                  </S.CertificationCard>
                ))}
              </S.CertificationsList>
            </S.CertificationCategory>

            {/* Local Certifications */}
            <S.CertificationCategory>
              <S.CategorySubtitle>{localCerts.title}</S.CategorySubtitle>
              <S.CertificationsList>
                {localCerts.items.map((cert) => (
                  <S.CertificationCard key={`${cert.name}-${cert.date}`}>
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                    <span>{cert.date}</span>
                    <S.ViewLink onClick={() => openModal(cert)}>
                      View Certificate
                    </S.ViewLink>
                  </S.CertificationCard>
                ))}
              </S.CertificationsList>
            </S.CertificationCategory>
          </S.TopCertifications>

          {/* Online Certifications */}
          <S.OnlineCertifications>
            <S.CategorySubtitle>{onlineCerts.title}</S.CategorySubtitle>
            <div className="certs-grid">
              {visibleOnlineCerts.map((cert) => (
                <S.CertificationCard key={`${cert.name}-${cert.date}`}>
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                  <span>{cert.date}</span>
                  <S.ViewLink onClick={() => openModal(cert)}>
                    View Certificate
                  </S.ViewLink>
                </S.CertificationCard>
              ))}
            </div>
            <S.ShowMoreContainer>
              <S.ShowMoreLine />
              <S.ShowMoreButton onClick={() => setShowAllCoursera(!showAllCoursera)}>
                {showAllCoursera ? 'Show Less' : 'Show More'}
              </S.ShowMoreButton>
              <S.ShowMoreLine />
            </S.ShowMoreContainer>
          </S.OnlineCertifications>
        </S.CertificationsContainer>
      </S.CertificationsSection>

      {/* Modal */}
      {modalState.isOpen && (
        <S.Modal>
          <S.ModalOverlay onClick={closeModal} />
          <S.ModalContent>
            <S.ModalCloseButton onClick={closeModal}>&times;</S.ModalCloseButton>
            <S.ModalTitle>{modalState.certName}</S.ModalTitle>
            <S.CertificateImage 
              src={modalState.imageUrl} 
              alt={modalState.certName} 
            />
          </S.ModalContent>
        </S.Modal>
      )}
    </>
  );
};