import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SignIn = () => {
  // State variables to store form data and validation status
  const [email, setEmail] = useState("");
  const [inValidEmail, setInValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  // Use useEffect to validate form fields whenever they change
  useEffect(() => {
    setFormIsValid(
      email.trim().length > 0 &&
        password.trim().length > 0 &&
        validateEmail(email),
    );
  }, [email, password]);

  // Function to validate email format
  const validateEmail = (email) => {
    // Check for valid email format
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Event handlers for form fields
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleBlur = (e) => {
    const { value } = e.target;
    setInValidEmail(!validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };
  return (
    <Container>
      <BackButton>
        <img src="./images/Back.svg" alt="Back-button" />
      </BackButton>
      <Welcome>
        <h3>
          <span>Log in </span>to Mokx
        </h3>
        <p>
          Welcome back! Sign in using your social account or email to continue
          us
        </p>
      </Welcome>
      <LoginOptions>
        <div>
          <img
            src="./images/Facebook-f_Logo-Blue-Logo.wine.svg"
            alt="Facebook-logo"
          />
        </div>
        <div>
          <img src="./images/Google_Pay-Logo.wine (1).svg" alt="Google-logo" />
        </div>
        <div>
          <img
            src="./images/Apple_Inc.-Logo.wine (1)(1).svg"
            alt="Apple-logo"
          />
        </div>
      </LoginOptions>
      <HorizontalLine>
        <Line />
        <OrText>OR</OrText>
        <Line />
      </HorizontalLine>
      {/* added the props for form to update the color of label, border-bottom and show the error message when the email is invallid */}
      <Form invalid={inValidEmail}>
        {/* Email label with a conditional style based on invalid email */}
        <EmailLabel invalid={inValidEmail}>Your email</EmailLabel>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          invalid={inValidEmail}
          onBlur={handleBlur}
        />
        {/* Show error message when the email is invalid */}
        {inValidEmail && <ErrorMessage>Invalid email address</ErrorMessage>}
        <PassWordLabel>Password</PassWordLabel>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {/* added the condition that submit button only enabled when the email is valid and password is entered */}
        <button type="submit" disabled={!formIsValid}>
          Login
        </button>
      </Form>
      <ForgotPassword>Forgot Password?</ForgotPassword>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  border: 1px solid white;
  width: 375px;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;
const BackButton = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  cursor: pointer;
`;
const Welcome = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    text-align: center;
    color: #69235b;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    span {
      background: rgb(255, 255, 255);
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 60%,
        #ffc746 40%
      );
    }
  }
  p {
    margin: 0 auto;
    width: 75%;
    color: #69235b;
    text-align: center;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.1px;
  }
  @media screen and (max-width: 375px) {
    margin-top: 50px;
    p {
      font-size: 12.5px;
    }
  }
`;
const LoginOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  div {
    width: 35px;
    height: 35px;
    border: 1px solid black;
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
  @media screen and (max-width: 375px) {
    width: 50%;
    div {
      width: 30px;
      height: 30px;
    }
  }
`;
const HorizontalLine = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 90%;
`;
const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #cdd1d0;
  opacity: 0.5;
  margin: 0 3px;
`;
const OrText = styled.div`
  margin: 0 10px;
  color: #69235b;
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  input {
    border: none;
    border-bottom: 1px solid #cdd1d0;
    margin-bottom: 25px;
    padding: 10px 0px;
    outline: none;
    color: #000e08;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  input[type="email"] {
    // if invalidEmail is true border bottom turn to red
    border-bottom: ${(props) =>
      props.invalid ? "1px solid #FF2D1B" : "1px solid #CDD1D0"};
  }
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
    width: 100%;
    margin: 0 auto;
    margin-top: 30%;
    border: none;
    cursor: pointer;
    &:disabled {
      background-color: #fbdc94;
      color: #eda0a8;
      cursor: default;
    }
    &:disabled:focus {
      outline: none;
    }
  }
  @media screen and (max-width: 375px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    input {
      margin-bottom: 20px;
      font-size: 14px;
    }
    button {
      margin-top: 20%;
      height: 40px;
    }
  }
`;
const EmailLabel = styled.label`
  // if invalidEmail is true label turn to red
  color: ${(props) => (props.invalid ? "#FF2D1B" : "#69235B")};
  text-align: left;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.1px;
  display: block;

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;
const PassWordLabel = styled.label`
  color: #69235b;
  text-align: left;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.1px;
  display: block;

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;
const ErrorMessage = styled.div`
  color: #ff2d1b;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 100;
  line-height: 12px;
  text-align: end;
  margin-top: -20px;

  @media screen and (max-width: 375px) {
    font-size: 10px;
  }
`;
const ForgotPassword = styled.p`
  color: #fbbc04;
  margin-top: 30px;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.1px;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;
