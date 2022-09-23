import React from 'react';
import styled from "styled-components";
import {Avatar, Typography} from "@mui/material";
import { color } from 'theme';

interface ChatUsersProps {
    name: string;
}

const ChatUsers: React.FC<ChatUsersProps> = ({ name }) => {
    return (
        <Container>
              <Avatar/>
            <Div>
              <TextDiv>
                   <Typography variant="subtitle1" component="h2" fontWeight={600}>{name}</Typography>
                   <Typography fontSize="12px">Hi there, how are you?</Typography>
              </TextDiv>
                <Typography fontWeight={500} fontSize="14px">09:00pm</Typography>
            </Div>
        </Container>
    );
};

export default ChatUsers;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  cursor : pointer;
  &:hover{
    background: ${color.brand2};
  }
`;

const Div = styled.div`
 display: flex;
 justify-content: space-between;
 width: 100%;
 border-bottom: 1px solid ${color.lightGrey};
 padding-bottom: 1rem;
`;
const TextDiv = styled.div``;
