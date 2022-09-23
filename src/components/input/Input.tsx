import React from 'react';
import styled from "styled-components";

interface InputProps {
   width : string
   height: string
background: string
   border : string
   radius: string
   padding: string
   placeholder: string
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <StyledInput
          {...props}
          placeholder={props.placeholder}
          width={props.width}
          height={props.height}
          background={props.background}
          border={props.border}
          radius={props.radius}
          padding={props.padding}
        />
      );
};

export default Input;

const StyledInput = styled.input<InputProps>`
  outline: none !important;
  font-family: "Raleway";
  font-size: 16px;
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.radius};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  width: ${(props) => (props.width ? props.width : "100%")};
`;
