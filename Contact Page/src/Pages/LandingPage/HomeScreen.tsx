import React from "react";
import { Hero } from ".";
import CardProps from "./CardProps";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Hero />
      <CardProps />
    </div>
  );
};

export default HomeScreen;
