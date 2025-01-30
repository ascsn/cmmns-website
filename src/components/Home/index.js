import React from 'react';
import {
  HomeContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ContentSection,
  ContentTitle,
  ContentBody,
} from './styles';
import { HeroImage } from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroImage src="/hero.jpeg" alt="Nuclear Science Image" />
        <HeroTitle>Center for Multifidelity Modeling in Nuclear Science</HeroTitle>
        <HeroSubtitle>
          Advancing the frontiers of nuclear science through cutting-edge simulation and modeling.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <ContentTitle>Welcome to CMMNS</ContentTitle>
        <ContentBody>
          <p>
            The Center for Multifidelity Modeling in Nuclear Science (CMMNS) is a focused
            investigatory center dedicated to advancing the field of low-energy nuclear
            science. Our mission is to provide validated predictions and analyses of nuclear
            properties at scale by combining microscopic, ab initio methods with data-driven
            phenomenology.
          </p>
          <p>
            We focus on detailed nuclear structure and decay properties, nuclear level
            densities, reaction cross sections, and comprehensive studies of nuclear fission.
            By integrating theoretical and experimental data into a multifidelity simulation
            framework, we aim to enhance the accuracy and reliability of our models.
          </p>
          <p>
            Our collaborative efforts involve a diverse spectrum of low-energy nuclear physics
            practitioners. We adopt advanced computational and statistical paradigms to
            develop a comprehensive modeling pipeline for downstream applications requiring
            nuclear data.
          </p>
        </ContentBody>
      </ContentSection>
    </HomeContainer>
  );
};

export default Home;