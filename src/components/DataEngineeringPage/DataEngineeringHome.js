import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import data_video from "../../videos/data_video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './DataEngineeringHomeElements';


function DataEngineeringHome() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='data-Engineering-home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={data_video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Data Engineering <br/> Get All The Data You Need </HeroH1>
        <HeroP>
        Ariz specializes in transforming your business with complete data pipeline solutions to your machine learning models or to the stake holders for dashboarding.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to= 'datacollection'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default DataEngineeringHome;
