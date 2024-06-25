import React, { useEffect } from "react";
import { useSignInMutation } from "../../context/api/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../context/slices/authSlice";

function Login() {
  const [login, { data, isSuccess, error, isError }] = useSignInMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      // localStorage.setItem("x-auth-token", data?.data?.token);
      dispatch(setToken(data?.data?.token));
      dispatch(setUser(data?.data?.user));
      navigate("/admin");
    }
  }, [isSuccess]);

  const handleLogin = () => {
    let user = {
      UserName: "sherzod",
      password: "12345678",
    };
    login(user);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
