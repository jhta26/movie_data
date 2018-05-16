const Authenticate = async logIn => {
  let request = await fetch(`${env.REACT_APP_BASE_URL}/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: logIn.username, password: logIn.password })
  });
  let response = await request.json();
  let token = await response.token;
  return { token: token };
};

export default Authenticate;
