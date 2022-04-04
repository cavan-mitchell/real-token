import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonWrap,
  Column2,
  ImgWrapper,
  Img,
} from "../ItemSection/ItemElement";

import { Button } from "../../components/ButtonElement";

const ItemSection = ({
  lightbg,
  id,
  imgstart,
  topLine,
  lighttext,
  headline,
  darktext,
  description,
  buttonLabel,
  img,
  alt,
  dark,
  primary,
}) => {
  return (
    <InfoContainer lightbg={lightbg} id={id}>
      <InfoWrapper>
        <InfoRow imgstart={imgstart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lighttext={lighttext}>{headline}</Heading>
              <Subtitle darktext={darktext}>{description}</Subtitle>
              <ButtonWrap>
                <Button
                  smooth={true}
                  duration={200}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  to="singIn"
                >
                  {buttonLabel}
                </Button>
              </ButtonWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default ItemSection;
