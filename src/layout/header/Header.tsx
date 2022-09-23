import React from 'react';
import styled from "styled-components";

interface HeaderProps {
  
}

const Header: React.FC<HeaderProps> = ({...props  }) => {
  return (
    <Container>
      <div>logo</div>
      <div>Avatar</div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;
