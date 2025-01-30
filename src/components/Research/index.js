import React from 'react';
import {
  ResearchContainer,
  SectionTitle,
  SectionContent,
  Subsection,
  SubsectionTitle,
  SubsectionContent,
} from './styles';

const Research = () => {
  return (
    <ResearchContainer>
      <SectionTitle>Our Research</SectionTitle>
      <SectionContent>
        <p>
          The Center for Multifidelity Modeling in Nuclear Science (CMMNS) focuses on
          integrating microscopic, ab initio methods with data-driven phenomenology to deliver
          validated predictions of nuclear properties at scale. Our research is organized into
          several key areas:
        </p>

        <Subsection>
          <SubsectionTitle>Low Energy Reactions on Light Nuclei</SubsectionTitle>
          <SubsectionContent>
            <p>
              We utilize R-matrix theory to describe problems involving two-particle scattering
              and reactions. This includes partitioning space based on two-particle relative
              coordinates and parameterizing solutions inside the channel radius.
            </p>
            <p>
              <strong>Phenomenological R-matrix:</strong> Capable of accurately reproducing large
              sets of scattering and reaction data with a modest number of free parameters.
              Applications include extracting nuclear structure information, evaluating large
              multi-channel data sets, and predicting unmeasured observables.
            </p>
          </SubsectionContent>
        </Subsection>

        <Subsection>
          <SubsectionTitle>Ab Initio Structure, Reactions, and Decays</SubsectionTitle>
          <SubsectionContent>
            <p>
              Our team enhances uncertainty quantification for reaction, decay, and fission
              observables by incorporating constraints from ab initio nuclear structure and
              reaction calculations. We use nucleons as active degrees of freedom and describe
              their interactions through forces rooted in Chiral Effective Field Theory (EFT).
            </p>
            <p>
              <strong>Methods:</strong> Lattice EFT and In-Medium Similarity Renormalization
              Group (IMSRG) to describe nuclear structure, reactions, and thermodynamics.
            </p>
          </SubsectionContent>
        </Subsection>

        <Subsection>
          <SubsectionTitle>Nuclear Level Densities</SubsectionTitle>
          <SubsectionContent>
            <p>
              We study nuclear level densities (NLDs) as fundamental properties of both stable
              and rare isotopes. NLDs are crucial for Hauser-Feshbach calculations of reaction
              cross sections, particularly for neutron-induced reactions.
            </p>
            <p>
              <strong>Challenges:</strong> Parameterizations of NLDs are based on models like the
              Fermi-gas and Gilbert & Cameron models. We aim to refine these models using
              Bayesian Model Mixing (BMM) and Bayesian Model Combination.
            </p>
          </SubsectionContent>
        </Subsection>

        <Subsection>
          <SubsectionTitle>Fission</SubsectionTitle>
          <SubsectionContent>
            <p>
              Our research on fission aims to perform consistent microscopic calculations of
              the fission process, from the formation of the compound nucleus to the emission
              of prompt and delayed particles.
            </p>
            <p>
              <strong>Microscopic Modeling of Scission Dynamics:</strong> We develop
              finite-temperature simulation frameworks for the fission of excited nuclei,
              providing initial conditions for subsequent statistical models.
            </p>
            <p>
              <strong>Quantified Optical Potentials:</strong> We focus on integrating fission
              observables into the corpus of evidence used in Bayesian calibration of the
              optical potential.
            </p>
          </SubsectionContent>
        </Subsection>
      </SectionContent>
    </ResearchContainer>
  );
};

export default Research;