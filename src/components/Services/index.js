import React from 'react';
import { Link } from 'react-router-dom'; 
import Icon1 from '../../images/svg-1.png';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
      <Link to="/data-engineering" style={{ textDecoration: 'none' }}>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Data Engineering</ServicesH2>
          <ServicesP>
            We help reach you goals through data collection and Engineering techniques.
          </ServicesP>
        </ServicesCard>
        </Link>
        <Link to="/gen-ai" style={{ textDecoration: 'none' }}>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>GEN AI</ServicesH2>
          <ServicesP>
            We provide GEN AI solution of all types from bots to media.
          </ServicesP>
        </ServicesCard>
        </Link>
        <Link to="/architecture" style={{ textDecoration: 'none' }}>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Cloud Architecture</ServicesH2>
          <ServicesP>
            Be Cloud or On-prem, we architect solutions tailored to your business.
          </ServicesP>
        </ServicesCard>
        </Link>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
