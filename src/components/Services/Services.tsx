// src/components/Services/Services.tsx
import { FC } from 'react';
import { 
  Code, 
  Server, 
  Layout
} from 'lucide-react';
import * as S from './styles';

interface Service {
  title: string;
  description: string;
  icon: typeof Code;
}

const Services: FC = () => {
  const services: Service[] = [
    {
      title: 'Backend Development',
      description: 'Building robust backend systems, focusing on RESTful APIs, microservices, and PostgreSQL database design.',
      icon: Server
    },
    {
      title: 'API Development',
      description: 'Creating clean, documented APIs with efficient database modeling and secure authentication systems.',
      icon: Code
    },
    {
      title: 'Basic Frontend',
      description: 'Simple and functional frontend implementations to complement your backend services.',
      icon: Layout
    }
  ];

  return (
    <S.ServicesSection id="services">
      <S.ContentContainer>
        <S.SectionTitle>Services</S.SectionTitle>
        <S.SectionSubtitle>
          Backend specialist offering clean, efficient solutions
        </S.SectionSubtitle>

        <S.ServicesGrid>
          {services.map((service, index) => (
            <S.ServiceCard key={index}>
              <S.IconWrapper>
                <service.icon size={24} />
              </S.IconWrapper>
              <S.ServiceTitle>{service.title}</S.ServiceTitle>
              <S.ServiceDescription>
                {service.description}
              </S.ServiceDescription>
            </S.ServiceCard>
          ))}
        </S.ServicesGrid>
      </S.ContentContainer>
    </S.ServicesSection>
  );
};

export default Services;