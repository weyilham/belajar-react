import React from "react";
import Auth from "../components/Layouts/Auth";
import Login from "../components/Fragments/Login";

function LoginPage() {
  return (
    <Auth title="Login" type="login">
      <Login />
    </Auth>
  );
}

export default LoginPage;
