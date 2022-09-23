import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { color } from "theme";
import ChatContainer from "../chatcontainer/ChatContainer";

const ChatBoard = () => {
  const chatHistory = [
    { name: "Bisi", message: "Hello", isUser: false, time: "9:00pm" },
    { name: "You", message: "hi", time: "9:15pm", isUser: true },
    {
      name: "Bisi",
      message: "Any plans for tonight",
      isUser: false,
      time: "9:30pm",
    },
    {
      name: "You",
      message: "Ermm...nothing much",
      time: "10: 00pm",
      isUser: true,
    },
    { name: "You", message: "What about you?", time: "10: 00pm", isUser: true },
  ];
  return (
    <Container>
      <ChatHeader>
        <Button>
          <Typography>Clear chat</Typography>
        </Button>
      </ChatHeader>
      <ChatBody>
        {chatHistory.map((el) => (
          <ChatContainer
            name={el.name}
            isUser={el.isUser}
            time={el.time}
            message={el.message}
          />
        ))}
      </ChatBody>
    </Container>
  );
};

export default ChatBoard;

const Container = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ChatHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 10rem;
  background: ${color.white};
  height: 4rem;
  border-radius: 2rem;
  border: none;
`;

const ChatBody = styled.div`
  width: 100%;
  background: ${color.white};
  height: 30rem;
  overflow: auto;
  border-radius: 20px;
  padding: 2rem 2rem 0 2rem;
`;
