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
      description: 'Building the core systems that power web applications. Handling server logic, data flow, and making sure everything runs efficiently behind the scenes.',
      icon: Server
    },
    {
      title: 'API Development',
      description: 'Designing and building clear, well-documented endpoints that make it easy for different services to communicate.',
      icon: Code
    },
    {
      title: 'Frontend Development',
      description: 'Simple and functional frontend implementations to complement your backend services.',
      icon: Layout
    }
  ];

  return (
    <S.ServicesSection id="services">
      <S.ContentContainer>
        <S.SectionTitle>Services</S.SectionTitle>
        <S.SectionSubtitle>
          Helping bring your web projects to life, from server to screen
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