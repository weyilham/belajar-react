import React from "react";

const Button = (props) => {
  const { varian, children } = props;
  return (
    <div>
      <button className={`h-8 px-5 ${varian} rounded-md text-white shadow-md`}>
        {children}
      </button>
    </div>
  );
};
function App() {
  return (
    <div className="flex justify-center bg-blue-700 min-h-screen items-center gap-x-3">
      <Button varian="bg-red-700">Login</Button>
      <Button varian="bg-green-700">Registrasi</Button>
      <Button varian="bg-yellow-700">Logout</Button>
    </div>
  );
}

export default App;
