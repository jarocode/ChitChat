import React from 'react';
import styled from "styled-components";

interface ButtonProps {
    height: string,
    width: string,
    borderRadius: string,
    color: string,
    bgColor: string
}

const Button: React.FC<ButtonProps> = ({ height, width, borderRadius, color, bgColor }) => {
    return (
       <Btn></Btn>
    );
};

export default Button;

const Btn = styled.button`
 
`;
