import LogIn from "../../requests/users/LogIn";
import decode from "jwt-decode";
import GetUser from "../../requests/users/GetUser";

export default function loginProcess({ userName, password }, history) {
  return async (dispatch, getState, env) => {
    try {
      const { token } = await LogIn(
        { userName, password },
        { baseUrl: env.BASE_URL }
      );
      localStorage.setItem("token", token);
      const { sub: userId } = decode(token);
      const user = await GetUser(userId, { baseUrl: env.BASE_URL, token });

      history.push("/");
      const loggedUser = { ...user, token };
      dispatch({ type: "LOGIN_USER", loggedUser });
    } catch (error) {
      console.error(error);
      localStorage.removeItem("token");
    }
  };
}
