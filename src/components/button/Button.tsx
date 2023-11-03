import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import ButtonLoader from 'components/loader/ButtonLoader';
import { color as themeColor } from 'theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  width?: string;
  btnText?: JSX.Element;
  borderRadius?: string;
  bgColor?: string;
  shadow?: string;
  loading?: string;
  color?: string;
  border?: string;
  fontWeight?: string;
  margin?: string;
  fontFamily?: string;
  padding?: string;
}

const Button: React.FC<ButtonProps> = ({
  height,
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
  margin,
  fontFamily,
  padding,
  ...props
}) => {
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
    color,
    padding,
    fontWeight,
    margin,
  }) => {
    return `height : ${height};
    min-width: ${width};
    border-radius: ${borderRadius ? borderRadius : '5px'};
    box-shadow: ${shadow};
    background: ${bgColor};
    border: ${border ? border : 'none'};
    color: ${color ? color : themeColor.white};
    font-weight: ${fontWeight};
    font-family: Raleway;
    margin: ${margin};
    padding: ${padding};
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in;
    &:hover{
      transform: scale(1.05);
    }
    `;
  }}
`;
