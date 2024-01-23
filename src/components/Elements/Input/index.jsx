import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const FormInput = forwardRef((props, ref) => {
  const { label, children, placeholder, type, id } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={label}>{children}</Label>
      <Input type={type} id={id} placeholder={placeholder} ref={ref}></Input>
    </div>
  );
});

export default FormInput;
