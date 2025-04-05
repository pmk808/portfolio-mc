// src/components/Experience/Experience.tsx
import { FC } from 'react';
import * as S from './styles';

interface TimelineItem {
  date: string;
  title: string;
  type: string;
  company: string;
  description: string;
}

const Experience: FC = () => {
  const timelineData: TimelineItem[] = [
    {
      date: "Feb 2024 - Present",
      title: "Web Developer",
      type: "Freelance (Part-time)",
      company: "Independent",
      description: "Developing RESTful APIs and microservices using Go and PostgreSQL. Handling server-side integration and database architecture, with occasional React implementation for simple UIs when needed."
    },
    {
      date: "Jun 2024 - Present",
      title: "Web Developer",
      type: "Full-time",
      company: "City Government of Davao, EBSU Office",
      description: "Helping with the revamp of eScholar App, implementing backend solutions with Node.js, MongoDB, and Azure Functions, while maintaining the frontend with vanilla JavaScript."
    },
    {
      date: "Jun 2022 - Nov 2022",
      title: "Market Researcher",
      type: "Contract",
      company: "Dynata",
      description: "Conducted telephone interviews to collect market research data, contributing to comprehensive market insights and analysis."
    },
    {
      date: "Aug 2020 - Jan 2024",
      title: "ESL Tutor",
      type: "Contract",
      company: "Rarejob Online Tutorial",
      description: "Provided English language instruction to Japanese students of all ages, building strong rapport and facilitating effective learning environments."
    }
  ];

  return (
    <S.ExperienceSection id="experience">
      <S.ContentContainer>
        <S.SectionTitle>Experience</S.SectionTitle>
        <S.SectionSubtitle>
        From teaching English to market research, I've explored various roles before finding my passion in backend development
        </S.SectionSubtitle>
        <S.TimelineSection>
          <S.Timeline>
            {timelineData.map((item, index) => (
              <S.TimelineItem key={index} isLeft={index % 2 === 0}>
                <S.TimelineContent isLeft={index % 2 === 0}>
                  <S.TimelineDate>{item.date}</S.TimelineDate>
                  <S.TitleContainer>
                    <S.TimelineTitle>{item.title}</S.TimelineTitle>
                    <S.TimelineType>{item.type}</S.TimelineType>
                  </S.TitleContainer>
                  <S.TimelineCompany>{item.company}</S.TimelineCompany>
                  <S.TimelineDescription>{item.description}</S.TimelineDescription>
                </S.TimelineContent>
              </S.TimelineItem>
            ))}
          </S.Timeline>
        </S.TimelineSection>
      </S.ContentContainer>
    </S.ExperienceSection>
  );
};

export default Experience;