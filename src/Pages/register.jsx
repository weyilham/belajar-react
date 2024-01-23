import React from "react";
import Auth from "../components/Layouts/Auth";
import Register from "../components/Fragments/Register";

function RegisterPage() {
  return (
    <Auth title="Register" type="register">
      <Register />
    </Auth>
  );
}

export default RegisterPage;
