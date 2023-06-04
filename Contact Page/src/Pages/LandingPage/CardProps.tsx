import React from "react";
import styled from "styled-components";

interface props {
  heading: string;
  text: string;
}

const CardProps: React.FC<props> = ({ heading, text }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <p>{text}</p>
    </Container>
  );
};

export default CardProps;

const Container = styled.div`
  height: 250px;
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 5px;
`;

const Heading = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #8a2be2;
  text-align: center;
`;
