import styled from "styled-components";

export const ServiceContiner = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1000px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  } ;
`;

export const ServiceH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServiceCart = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  transition: all 0.35s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    transition: all 350ms ease-in-out;
    cursor: pointer;
  }
`;
export const ServiceIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ServicesH2 = styled.h1`
  font-size: 1rem;
  margin-bottom: 10px;
  @media screen and (max-width: 786px) {
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
