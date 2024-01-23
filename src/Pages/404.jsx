import { useRouteError } from "react-router-dom";

const ErrorPage = function () {
  const { error } = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center gap-x-3">
      <div className="w-full max-w-xs text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-3">Error 404</h1>
        <p className="text-sm text-slate-600 mb-8">{error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
