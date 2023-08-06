import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SignUp = () => {
  // State variables to store form data and validation status
  const [email, setEmail] = useState("");
  const [inValidEmail, setInValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  // Use useEffect to validate form fields whenever they change
  useEffect(() => {
    setFormIsValid(
      email.trim().length > 0 &&
        password.trim().length > 0 &&
        validateEmail(email) &&
        password === confirmPassword &&
        name.trim().length > 0,
    );
  }, [email, password, confirmPassword, name]);

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
  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };
  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <Container>
      <BackButton>
        <Link to="/">
          <img src="./images/Back.svg" alt="Back-button" />
        </Link>
      </BackButton>
      <Logo>
        <img
          src="./images/mokx_logo.png"
          alt="Logo"
        />
      </Logo>
      <Welcome>
        <h3>
          Sign up with <span>Email </span>
        </h3>
        <p>Enter your details and dive into a realm of ancient wisdom! 💫</p>
      </Welcome>
      {/* basic form to enter the details of user for registration and added the prop for animation based on email */}
      <Form>
        <label>Your name</label>
        <input type="text" value={name} onChange={handleNameChange} />
        {/* Email label with a conditional style based on invalid email */}
        {inValidEmail ? (
          <EmailLabel
            style={{
              color: "#FF2D1B",
            }}
          >
            Your email
          </EmailLabel>
        ) : (
          <EmailLabel
            style={{
              color: "#69235B",
            }}
          >
            Your email
          </EmailLabel>
        )}
        {inValidEmail ? (
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            style={{
              borderBottom: "1px solid #FF2D1B",
            }}
          />
        ) : (
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
          />
        )}
        {inValidEmail && <ErrorMessage>Invalid email address</ErrorMessage>}
        <PassWordLabel>Password</PassWordLabel>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label>Confirm password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {/* added the disabled condition based on invalid email and neccessary fields */}
        <button type="submit" disabled={!formIsValid}>
          Create Account
        </button>
      </Form>
    </Container>
  );
};

export default SignUp;

//Styled components for different sections of the form
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
const Logo = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 0px;
  img {
    width: 72px;
    height: 64px;
  }
`;
const Welcome = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 7%;
  h3 {
    color: #69235b;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 100% */
    span {
      width: 50px;
      padding-right: 5px;
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
    p {
      font-size: 12.5px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  label {
    color: #69235b;
    text-align: left;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0.1px;
    display: block;
  }
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
    margin-top: 25%;
    margin-bottom: 5px;
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
  text-align: left;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
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
  line-height: 14px; /* 100% */
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
