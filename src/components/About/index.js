import React from 'react';
import {
  AboutContainer,
  MissionSection,
  SectionTitle,
  SectionContent,
} from './styles';

const About = () => {
  return (
    <AboutContainer>
      <MissionSection>
        <SectionTitle>Our Mission</SectionTitle>
        <SectionContent>
          <p>
            The Center for Multifidelity Modeling of Nuclear Science (CMMNS) is dedicated to
            advancing the field of low-energy nuclear science through a combination of
            microscopic, ab initio methods and data-driven phenomenology. Our mission is to
            provide validated predictions and analyses of nuclear properties at scale, focusing
            on detailed nuclear structure and decay properties, nuclear level densities,
            reaction cross sections, and comprehensive studies of nuclear fission.
          </p>
          <p>
            We aim to integrate theoretical and experimental data into a multifidelity
            simulation framework. This collaborative effort involves a broad spectrum of
            low-energy nuclear physics practitioners and utilizes advanced computational and
            statistical paradigms. Our goal is to develop a comprehensive modeling pipeline
            for downstream applications that require accurate and reliable nuclear data.
          </p>
        </SectionContent>
      </MissionSection>

      {/* <TeamSection>
        <SectionTitle>Our Team</SectionTitle>
        <SectionContent>
          <TeamMember>
            <h3>Kyle Godbey</h3>
            <p>Lead PI</p>
            <p>Specializes in: Density functional theory, Fission</p>
            <p>Email: godbeyky@msu.edu</p>
          </TeamMember>
          <TeamMember>
            <h3>Filomena Nunes</h3>
            <p>Co-PI</p>
            <p>Specializes in: Reaction theory, Optical potentials</p>
            <p>Email: nunes@msu.edu</p>
          </TeamMember>
          <TeamMember>
            <h3>Carl Brune</h3>
            <p>Co-PI</p>
            <p>Specializes in: R-matrix theory, Light-ion reactions</p>
            <p>Email: brune@ohio.edu</p>
          </TeamMember>
          <TeamMember>
            <h3>Daniel Phillips</h3>
            <p>Co-PI</p>
            <p>Specializes in: Effective field theory, Bayesian methods</p>
            <p>Email: phillid1@ohio.edu</p>
          </TeamMember>
          <TeamMember>
            <h3>Dean Lee</h3>
            <p>Co-PI</p>
            <p>Specializes in: Lattice EFT, Ab initio calculations</p>
            <p>Email: leed@frib.msu.edu</p>
          </TeamMember>
          <TeamMember>
            <h3>Heiko Hergert</h3>
            <p>Co-PI</p>
            <p>Specializes in: IMSRG, No-Core Shell Model</p>
            <p>Email: hergert.3@osu.edu</p>
          </TeamMember>
          <TeamMember>
            <h3>Witek Nazarewicz</h3>
            <p>Co-PI</p>
            <p>Specializes in: Density functional theory, Fission</p>
            <p>Email: witek@frib.msu.edu</p>
          </TeamMember>
          <TeamMember>
            <h3>Artem Voinov</h3>
            <p>Co-PI</p>
            <p>Specializes in: Nuclear level densities, Experimental nuclear physics</p>
            <p>Email: voinov@ohio.edu</p>
          </TeamMember>
          <TeamMember>
            <h3>Alexandra Richard</h3>
            <p>Co-PI</p>
            <p>Specializes in: Experimental nuclear physics, Nuclear level densities</p>
            <p>Email: richarda@ohio.edu</p>
          </TeamMember>
        </SectionContent>
      </TeamSection> */}
    </AboutContainer>
  );
};

export default About;