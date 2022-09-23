import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { color } from "theme";
import ChatContainer from "../chatcontainer/ChatContainer";
import ChatInput from "../chatinput/ChatInput";

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
    { name: "You", message: "What about you?", time: "10:00pm", isUser: true },
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
      <ChatInput/>
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
  height: 25rem;
  overflow: auto;
  border-radius: 20px 20px 0 0;
  padding: 2rem 2.5rem 1rem 2.5rem;
  box-sizing: border-box; 
  ::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: rgba(78, 66, 109, .4);
  opacity: 0.6;
  border-radius: 10px;
  cursor: pointer;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(78, 66, 109, .4);
}

`;
