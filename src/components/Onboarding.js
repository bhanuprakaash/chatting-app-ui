import React from "react";
import styled from "styled-components";

const Onboarding = () => {
  return (
    <Container>
      <LoginContainer>
        <Logo>
          <img
            src="./images/cartoon-image-of-indian-girl-doing-namaste 1.png"
            alt="indian-girl-doing-namaste"
          />
          <div>
            <p>Arya, AI Acharya</p>
          </div>
        </Logo>
        <Login>
          <HeadLine>
            Discover the <br></br> timeless wisdom of
          </HeadLine>
          <Vedas>the Vedas.</Vedas>
          <SignInMatter>
            Sign up and <span>journey through ancient knowledge with Arya</span>
            🌟
          </SignInMatter>
          <LoginOptions>
            <div>
              <img
                src="./images/Facebook-f_Logo-Blue-Logo.wine.svg"
                alt="Facebook-logo"
              />
            </div>
            <div>
              <img
                src="./images/Google_Pay-Logo.wine (1).svg"
                alt="Google-logo"
              />
            </div>
            <div>
              <img
                src="./images/Apple_Inc.-Logo.wine (1).svg"
                alt="Apple-logo"
              />
            </div>
          </LoginOptions>
          <HorizontalLine>
            <Line />
            <OrText>OR</OrText>
            <Line />
          </HorizontalLine>
          <button>Sign up with email</button>
          <ExistingAccount>
            Existing Account? <span>Login</span>
          </ExistingAccount>
        </Login>
      </LoginContainer>
    </Container>
  );
};
export default Onboarding;

const Container = styled.div`
  position: relative;
  background-color: #69235b;
  height: 100vh;
  width: 100vw;
  @media screen and (max-width:320px){
    height: 150vh;
  }
`;
const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 770px) {
    top: 0;
    left: 0;
    right: 0;
    transform: translate(0%, 0%);
    flex-direction: column;
  }
`;
const Logo = styled.div`
  position: relative;
  img {
    height: 350px;
    border-radius: 10px;
  }
  div {
    position: absolute;
    background-color: #cbcbff;
    bottom: -5px;
    left: 31%;
    border-radius: 5px;
  }
  p {
    color: #69235b;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.1px;
    margin: 0px;
    padding: 5px;
    width: 150px;
    text-align: center;
  }
  @media screen and (max-width: 920px) {
    img {
      width: 350px;
    }
    div {
      left: 33%;
    }
    p {
      font-size: 12px;
      width: 100px;
    }
  }
  @media screen and (max-width: 770px) {
    img {
      width: 100%;
      height: 100%;
      border-radius: 0px;
    }
  }
  @media screen and (max-width: 308px) {
    div {
      left: 30%;
      left: 30%;
      display: flex;
      justify-content: center;
      p {
        font-size: 10px;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      left: 10%;
      right: 10%;
      display: flex;
      justify-content: center;
      p {
        font-size: 10px;
        text-align: center;
      }
    }
  }
`;
const Login = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  button {
    background-color: #ffc746;
    border-radius: 10px;
    color: #69235b;
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 45px;
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    border: none;
    cursor: pointer;
  }
  margin-left: 35px;
  width: 400px;
  @media screen and (max-width: 920px) {
    width: 300px;
    button {
      width: 100%;
      height: 40px;
    }
  }
  @media screen and (max-width: 770px) {
    margin-left: 0px;
    margin-top: 20px;
    height: 100%;
    width: 340px;
    button {
      width: 100%;
      height: 40px;
    }
  }
  @media screen and (max-width: 380px) {
    width: 90%;
    height: 450px;
  }
`;
const LoginOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  div {
    width: 35px;
    height: 35px;
    border: 0.1px solid white;
    border-radius: 50%;
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  margin-bottom: 20px;
  @media screen and (max-width: 920px) {
    width: 40%;
    div {
      width: 30px;
      height: 30px;
    }
  }
`;
const HeadLine = styled.p`
  color: #fff;
  font-family: Kumbh Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  margin: 0;
  @media screen and (max-width: 920px) {
    font-size: 25px;
  }
`;

const Vedas = styled.p`
  color: #ffc746;
  font-family: Kumbh Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  margin: 0;
  @media screen and (max-width: 920px) {
    font-size: 25px;
  }
`;
const SignInMatter = styled.p`
  color: #fff;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Inter;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  margin: 0;
  span {
    color: #fbbc04;
  }
  text-align: left;
  margin-bottom: 20px;
  @media screen and (max-width: 920px) {
    font-size: 12px;
  }
`;

const HorizontalLine = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Line = styled.span`
  flex: 1;
  height: 1px;
  background-color: #cdd1d0;
  opacity: 0.2;
  margin: 0 3px;
`;

const OrText = styled.span`
  margin: 0 10px;
  color: #fff;
  text-align: center;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 100;
  line-height: 14px;
  letter-spacing: 0.1px;
`;

const ExistingAccount = styled.p`
  color: #fff;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Kumbh Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.1px;
  span {
    color: #fbbc04;
    cursor: pointer;
  }
  margin-top: 20px;
  text-align: center;
  @media screen and (max-width: 920px) {
    font-size: 15px;
  }
`;
