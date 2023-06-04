import React from "react";
import { Hero } from ".";
import ReasonsToContactUS from "./ReasonsToContactUS";
import ContactUs from "./ContactUs";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Hero />
      <ReasonsToContactUS />
      <ContactUs />
    </div>
  );
};

export default HomeScreen;
