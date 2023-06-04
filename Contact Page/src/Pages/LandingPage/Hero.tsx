import React from "react";
import styled from "styled-components";
import img from "../../assets/contactUs.avif";
import fb from "../../assets/facebooklogo.png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/instagram-removebg-preview.png";
import link from "../../assets/linkedIn.webp";

const Hero: React.FC = () => {
  return (
    <Container image={img}>
      <Black>
        <Heading>
          <p>Connect with Our Team</p>
        </Heading>
        <WelcomeMessage>
          <p>
            Welcome aboard! Your questions and feedback matter to us. Don't
            hesitate to get in touch. We're here to listen and assist.
          </p>
        </WelcomeMessage>
        <SocialMedia>
          <Icon>
            <FB src={fb} />
            <Twit src={twitter} />
            <Insta src={insta} />
            <Link src={link} />
          </Icon>
        </SocialMedia>
      </Black>
    </Container>
  );
};

export default Hero;

const FB = styled.img`
  height: 30px;
`;
const Twit = styled.img`
  height: 30px;
`;
const Insta = styled.img`
  height: 40px;
`;
const Link = styled.img`
  height: 50px;
`;

const Icon = styled.div`
  display: flex;
  width: 300px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;

const SocialMedia = styled.div`
  margin-top: 50px;
`;

const Black = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div<{ image: string }>`
  height: 100vh;
  width: 100%;
  /* background-color: red; */
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffff;
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
