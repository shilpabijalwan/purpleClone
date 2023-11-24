export const LoginData = "LoginData";

export const Login = (data) => (dispatch) => {
  return dispatch({ type: LoginData, payload: data });
};
