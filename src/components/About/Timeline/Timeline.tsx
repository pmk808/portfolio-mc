// src/components/About/Timeline/Timeline.tsx
import { FC } from 'react';
import * as S from './styles';
import { CategoryTitle } from '../styles';

interface TimelineEntry {
  date: string;
  title: string;
  company: string;
  description: string;
}

const workExperience: TimelineEntry[] = [
  {
    date: "2023 - Present",
    title: "Senior Full Stack Developer",
    company: "Current Company",
    description: "Leading development of cloud-native applications using React, Node.js, and AWS."
  },
  {
    date: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Previous Company",
    description: "Developed and maintained multiple web applications using modern technologies."
  },
  {
    date: "2019 - 2021",
    title: "Frontend Developer",
    company: "Past Company",
    description: "Specialized in building responsive user interfaces and implementing UI/UX designs."
  }
  // Add more entries as needed
];

export const Timeline: FC = () => {
  return (
    <S.TimelineSection>
      <CategoryTitle>Work Experience</CategoryTitle>
      <S.Timeline>
        {workExperience.map((experience, index) => (
          <S.TimelineItem 
            key={`${experience.company}-${experience.date}`}
            isLeft={index % 2 === 0}
          >
            <S.TimelineContent isLeft={index % 2 === 0}>
              <S.TimelineDate>{experience.date}</S.TimelineDate>
              <S.TimelineTitle>{experience.title}</S.TimelineTitle>
              <S.TimelineCompany>{experience.company}</S.TimelineCompany>
              <S.TimelineDescription>{experience.description}</S.TimelineDescription>
            </S.TimelineContent>
          </S.TimelineItem>
        ))}
      </S.Timeline>
    </S.TimelineSection>
  );
};