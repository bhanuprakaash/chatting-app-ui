import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Container>
      {/* Links to every UI component */}
      <Link to="/splash">Splash</Link>
      <Link to="/onboarding">Onboarding</Link>
      <Link to="/signin">SignIn</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/message">Message</Link>
      <Link to="/message1">Message1</Link>
      <Link to="/message2">Message2</Link>
    </Container>
  );
};
export default Navigation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  a {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    color: black;
    font-size: 15px;
    text-align: center;
    width: 120px;
    font-family: Inter;
    background-color: #a1a1a1;
  }
`;
