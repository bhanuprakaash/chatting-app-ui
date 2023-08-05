import React from "react";
import styled from "styled-components";
const Message2 = () => {
  // Array of objects containing messages and their type (customer or bot) and time of message sent
  const messagesArray = [
    {
      type: "customer",
      message: ["Hello! How are you?"],
      time: "09:25 AM",
    },
    {
      type: "bot",
      message: ["अपनेपन यथासंभव धीर-धीरे अपने समय  "],
      time: "09:25 AM",
    },
    {
      type: "customer",
      message: ["You did your job well!"],
      time: "09:25 AM",
    },
    {
      type: "bot",
      message: ["हमारे लेकर वर्गाकार करता। होना त्याग", "क्योंकि विकास करता"],
      time: "09:25 AM",
    },
  ];

  return (
    <Container>
      <ContactInfo>
        <Details>
          <BackButton>
            <img src="./images/Back(1).svg" alt="back_button" />
          </BackButton>
          <ProfileImage>
            <img src="./images/Rectangle 1092.png" alt="profile_pic " />
            <img src="./images/Ellipse 385.svg" alt="ellipse" />
          </ProfileImage>
          <ProfileName>
            <p>Arya</p>
            <p>Vedic AI Bot</p>
          </ProfileName>
        </Details>
        <Language>
          <p>
            A<span>/</span>
            <span>क</span>
          </p>
        </Language>
      </ContactInfo>
      <MessageSection>
        {/* Message section contains the sequence of messages between bot and user, also contain message box */}
        <Time>
          <p>Today</p>
        </Time>
        {/* iterate over messagesArray and apply the styles to each component whereever necessary */}
        {messagesArray.map((message, index) => {
          {
            /* applied the condition to filter between bot and customer to apply individual styling */
          }
          if (message.type === "bot") {
            return (
              <Chat key={index}>
                <img src="./images/Rectangle 1092.png" alt="profile_pic" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {message.message.map((msg, index) => {
                    return (
                      <Content key={index}>
                        <p>{msg}</p>
                      </Content>
                    );
                  })}
                  <MessageTime>
                    <p>{message.time}</p>
                  </MessageTime>
                </div>
              </Chat>
            );
          } else {
            return (
              <Chat
                key={index}
                style={{
                  flexDirection: "row-reverse",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {message.message.map((msg, index) => {
                    return (
                      <Content
                        key={index}
                        style={{
                          backgroundColor: "#FBBC04",
                          borderRadius: "10px 0 10px 10px",
                        }}
                      >
                        <p>{msg}</p>
                      </Content>
                    );
                  })}
                  <MessageTime>
                    <p>{message.time}</p>
                  </MessageTime>
                </div>
              </Chat>
            );
          }
        })}
        <MessageBox>
          <input type="text" placeholder="Write your message here" />
          <div>
            <img src="./images/send.svg" alt="send_button" />
            <img src="./images/microphone-2.svg" alt="microphone_button" />
          </div>
        </MessageBox>
      </MessageSection>
    </Container>
  );
};
export default Message2;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  margin-bottom: 0;
`;
const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
`;
const BackButton = styled.div`
  padding-right: 1rem;
`;
const ProfileImage = styled.div`
  position: relative;
  img:last-child {
    position: absolute;
    bottom: 15%;
    right: 7%;
  }
  margin-right: 0.5rem;
`;
const ProfileName = styled.div`
  text-align: left;
  p {
    margin: 10px;
    color: #69235b;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
  p:last-child {
    color: #797c7b;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 100;
    line-height: 12px;
  }
`;
const Language = styled.div`
  font-family: Mukta;
  padding-right: 20px;
  p {
    color: #fbdc94;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: Mukta;
    font-size: 16px;
    font-style: normal;
    font-weight: 275;
    line-height: 16px;
  }
  span:first-child {
    color: #fbdc94;
    font-size: 16px;
    font-style: normal;
    font-weight: 275;
    line-height: 16px;
  }
  span:last-child {
    color: #fbbc04;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: Mukta;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 16px;
  }
`;

const MessageSection = styled.div`
  background-color: #f8f8ff;
  margin-top: 1rem;
  padding: 1rem;
  height: 100%;
`;
const Chat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  img {
    margin-right: 0.5rem;
    margin-top: 0;
    width: 40px;
    height: 40px;
  }
`;

const Content = styled.div`
  width: fit-content;
  background-color: #69235b;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0rem;
  margin: 0.2rem 0;
  p {
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.12px;
    padding: 0.2rem 1rem;
    text-align: left;
  }
`;
const MessageTime = styled.div`
  color: #797c7b;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 100;
  line-height: 10px;
  align-self: flex-end;
`;

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
  img {
    padding: 0.5rem;
  }
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
const Time = styled.div`
  text-align: center;
  p {
    color: #69235b;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: Raleway;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px;
  }
`;
