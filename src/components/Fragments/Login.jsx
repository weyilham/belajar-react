import { login } from "../../services/auth.services";
import Button from "../Elements/Button";
import FormInput from "../Elements/Input";
import { useEffect, useRef, useState } from "react";

export default function Login() {
  const [loginFiled, setLoginFailed] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const data = {
      username: username,
      password: password,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        // console.log(res.response.data);
      }
    });
  };
  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Username"
        children="Username"
        type="text"
        id="username"
        placeholder="Joe doe"
        ref={usernameRef}
      />

      <FormInput
        label="password"
        children="Password"
        type="password"
        id="password"
        placeholder="*****"
      />

      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFiled && (
        <p className="text-red-600 text-center mt-3">{loginFiled}</p>
      )}
    </form>
  );
}
