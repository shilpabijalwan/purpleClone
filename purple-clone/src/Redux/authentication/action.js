const LoginData = "LoginData";

export const Login = (data) => {
  return { type: LoginData, payload: data };
};
