import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, id } = props;
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full px-3 py-2 border text-slate-700 border-slate-300 rounded-md focus:outline-blue-500"
      ref={ref}
    />
  );
});

export default Input;
