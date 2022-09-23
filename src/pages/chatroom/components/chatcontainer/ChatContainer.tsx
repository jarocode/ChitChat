
import React from 'react';
import styled from "styled-components";
import { Avatar, Typography } from '@mui/material';

import {color }from "theme";

interface ChatContainerProps {
    name : string;
    isUser: boolean;
    time: string;
    message: string;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ name, isUser, time, message }) => {
    return (
        <Container isUser={isUser}>
            <Div isUser={isUser}> 
               <AvatarDiv isUser={isUser}>
               <Avatar sx={{bgColor: "#f00"}}>{name.charAt(0)}</Avatar>
                <Typography fontSize={"12px"}>{time}</Typography>
               </AvatarDiv>
                <ChatBox isUser={isUser}><Typography fontSize={"12px"}>{message}</Typography></ChatBox>
            </Div>
        </Container>
    );
};

export default ChatContainer;

interface ContainerProps {
    isUser?: boolean
}

interface ChatBoxProps {
    isUser?: boolean
}

interface DivProps {
    isUser?: boolean
}
interface AvatarDivProps {
    isUser?: boolean
}


const Container = styled.div<ContainerProps>`
 width: 100%;
 margin-bottom: 1rem;
 display: flex;
 justify-content: ${props => props.isUser ? "flex-end" : "flex-start"} ;
`;

const Div = styled.div<DivProps>`
 display: flex;
 justify-content: ${props => props.isUser ? "flex-end" : "flex-start"} ;
  width: 20rem;
  gap: .7rem;
  min-height: 3rem;
`;

const AvatarDiv = styled.div<AvatarDivProps>`
   width: 3.5rem;
   order:${props => props.isUser ? 2 : 1};
  
`;

const ChatBox = styled.div<ChatBoxProps>`
  background: ${props => props.isUser ? color.brand2 : color.brand1};
  color: ${(props) => (props.isUser ? color.brand1 : color.white)};
  order: ${(props) => (props.isUser ? 1 : 2)};
  min-height: 1rem;
  min-width: 5rem;
  max-width: 15rem;
 padding: 1rem;
  border-radius:  ${(props) => (props.isUser ? "15px 0px 15px 15px" : "0px 15px 15px 15px")};
`;
