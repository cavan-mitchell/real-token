import React from "react";

import {
  ServiceContiner,
  ServiceH1,
  ServicesWrapper,
  ServiceCart,
  ServiceIcon,
  ServicesH2,
  ServicesP,
} from "../../components/serviceSection/servicesElement";
import { Data } from "./Data";

const Services = () => {
  return (
    <ServiceContiner id="services">
      <ServiceH1>Our Services</ServiceH1>
      <ServicesWrapper>
        {Data.map((item, index) => {
          return (
            <ServiceCart key={index}>
              <ServiceIcon src={item.img} />
              <ServicesH2>{item.title}</ServicesH2>
              <ServicesP>{item.desc}</ServicesP>
            </ServiceCart>
          );
        })}
      </ServicesWrapper>
    </ServiceContiner>
  );
};

export default Services;
