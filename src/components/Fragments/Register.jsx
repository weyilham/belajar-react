import Button from "../Elements/Button";
import FormInput from "../Elements/Input";

export default function Register() {
  return (
    <form>
      <FormInput
        label="fullname"
        children="Fullname"
        type="text"
        id="fullname"
        placeholder="excemple@gmail.com"
      />

      <FormInput
        label="email"
        children="Email"
        type="email"
        id="email"
        placeholder="excemple@gmail.com"
      />

      <FormInput
        label="password"
        children="Password"
        type="password"
        id="password"
        placeholder="*****"
      />

      <FormInput
        label="confirmPassword"
        children="Confirm Password"
        type="password"
        id="confirmPassword"
        placeholder="*****"
      />

      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
}
