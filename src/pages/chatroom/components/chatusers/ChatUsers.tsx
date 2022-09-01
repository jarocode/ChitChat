import React from 'react';
import styled from "styled-components";
import {Avatar, Typography} from "@mui/material";

interface ChatUsersProps {
    name: string;
}

const ChatUsers: React.FC<ChatUsersProps> = ({ name }) => {
    return (
        <Container>
              <Avatar/>
            <Div>
              <TextDiv>
                   <Typography>Jessie Woo</Typography>
                   <Typography>Hi there, how are you?</Typography>
                </TextDiv>
                <Typography>09:00pm</Typography>
            </Div>
            
        </Container>
    );
};

export default ChatUsers;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Div = styled.div``;
const TextDiv = styled.div``;
