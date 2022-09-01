import React from 'react';
import styled from 'styled-components';

import Header from 'layout/header/Header';
import { color } from 'theme';

type Children = {
     children : JSX.Element
}


const Body:  React.FC<Children> = ({children}) => {
  return (
    <Container>
    <Header/>
    {children}
    </Container>
  )
}

export default Body;

const Container = styled.div`
   background : ${color.brand2};
   height: 100vh;
   /* width: 100%; */
  
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 2rem;
`;