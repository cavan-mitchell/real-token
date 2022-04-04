import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLeft,
  NavLogo,
  NavMiddle,
  NavMiddleItem,
  NavRight,
  SingUpBtn,
  NavBar,
} from "./HeaderStyled";
import MenuIcon from "@material-ui/icons/Menu";
import { animateScroll as scroll } from "react-scroll";

const Header = ({ toggle }) => {
  const [scrollnav, setScrollnav] = useState(false);

  const changNav = () => {
    if (window.scrollY >= 80) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  /*const longest = (str) => {
    let longword = "";
    const long = str.split(" ");
    for (let word of long) {
      if (word.length > longword.length) {
        longword = word;
      }
    }
    return longword;
  };

  console.log(longest("my namesdass is safras"));*/
  return (
    <Nav scrollnav={scrollnav}>
      <NavLeft>
        <NavLogo to="/" onClick={toggleHome}>
          Real Token
        </NavLogo>
        <NavBar onClick={toggle}>
          <MenuIcon />
        </NavBar>
        <NavMiddle>
          <NavMiddleItem
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="about"
          >
            About
          </NavMiddleItem>
          <NavMiddleItem
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="discorver"
          >
            Invest
          </NavMiddleItem>
          <NavMiddleItem
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="services"
          >
            White Paper
          </NavMiddleItem>
          <NavMiddleItem
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="singIn"
          >
            Sign in
          </NavMiddleItem>
        </NavMiddle>
      </NavLeft>

      <NavRight>
        <SingUpBtn to="/singin">Sign In</SingUpBtn>
      </NavRight>
    </Nav>
  );
};

export default Header;
