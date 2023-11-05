import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';

import { color } from 'theme';
import Button from 'components/button/Button';
import GoogleIcon from 'assets/icons8-google-48.png';
import { LoginDetails, authApi } from 'api/auth';

interface LoginProps {
  setShowLogin: Dispatch<SetStateAction<boolean | undefined>>;
}

const Login: React.FC<LoginProps> = ({ setShowLogin }) => {
  const queryClient = useQueryClient();
  const [loginValues, setLoginValues] = useState<LoginDetails>({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(authApi.login, {
    onSuccess: (data) => {
      localStorage.setItem('_tkk', data.accessToken);
      queryClient.setQueryData(['userData'], (prevUsers: any) => {
        console.log('prevUsers', prevUsers);
        return data.user;
      });
      queryClient.invalidateQueries({ queryKey: ['userData'] });
      toast.success(data.message);

      navigate('/chatroom');
    },
    onError: (error: AxiosError) => {
      if (typeof error === 'object') toast.error(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(loginValues);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <Typography
        color={color.brand1}
        fontWeight={600}
        fontSize={'26px'}
        marginBottom='1rem'
      >
        Log in
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
              Log in with Google
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
              Email or Username
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
            type='text'
            id='password'
            name='password'
            onChange={handleChange}
          />
        </FormField>
        <Button
          bgColor={color.brand1}
          btnText={
            <Typography fontWeight='bold' fontSize={'16px'} color={color.white}>
              {isLoading ? 'Loading...' : 'Log in'}
            </Typography>
          }
          height='3rem'
          width='100%'
          border={`1px solid ${color.brand1}`}
          borderRadius={'6px'}
        />
        <Typography
          color={color.green}
          fontWeight='bold'
          fontSize={'16px'}
          align='center'
          style={{ cursor: 'pointer' }}
          marginTop={'1rem'}
        >
          Forgot Password?
        </Typography>
      </Form>
      <Typography
        color={color.grey}
        fontWeight='bold'
        fontSize={'14px'}
        align='center'
        marginTop={'1rem'}
      >
        Don't have an account?
        <br />
        <span
          style={{ color: color.brand1, fontSize: '16px', cursor: 'pointer' }}
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
