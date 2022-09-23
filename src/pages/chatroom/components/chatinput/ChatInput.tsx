import React from 'react';
import styled from "styled-components";
import {RiSendPlaneFill} from "react-icons/ri";

import Input from "components/input/Input";
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
        <Input
        height="4rem"
        width="80%"
        radius="2rem"
        border="none"
        placeholder="Type a message"
        padding="0 1rem"
        background={color.brand2}
    />
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

const Container = styled.div``;
