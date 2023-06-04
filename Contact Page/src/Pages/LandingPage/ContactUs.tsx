import React from "react";
import styled from "styled-components";
import {
  MdOutlinePhoneAndroid,
  MdOutlineMailOutline,
  MdLocationOn,
} from "react-icons/md";

const ContactUs: React.FC = () => {
  // const [fullName, setFullname] = React.useState("")
  // const [email, setEmail] = React.useState("")
  // const [message, setMessage] = React.useState("")
  return (
    <Container>
      <Wrapper>
        <GetInTouch>
          <Head>
            <p>Get In Touch 🤗</p>
          </Head>
          <Icon>
            <MdOutlinePhoneAndroid />
            <p>09029903813</p>
          </Icon>
          <Icon>
            <MdOutlineMailOutline />
            <p>lyfecareng@gmail.com</p>
          </Icon>
          <Icon>
            <MdLocationOn />
            <p>Lagos, Nigeria</p>
          </Icon>
        </GetInTouch>
        <Line></Line>
        <Form>
          <p>Ask Us Anything</p>
          <FullName placeholder="FullName"></FullName>
          <Email placeholder="Email"></Email>
          <Message placeholder="Message...."></Message>
          <Button2 cp="pointer" bg="#892be2b7">
            Submit
          </Button2>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ContactUs;

const Button2 = styled.div<{ bg: string; cp: string }>`
  height: 40px;
  width: 150px;
  background-color: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 350ms;
  cursor: ${(props) => props.cp};
  margin-top: 10px;

  :hover {
    transform: scale(0.95);
  }
`;

const FullName = styled.input`
  margin: 10px;
  width: 450px;
  height: 50px;
  border-radius: 3px;
  border: 0.7px solid silver;
  outline-color: #892be27b;
  padding-left: 10px;
`;
const Email = styled.input`
  margin: 10px;
  width: 450px;
  height: 50px;
  border-radius: 3px;
  border: 0.7px solid silver;
  outline-color: #892be27b;
  padding-left: 10px;
`;
const Message = styled.textarea`
  width: 450px;
  height: 80px;
  border-radius: 3px;
  border: 0.7px solid silver;
  outline-color: #892be27b;
  padding-left: 10px;
  resize: none;
  margin: 10px;
`;

const Head = styled.div`
  p {
    font-size: 28px;
    font-weight: bold;
    color: #363636;
    text-align: center;
  }
`;

const Line = styled.div`
  height: 100%;
  width: 2px;
  background-color: #892be2b7;
`;
const Icon = styled.div`
  font-size: 80px;
  color: #892be2b7;
  display: flex;
  margin-bottom: 50px;
  p {
    font-size: 20px;
    color: #363636;
  }
`;

const Form = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: #363636;
  }
`;

const GetInTouch = styled.div`
  height: 100%;
  width: 30%;
`;
const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  height: 80vh;
  width: 80%;
  display: flex;
  border: 1px solid #892be27a;
  border-radius: 20px;
`;
