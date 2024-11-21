// src/components/Services/Services.tsx
import { FC } from 'react';
import { 
  Code, 
  LayoutGrid, 
  Database, 
  Cloud, 
  Smartphone, 
  Terminal 
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
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using modern frameworks like React, with a focus on performance and user experience.',
      icon: LayoutGrid
    },
    {
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs using Node.js, Express, and other modern backend technologies.',
      icon: Terminal
    },
    {
      title: 'Database Design',
      description: 'Designing and implementing efficient database schemas and solutions using SQL and NoSQL databases.',
      icon: Database
    },
    {
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms like AWS, with expertise in cloud architecture and DevOps practices.',
      icon: Cloud
    },
    {
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications using React Native and modern mobile development tools.',
      icon: Smartphone
    },
    {
      title: 'Custom Solutions',
      description: 'Developing tailored software solutions to meet specific business needs and requirements.',
      icon: Code
    }
  ];

  return (
    <S.ServicesSection id="services">
      <S.ContentContainer>
        <S.SectionTitle>Services</S.SectionTitle>
        <S.SectionSubtitle>
          Specialized in full-stack development and cloud solutions
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