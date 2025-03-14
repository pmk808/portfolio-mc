// src/pages/Home/Home.tsx
import { FC } from 'react';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Tools } from '@/components/Tools';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { HomeContainer } from './styles';

export const Home: FC = () => {
  return (
    <HomeContainer>
      <About />
      <Services />
      <Tools />
      <Experience />
      <Projects />
      <Contact />
    </HomeContainer>
  );
};