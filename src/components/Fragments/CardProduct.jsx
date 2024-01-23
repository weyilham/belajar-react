import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-blue-500 border border-gray-700 rounded-sm shadow-md mx-1 flex flex-col justify-between my-1">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { images, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={images}
        alt="product"
        className="p-4 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="p-6 text-white h-full">
      <h2 className="text-xl font-bold tracking-tight">
        <a href="" className="hover:text-gray-300">
          {title}
        </a>
      </h2>
      <p className="mt-1 text-sm">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const dispatch = useDispatch();

  const { price, id } = props;
  return (
    <div className="p-6 flex justify-between">
      <h4 className="text-slate-100 font-bold text-xl">$ {price}</h4>
      <Button
        classname="bg-red-600"
        onClick={() => {
          dispatch(addToCart({ id, qty: 1 }));
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;
export default CardProducts;
