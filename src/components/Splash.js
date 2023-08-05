import React from "react";
import styled from "styled-components";

const Splash = () => {
  return (
    <Container>
      <Logo>
        <img src="./images/MOkx logo 1.png" alt="Mokx-logo" />
      </Logo>
      <Welcome>
        <p>Back to Vedas 🕉️</p>
      </Welcome>
    </Container>
  );
};

export default Splash;

// Container styles for the whole Splash component
const Container = styled.div`
  position: relative;
  height: 100vh;
`;

// Logo styles
const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Welcome styles
const Welcome = styled.div`
  position: absolute;
  top: 80%;
  left: 50.5%;
  transform: translateX(-50%);
  p {
    color: #69235b;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  //media query fo smaller screens
  @media (max-width: 342px) {
    p {
      font-size: 15px;
    }
  }
  @media (max-width: 280px) {
    p {
      font-size: 12px;
    }
  }
`;
