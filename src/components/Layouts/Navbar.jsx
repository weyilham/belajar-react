import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
    // console.log(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <div className="h-20 bg-blue-600 flex justify-end px-10 gap-6 items-center">
      <span className="font-bold text-white">{username}</span>

      <Button classname="bg-red-600" onClick={handleLogout}>
        Logout
      </Button>

      <div className="flex item-center bg-red-500 p-2 rounded-md ml-5 text-white">
        <span className="font-bold">Total Cart : {totalCart}</span>
      </div>
    </div>
  );
};
export default Navbar;
