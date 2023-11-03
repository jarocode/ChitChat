import React, { useState } from 'react';
import styled from 'styled-components';
import { Socket } from 'socket.io-client';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BsEmojiSmile, BsFillMicFill } from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';
import Picker from 'emoji-picker-react';

import { color } from 'theme';
import Button from 'components/button/Button';

interface ChatInputProps {
  socket: Socket;
}

const ChatInput: React.FC<ChatInputProps> = ({ socket }) => {
  const [showPicker, setShowPicker] = useState<boolean>();
  const [message, setMessage] = useState<string>();

  React.useEffect(() => {
    socket.on('chat', (data) => {
      console.log('received', data);
    });
    // return () => {
    //   socket.disconnect();
    // };
  }, [socket]);

  const onEmojiClick = (event: any, emojiObject: { emoji: any }) => {
    setMessage((prev) =>
      prev ? `${prev}${emojiObject?.emoji}` : `${emojiObject?.emoji}`
    );
  };
  const handleClick = () => {
    setMessage('');

    socket.emit('chat', { chat: message, id: 2 });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) return handleClick();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e?.target?.value);
  };

  return (
    <Container>
      <BsFillMicFill size='1.7rem' style={{ cursor: 'pointer' }} />
      <SearchDiv>
        <BsEmojiSmile
          size='1.7rem'
          style={{ cursor: 'pointer' }}
          onClick={() => setShowPicker((prev) => !prev)}
        />
        <Input
          placeholder='Type a message'
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <ImAttachment size='1.7rem' style={{ cursor: 'pointer' }} />
        {showPicker && (
          <PickerDiv>
            <Picker
              onEmojiClick={onEmojiClick}
              pickerStyle={{ width: '100%' }}
            />
          </PickerDiv>
        )}
      </SearchDiv>
      <Button
        bgColor={color.green}
        btnText={<RiSendPlaneFill color={color.white} size={'1.5rem'} />}
        height='4rem'
        width='4rem'
        borderRadius={'50%'}
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
  border-radius: 0 0 2rem 2rem;
  justify-content: space-between;
  align-items: center;
`;

const SearchDiv = styled.div`
  position: relative;
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

const PickerDiv = styled.div`
  position: absolute;
  bottom: 4.5rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  font-family: Raleway;
  font-size: 17px;
  width: 100%;
`;
