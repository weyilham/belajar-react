export default function Button(props) {
  const {
    children = "...",
    classname = "bg-green-600",
    type = "button",
    onClick = () => {},
  } = props;

  return (
    <button
      className={`h-8 px-4 text-white ${classname} rounded-sm shadow-md`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
