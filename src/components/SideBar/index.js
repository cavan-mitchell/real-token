import React from "react";

import {
  SidebarContainer,
  CloseIcon,
  SideBarMiddle,
  SideBarMiddleItem,
  SingUpBtn,
} from "../SideBar/SidebarStyle";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <SideBarMiddle>
        <SideBarMiddleItem
          onClick={toggle}
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          About
        </SideBarMiddleItem>
        <SideBarMiddleItem
          onClick={toggle}
          to="discorver"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Invest
        </SideBarMiddleItem>
        <SideBarMiddleItem
          onClick={toggle}
          to="services"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Services
        </SideBarMiddleItem>
        <SideBarMiddleItem
          onClick={toggle}
          to="singIn"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          sign in
        </SideBarMiddleItem>
      </SideBarMiddle>
      <SingUpBtn to="/singin">Sign In</SingUpBtn>
    </SidebarContainer>
  );
};

export default Sidebar;
