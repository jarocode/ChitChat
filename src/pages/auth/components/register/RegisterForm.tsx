import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { color } from 'theme';
import Button from 'components/button/Button';
import GoogleIcon from 'assets/icons8-google-48.png';
import { SignUpDetails, authApi } from 'api/auth';

interface RegisterProps {
  setShowLogin: Dispatch<SetStateAction<boolean | undefined>>;
}

interface SignUpValues extends SignUpDetails {
  confirm_password?: String;
}

const Register: React.FC<RegisterProps> = ({ setShowLogin }) => {
  const [signUpValues, setSignUpValues] = useState<SignUpValues>({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const { mutate, isLoading } = useMutation(authApi.createAccount, {
    onSuccess: (data) => {
      toast.success(data.message);
      setShowLogin(true);
    },
    onError: (error: AxiosError) => {
      if (typeof error === 'object') toast.error(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { password, confirm_password } = signUpValues;
    if (password !== confirm_password)
      return toast.error('passwords do not match!');
    delete signUpValues?.confirm_password;
    mutate(signUpValues);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <Typography
        color={color.brand1}
        fontWeight={600}
        fontSize={'26px'}
        marginBottom='1rem'
      >
        Sign up
      </Typography>
      <Button
        bgColor={color.white}
        btnText={
          <BtnTextDiv>
            <img
              src={GoogleIcon}
              alt='google-icon'
              width='26px'
              height='26px'
            />
            <Typography fontWeight='bold' fontSize={'16px'} color={color.grey}>
              Sign up with Google
            </Typography>
          </BtnTextDiv>
        }
        height='3rem'
        width='100%'
        border={`1px solid ${color.lightGrey}`}
        borderRadius={'6px'}
      />
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor='username'>
            <Typography
              fontWeight='bold'
              fontSize={'14px'}
              color={color.brand1}
              marginBottom='.4rem'
            >
              Name
            </Typography>
          </label>
          <Input
            type='text'
            id='username'
            name='username'
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label htmlFor='fname'>
            <Typography
              fontWeight='bold'
              fontSize={'14px'}
              color={color.brand1}
              marginBottom='.4rem'
            >
              Email
            </Typography>
          </label>
          <Input type='text' id='email' name='email' onChange={handleChange} />
        </FormField>
        <FormField>
          <label htmlFor='password'>
            <Typography
              fontWeight='bold'
              fontSize={'14px'}
              color={color.brand1}
              marginBottom='.4rem'
            >
              Password
            </Typography>
          </label>
          <Input
            type='password'
            id='password'
            name='password'
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label htmlFor='password'>
            <Typography
              fontWeight='bold'
              fontSize={'14px'}
              color={color.brand1}
              marginBottom='.4rem'
            >
              Confirm Password
            </Typography>
          </label>
          <Input
            type='password'
            id='confirm_password'
            name='confirm_password'
            onChange={handleChange}
          />
        </FormField>
        <Button
          bgColor={color.brand1}
          btnText={
            <Typography fontWeight='bold' fontSize={'16px'} color={color.white}>
              {isLoading ? 'Loading...' : 'Sign up'}
            </Typography>
          }
          disabled={isLoading}
          height='3rem'
          width='100%'
          border={`1px solid ${color.brand1}`}
          borderRadius={'6px'}
        />
      </Form>
      <Typography
        color={color.grey}
        fontWeight='bold'
        fontSize={'14px'}
        align='center'
        marginTop={'1rem'}
      >
        Already have an account?
        <br />
        <span
          onClick={() => setShowLogin(true)}
          style={{ color: color.brand1, fontSize: '16px', cursor: 'pointer' }}
        >
          Log in
        </span>
      </Typography>
    </Container>
  );
};

export default Register;
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
