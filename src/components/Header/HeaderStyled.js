import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: ${({ scrollnav }) =>
    scrollnav ? "#010606" : "transparent"};
  color: #fff;
  height: 80px;
  position: sticky;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  margin-top: -80px;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease-in-out;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  align-items: center;
`;

export const NavLogo = styled(LinkR)`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  justify-self: flex-start;
  position: absolute;
  top: 24px;
  left: 0;

  color: #fff;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export const NavMiddle = styled.ul`
  display: flex;
  list-style-type: none;
  white-space: nowrap;
  align-items: center;
  margin-right: -22px;

  @media screen and (max-width: 789px) {
    display: none;
  }
`;

export const NavMiddleItem = styled(LinkS)`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 800;
  text-transform: capitalize;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  color: #fff;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    color: #01bf71;
  }
`;

export const NavRight = styled.div``;
export const SingUpBtn = styled(LinkR)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  background-color: #01bf71;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.2s ease-in-out;
  font-weight: 800;

  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: #fff;
    color: #01bf71;
  }

  @media screen and (max-width: 789px) {
    display: none;
  } ;
`;

export const NavBar = styled.div`
  cursor: pointer;
  font-size: 34px;
  display: none;

  @media screen and (max-width: 789px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  } ;
`;
