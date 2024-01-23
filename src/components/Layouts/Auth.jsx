import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

export default function AuthComponent(props) {
  const { title, children, type } = props;
  const { isDarkMode, setDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center min-h-screen items-center gap-x-3 ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="bg-blue-600 p-2 rounded-md text-white absolute right-2 top-2"
          onClick={() => setDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold text-blue-700 mb-3">{title}</h1>
        <p className="text-sm text-slate-600 mb-8">
          Welcome, Insert your detail
        </p>
        {children}

        <p className="text-sm text-slate-600 mt-5 text-center">
          {type == "login"
            ? "don't have an account ? "
            : "i have an account ? "}

          {type == "login" && (
            <Link to="/register" className="text-sm font-bold text-blue-600">
              Sign Up
            </Link>
          )}

          {type == "register" && (
            <Link to="/login" className="text-sm font-bold text-blue-600">
              Sign In
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}
