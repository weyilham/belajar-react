export default function Label(props) {
  const { label, children } = props;

  return (
    <label htmlFor={label} className="text-slate-600 text-sm mb-4 block">
      {children}
    </label>
  );
}
