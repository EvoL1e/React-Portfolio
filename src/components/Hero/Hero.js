import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Knowledgeable in the MERN stack with a recent certificate in Full-Stack Web Development from the UCR Extension Bootcamp. I'm a fast learner with good work ethics that is excited to leverage my skills in web development in a fast-paced, quality driven team to build better experiences on the web for users and businesses alike.
        </SectionText>
        <Button > <a className="button" href="images/AbraamIbrahimResume.pdf" > Resume </a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;