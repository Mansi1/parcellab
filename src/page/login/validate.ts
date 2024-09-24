import { LoginPageState } from './login-page';

export const validate = (state: LoginPageState): boolean => {
  return state.orderNumber?.length < 3 || state.zipCode?.length < 3;
};
