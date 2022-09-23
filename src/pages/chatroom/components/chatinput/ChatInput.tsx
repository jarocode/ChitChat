import React from 'react';
import styled from "styled-components";
import {RiSendPlaneFill} from "react-icons/ri";
import {BsEmojiSmile} from "react-icons/bs";
import {ImAttachment} from "react-icons/im";

import { color } from "theme";
import Button from "components/button/Button";

interface ChatInputProps {
    
}

const ChatInput: React.FC<ChatInputProps> = ({  }) => {
     const handleClick = () => {
         return null;
     }
    return (
       <Container>
       
    <SearchDiv>
        <BsEmojiSmile size="1.7rem" style={{cursor: "pointer"}}/>
        <Input placeholder='Type a message'/>
        <ImAttachment  size="1.7rem" style={{cursor: "pointer"}}/>
      </SearchDiv>
      <Button
        bgColor={color.green}
        btnText={<RiSendPlaneFill color={color.white} size={"1.5rem"} />}
        height="4rem"
        width="4rem"
        borderRadius={"50%"}
        onKeyPress={() => null}
        onClick={handleClick}
      />
        </Container>
    );
};

export default ChatInput;

const Container = styled.div`
  width: 100%;
  background: ${color.white};
  height: 6rem;
  display: flex;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  gap: 2rem;
  margin-top: -2rem;
  border-radius:  0 0 2rem 2rem;
  justify-content: space-between;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 100%;
  box-sizing: border-box;
  border-radius: 2rem;
  background: ${color.brand2};
  padding: 0 1.2rem;
  gap: 1rem;
  width: 100%;
 
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  font-family: Raleway;
  font-size: 17px;
  width: 100%;
`;

