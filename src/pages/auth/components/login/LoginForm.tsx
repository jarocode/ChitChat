import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import { color } from "theme";
import Button from "components/button/Button";
import GoogleIcon from "assets/icons8-google-48.png";

interface LoginProps {
  setShowLogin: Dispatch<SetStateAction<boolean | undefined>>;
}

const Login: React.FC<LoginProps> = ({ setShowLogin }) => {
  return (
    <Container>
      <Typography
        color={color.brand1}
        fontWeight={600}
        fontSize={"26px"}
        marginBottom="1rem"
      >
        Log in
      </Typography>
      <Button
        bgColor={color.white}
        btnText={
          <BtnTextDiv>
            <img
              src={GoogleIcon}
              alt="google-icon"
              width="26px"
              height="26px"
            />
            <Typography fontWeight="bold" fontSize={"16px"} color={color.grey}>
              Log in with Google
            </Typography>
          </BtnTextDiv>
        }
        height="3rem"
        width="100%"
        border={`1px solid ${color.lightGrey}`}
        borderRadius={"6px"}
      />
      <Form>
        <FormField>
          <label htmlFor="fname">
            <Typography
              fontWeight="bold"
              fontSize={"14px"}
              color={color.brand1}
              marginBottom=".4rem"
            >
              Email
            </Typography>
          </label>
          <Input type="text" id="fname" name="fname" />
        </FormField>
        <FormField>
          <label htmlFor="lname">
            <Typography
              fontWeight="bold"
              fontSize={"14px"}
              color={color.brand1}
              marginBottom=".4rem"
            >
              Password
            </Typography>
          </label>
          <Input type="text" id="lname" name="lname" />
        </FormField>
        <Button
          bgColor={color.brand1}
          btnText={
            <Typography fontWeight="bold" fontSize={"16px"} color={color.white}>
              Log in
            </Typography>
          }
          height="3rem"
          width="100%"
          border={`1px solid ${color.brand1}`}
          borderRadius={"6px"}
        />
        <Typography
          color={color.green}
          fontWeight="bold"
          fontSize={"16px"}
          align="center"
          style={{ cursor: "pointer" }}
          marginTop={"1rem"}
        >
          Forgot Password?
        </Typography>
      </Form>
      <Typography
        color={color.grey}
        fontWeight="bold"
        fontSize={"14px"}
        align="center"
        marginTop={"1rem"}
      >
        Don't have an account?
        <br />
        <span
          style={{ color: color.brand1, fontSize: "16px", cursor: "pointer" }}
          onClick={() => setShowLogin(false)}
        >
          Sign up
        </span>
      </Typography>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  width: 27rem;
  border-radius: 10px;
  background: ${color.white};
  box-shadow: 0px 6px 16px 0px #15151629;
`;

const BtnTextDiv = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  display: flex;
`;

const Form = styled.form`
  border-top: 1px solid ${color.lightGrey};
  border-bottom: 1px solid ${color.lightGrey};
  padding: 1rem 0;
  width: 100%;
  margin-top: 2rem;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  border: 1px solid ${color.lightGrey};
  border-radius: 6px;
  font-family: Raleway;
  height: 2.5rem;
  width: 100%;
  &:focus {
    border: 1px solid ${color.green};
    outline: none;
  }
`;
