// src/components/Experience/Experience.tsx
import { FC } from 'react';
import * as S from './styles';

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

const Experience: FC = () => {
  const timelineData: TimelineItem[] = [
    {
      date: "2022 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Leading development of scalable web applications using React and Node.js. Managing team of 5 developers."
    },
    {
      date: "2020 - 2022",
      title: "Full Stack Developer",
      company: "Digital Innovations",
      description: "Developed and maintained multiple client projects using modern web technologies."
    },
    {
      date: "2018 - 2020",
      title: "Junior Developer",
      company: "StartUp Co",
      description: "Started career in web development, focusing on frontend technologies and basic backend development."
    }
  ];

  return (
    <S.ExperienceSection id="experience">
      <S.ContentContainer>
        <S.SectionTitle>Experience</S.SectionTitle>
        <S.TimelineSection>
          <S.Timeline>
            {timelineData.map((item, index) => (
              <S.TimelineItem key={index} isLeft={index % 2 === 0}>
                <S.TimelineContent isLeft={index % 2 === 0}>
                  <S.TimelineDate>{item.date}</S.TimelineDate>
                  <S.TimelineTitle>{item.title}</S.TimelineTitle>
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