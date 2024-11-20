// src/pages/Home/Home.tsx
import { FC } from 'react';
import { About } from '@/components/About';
import { HomeContainer } from './styles';

export const Home: FC = () => {
  return (
    <HomeContainer>
      <section id="about me">
        <About />
      </section>
      <div id="services">Services Section (Coming Soon)</div>
      <div id="tools">Tools Section (Coming Soon)</div>
      <div id="experience">Experience Section (Coming Soon)</div>
      <div id="projects">Projects Section (Coming Soon)</div>
      <div id="contact">Contact Section (Coming Soon)</div>
    </HomeContainer>
  );
};