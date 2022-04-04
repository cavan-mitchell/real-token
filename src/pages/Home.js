import React, { useState } from "react";
import Header from "../components/Header";
import HeroBg from "../components/HeroSection/index";
import Sidebar from "../components/SideBar";
import ItemSection from "../components/ItemSection/index";
import {
  HomeObjOne,
  HomeObjThree,
  HomeObjTwo,
} from "../components/ItemSection/Data";
import Services from "../components/serviceSection";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroBg />
      <ItemSection {...HomeObjOne} />
      <ItemSection {...HomeObjTwo} />
      <Services />
      <ItemSection {...HomeObjThree} />
    </>
  );
};

export default Home;
