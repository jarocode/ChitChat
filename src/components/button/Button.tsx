import React from 'react';
import styled from "styled-components";

import ButtonLoader from "components/loader/ButtonLoader";
import { color as themeColor } from "theme";

interface ButtonProps {
    height?: string
    width?: string
    btnText?: JSX.Element
    disabled?: string
    borderRadius?: string
    bgColor?: string
    shadow?: string
    loading?: string
    color?: string
    border?: string
    fontWeight?: string
    onClick?: () => void
    onKeyPress?: () => void
    margin?: string
    fontFamily?: string
    padding?: string
}

const Button: React.FC<ButtonProps> = ({ height,
    width,
    btnText,
    disabled,
    borderRadius,
    bgColor,
    shadow,
    loading,
    color,
    border,
    fontWeight,
    onClick,
    onKeyPress,
    margin,
    fontFamily,
    padding,
    ...props }) => {
    return (
        <Btn
        {...props}
        height={height}
        width={width}
        bgColor={bgColor}
        color={color}
        border={border}
        borderRadius={borderRadius}
        shadow={shadow}
        padding={padding}
        fontFamily={fontFamily}
        margin={margin}
        fontWeight={fontWeight}
        onClick={onClick}
        onKeyDown={onKeyPress}
      >
        {loading ? (
          <ButtonLoader isSubmitting={loading} />
        ) : (
          <span>{btnText}</span>
        )}
      </Btn>
      );
};

export default Button;

const Btn = styled.button<ButtonProps>`
   ${({
    height,
    width,
    borderRadius,
    shadow,
    bgColor,
    border,
    disabled,
    color,
    padding,
    fontWeight,
    margin,
  }) => {
    return `height : ${height};
    min-width: ${width};
    border-radius: ${borderRadius ? borderRadius : "5px"};
    box-shadow: ${shadow};
    background: ${disabled ? themeColor.grey : bgColor};
    border: ${border ? border : "none"};
    color: ${color ? color : themeColor.white};
    font-weight: ${fontWeight};
    font-family: Raleway;
    margin: ${margin};
    padding: ${padding};
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in;
    &:hover{
      transform: scale(1.05);
    }
    `;
  }}
`;




