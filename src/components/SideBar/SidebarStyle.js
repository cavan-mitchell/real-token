import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import CloseIcons from "@material-ui/icons/Close";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  display: grid;
  z-index: 999;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 350ms ease-in;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled(CloseIcons)`
  font-size: 34px !important;
  color: #fff !important;
  position: absolute;
  top: 50px;
  cursor: pointer;
  right: 50px;
`;

export const SideBarMiddle = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  margin-top: 70px;

  @media screen and (max-width: 789px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarMiddleItem = styled(LinkS)`
  padding: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: capitalize;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  place-self: center;

  &:hover {
    color: #01bf71;
    border-radius: 24px;
  }
`;

export const SingUpBtn = styled(LinkR)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  background-color: #01bf71;
  padding: 16px;
  border-radius: 24px;
  width: 200px;
  text-align: center;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  place-self: center;
  position: absolute;
  bottom: 100px;

  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: #fff;
    color: #01bf71;
  }
`;
