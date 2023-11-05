import api from '.';
import { processError } from 'utils/processError';

export interface SignUpDetails {
  username: string;
  email: string;
  password: string;
}

export type LoginDetails = Omit<SignUpDetails, 'email'>;

const createAccount = async (details: SignUpDetails) => {
  try {
    const response = await api.post(`/signUp`, details);
    return response.data;
  } catch (e) {
    processError(e);
  }
};
const login = async (details: LoginDetails) => {
  try {
    const response = await api.post(`/signIn`, details);
    return response.data;
  } catch (e) {
    processError(e);
  }
};

export const authApi = {
  login,
  createAccount,
};
