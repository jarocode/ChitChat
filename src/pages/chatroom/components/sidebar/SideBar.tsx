import React from 'react';
import styled from 'styled-components';
import {IoSearchOutline} from "react-icons/io5";

import { color } from 'theme';

const SideBar = () => {
  return (
    <Container>
      <SearchDiv>
        <IoSearchOutline/>
        <Input placeholder='SEARCH'/>
      </SearchDiv>
      <Div></Div>
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
  /* width: 90%; */
  border-radius: 2rem;
  padding-left: 1rem;
  gap: 1rem;
  width: 100%;
  background: ${color.white};
`;

const Div = styled.div`
  background: ${color.white};
  width: 100%;
  height: 30rem;
  border-radius: 20px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-family: Raleway;
  font-size: 17px;
`;

