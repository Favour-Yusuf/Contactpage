import React from "react";
import styled from "styled-components";

const Hero: React.FC = () => {
  return (
    <Container>
      <Black></Black>
      <Heading>
        <p>Connect with Our Team</p>
      </Heading>
      <WelcomeMessage>
        <p>
          Welcome aboard! Your questions and feedback matter to us. Don't
          hesitate to get in touch. We're here to listen and assist.
        </p>
      </WelcomeMessage>
    </Container>
  );
};

export default Hero;

const Black = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0e0e0e76;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: red; */
  background-image: url("/assets/contactUs.avif");
  background-size: cover;
  position: relative;
  background-attachment: fixed;
`;

const Heading = styled.div`
  p {
    font-size: 40px;
    font-weight: 700;
  }
`;
const WelcomeMessage = styled.div`
  width: 800px;
  text-align: center;
  p {
    font-size: 20px;
    font-weight: 400;
  }
`;
