import React from "react";
import { styled } from "styled-components";
import { CardProps } from ".";

const ReasonsToContactUS: React.FC = () => {
  return (
    <Container>
      <Heading>
        <p>Why you should Contact Us?</p>
      </Heading>
      <Wrapper>
        <CardProps
          heading="Timely Updates"
          text="By staying in touch, you'll receive timely updates on the latest developments, product releases, keeping you informed and ahead of the curve."
        />
        <CardProps
          heading="Enhanced Customer Experience"
          text=" We prioritize your satisfaction and strive to provide an exceptional customer experience. Contacting us allows us to better serve you and meet your expectations."
        />
        <CardProps
          heading="Peace of Mind"
          text="By reaching out to us, you can have peace of mind knowing that you have a dedicated team ready to support you, answer your questions, and address any concerns you may have."
        />
      </Wrapper>
    </Container>
  );
};

export default ReasonsToContactUS;

const Heading = styled.div`
  p {
    font-size: 40px;
    font-weight: 800;
    color: #892be2dc;
  }
`;
const Wrapper = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
