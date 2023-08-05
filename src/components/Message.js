import React from "react";
import styled from "styled-components";

const Message = () => {
  // queries array contains the questions that the user will ask the bot and the bot will reply accordingly
  const queries = [
    "What is the mantra in Rigveda 10.2.3?",
    "What are the prescribed Vedic remedies for snake bites?",
    "Can you tell me the significance of the Gayatri Mantra?",
  ];

  return (
    <Container>
      {/* ContactInfo section contains header details and language switching button */}
      <ContactInfo>
        <Details>
          {/* Back button to navigate back */}
          <BackButton>
            <img src="./images/Back(1).svg" alt="back_button" />
          </BackButton>
          {/* Profile image and name */}
          <ProfileImage>
            <img src="./images/Rectangle 1092.png" alt="profile_pic " />
            <img src="./images/Ellipse 385.svg" alt="ellipse" />
          </ProfileImage>
          <ProfileName>
            {/* User's name */}
            <p>Arya</p>
            {/* Bot's designation */}
            <p>Vedic AI Bot</p>
          </ProfileName>
        </Details>
        {/* Language switching button */}
        <Language>
          <p>
            {/* Current language */}A<span>/</span>
            {/* Alternate language */}
            <span>क</span>
          </p>
        </Language>
      </ContactInfo>
      {/* MessageSection contains the chat messages and message box */}
      <MessageSection>
        {/* Welcome message from the bot */}
        <Chat>
          <img src="./images/Rectangle 1092.png" alt="welcome_message" />
          <div>
            <p>
              🙏 Namaste! I&apos;m Arya, your AI Vedic help. I'm here to provide
              insights from Vedas for daily life concerns.
              <br />
              <br />
              Whether you seek guidance on mantras, general life advice, or
              specific Vedic interpretations, I&apos;m here to assist you.
            </p>
          </div>
        </Chat>
        {/* Queries section displays example queries that the user can ask */}
        <Queries>
          {/* Header for queries section */}
          <QueryHeader>
            <img src="./images/Vector.svg" alt="query_header" />
            <p>You can ask queries like:</p>
          </QueryHeader>
          {/* Iterate over queries array and display each query */}
          {queries.map((query, index) => {
            return (
              <Query key={index}>
                {/* Display each query */}
                <p>{query}</p>
              </Query>
            );
          })}
        </Queries>
        {/* Limitation message */}
        <Limitation>
          <p>
            {/* Icon for limitation */}
            <img src="./images/Group.svg" alt="limitation_icon" />
            {/* Limitation message */}
            Limitation: May struggle with complex queries.
          </p>
        </Limitation>
        {/* Farewell message from the bot */}
        <Chat>
          <img src="./images/Rectangle 1092.png" alt="profile_pic" />
          <div>
            <p>
              {" "}
              Let your curiosity guide you; wishing you blessings and
              enlightenment 🕉️
            </p>
          </div>
        </Chat>
        {/* Message input box */}
        <MessageBox>
          {/* Input box to write messages */}
          <input type="text" placeholder="Write your message here" />
          <div>
            {/* Send button */}
            <img src="./images/send.svg" alt="send_button" />
            {/* Microphone button */}
            <img src="./images/microphone-2.svg" alt="microphone_button" />
          </div>
        </MessageBox>
      </MessageSection>
    </Container>
  );
};
export default Message;

// Container for the entire chat app UI
const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  /* Responsive styles for smaller screens */
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

// Details section containing profile image, name, and language switching button
const Details = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  margin-bottom: 0;
`;

// ContactInfo section containing header details and language switching button
const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
`;

// BackButton for navigating back to the previous screen
const BackButton = styled.div`
  padding-right: 1rem;
`;

// ProfileImage section containing the profile image and an additional image (ellipse)
const ProfileImage = styled.div`
  position: relative;

  /* Styling for the ellipse image, positioned relative to the profile image */
  img:last-child {
    position: absolute;
    bottom: 15%;
    right: 7%;
  }

  margin-right: 0.5rem;
`;

