import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';


import { color } from 'theme';

const ChatBoard = () => {
  return (
    <Container>
      <ChatHeader>
         <Button><Typography >Clear chat</Typography></Button>
      </ChatHeader>
      <ChatBody></ChatBody>
    </Container>
  )
}

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
   height : 30rem;
   border-radius: 20px;
`;