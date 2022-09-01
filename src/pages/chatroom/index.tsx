import React from 'react';
import styled from "styled-components";

import Layout from "layout";
import SideBar from './components/sidebar/SideBar';
import ChatBoard from './components/chatboard/ChatBoard';

interface AppProps {
    
}

const index: React.FC<AppProps> = ({  }) => {
    return (
        <Layout>
        <Container>
            <SideBar/>
            <ChatBoard/>
        </Container>
        </Layout>
    );
};

export default index;
const Container  = styled.div`
 display: flex;
 width: 70rem;
 gap: 5rem;
 padding-top: 3rem;
 `;