// ProfileName section containing the user's name and the bot's designation
const ProfileName = styled.div`
  text-align: left;

  /* Styling for the user's name */
  p {
    margin: 10px;
    color: #69235b;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }

  /* Styling for the bot's designation */
  p:last-child {
    color: #797c7b;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 100;
    line-height: 12px;
  }
`;

// Language section containing the language switching button
const Language = styled.div`
  font-family: Mukta;
  padding-right: 20px;

  /* Styling for the language switching button */
  p {
    color: #fbbc04;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 16px;
  }

  /* Styling for the two language options */
  span:first-child {
    color: #fbbc04;
    font-size: 16px;
    font-style: normal;
    font-weight: 275;
    line-height: 16px;
  }
  span:last-child {
    color: #fbdc94;
    font-size: 16px;
    font-style: normal;
    font-weight: 275;
    line-height: 16px;
  }
`;

// MessageSection containing the chat messages and message box
const MessageSection = styled.div`
  background-color: #f8f8ff;
  margin-top: 1rem;
  padding: 1rem;
  height: 100%;
`;

// Chat section containing the user and bot messages
const Chat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  /* Styling for the profile image in the chat */
  img {
    margin-right: 0.5rem;
    margin-top: 0;
    width: 40px;
    height: 40px;
  }

  div {
    width: 50%;
    background-color: #69235b;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 5px;
    margin-top: 0px;

    /* Styling for the text inside the chat messages */
    p {
      color: #fff;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.12px;
      padding: 0 5px;
      text-align: left;
    }
  }

  /* Responsive styles for smaller screens */
  @media screen and (max-width: 650px) {
    div {
      width: 70%;
    }
  }
`;

// Queries section containing example queries that the user can ask
const Queries = styled.div`
  margin: 0 auto;
  width: 90%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

// QueryHeader section containing the header text for the queries section
const QueryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* Styling for the icon in the query header */
  img {
    height: 21px;
    width: 19px;
    margin-right: 0.5rem;
  }

  /* Styling for the header text */
  p {
    color: #69235b;
    font-family: Kumbh Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
  }

  /* Responsive styles for smaller screens */
  @media screen and (max-width: 350px) {
    p {
      font-size: 14px;
    }
  }
`;

// Query section containing individual example queries
const Query = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  background-color: #fbbc04;
  border-radius: 20px;
  text-align: left;

  /* Styling for the text inside each query */
  p {
    color: #69235b;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.18px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Responsive styles for smaller screens */
  @media screen and (max-width: 870px) {
    width: 70%;
  }

  @media screen and (max-width: 650px) {
    width: 75%;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }

  @media screen and (max-width: 350px) {
    width: 90%;
    font-size: 10px;
  }
`;

// Limitation section containing the limitation message
const Limitation = styled.div`
  text-align: center;

  /* Styling for the limitation message */
  p {
    color: #69235b;
    font-family: ABeeZee;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.195px;
  }

  /* Styling for the icon in the limitation message */
  img {
    width: 15px;
    height: 12px;
    margin-right: 5px;
  }

  /* Responsive styles for smaller screens */
  @media screen and (max-width: 350px) {
    p {
      font-size: 11px;
    }
  }
`;

// MessageBox section containing the message input box and send/microphone buttons
const MessageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 90%;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  /* Styling for the message input box */
  input {
    width: 80%;
    border: none;
    outline: none;
    color: #a1a1a1;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: center;
  }

  /* Styling for the send and microphone buttons */
  img {
    padding: 0.5rem;
  }

  /* Responsive styles for smaller screens */
  @media screen and (max-width: 550px) {
    padding: 0.3rem 1rem;
    input {
      width: 50%;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 250px) {
    padding: 0.2rem 1rem;
    input {
      width: 40%;
      font-size: 11px;
    }
  }
`;
