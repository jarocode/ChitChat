import React from 'react';
import styled from 'styled-components';
import {IoSearchOutline} from "react-icons/io5";

import { color } from 'theme';
import ChatUsers from '../chatusers/ChatUsers';

const SideBar = () => {
  const users = [1,2,3,4,5,6,7,8,9,3,4,5];
  return (
    <Container>
      <SearchDiv>
        <IoSearchOutline/>
        <Input placeholder='SEARCH'/>
      </SearchDiv>
      <Div>{users.map(el => <ChatUsers name="Jessie woo"/>)}</Div>
    </Container>
  )
}

export default SideBar;
const Container = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;


const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 100%;
  box-sizing: border-box;
  border-radius: 2rem;
  padding-left: 1rem;
  gap: 1rem;
  width: 100%;
  background: ${color.white};
`;

const Div = styled.div`
  background: ${color.white};
  padding-top: 2rem;
  width: 100%;
  height: 30rem;
  border-radius: 20px;
  overflow: auto;
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
  background: rgba(78, 66, 109, 1);
}

`;

const Input = styled.input`
  border: none;
  outline: none;
  font-family: Raleway;
  font-size: 17px;
`;

