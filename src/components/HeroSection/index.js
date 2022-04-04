import React, { useState } from "react";
import {
  HeroContiner,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroP,
  ArrowForwardIcon,
  KeyboardArrowRightIcon,
} from "../HeroSection/HeroStyle";

import { Button } from "../../components/ButtonElement";
import video from "../../videos/video.mp4";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContiner>
      <HeroBg>
        <VideoBg src={video} autoPlay muted loop type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Real Estate Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credits towards
          your NFT transaction.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary="true"
            fontbig="true"
            dark="true"
            to="singIn"
            big="true"
            smooth={true}
            duration={200}
            spy={true}
            exact="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started
            {hover ? (
              <ArrowForwardIcon fontbig="true" />
            ) : (
              <KeyboardArrowRightIcon fontbig="true" />
            )}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContiner>
  );
};

export default Hero;
