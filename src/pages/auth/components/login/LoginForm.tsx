import React from 'react';
import styled from "styled-components";

import { color } from "theme";

interface LoginProps {
    
}

const Login: React.FC<LoginProps> = ({  }) => {
    return (
        <Container>
            
        </Container>
    );
};

export default Login;

const Container = styled.div`
   width: 40rem;
   height: 30rem;
   background: ${color.white};
`;
