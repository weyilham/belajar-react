import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  //didUpdate menjalankan setiap ada perubahan pada cart
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id == item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  return (
    <table className="text-left table-auto border-separate border-spacing-x-5">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={product.id}>
                <td>{product.title.substring(0, 10)}...</td>
                <td>
                  $
                  {product.price.toLocaleString("id-ID", {
                    styles: "curency",
                    currency: "IDR",
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  $
                  {(product.price * item.qty).toLocaleString("id-ID", {
                    styles: "curency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            );
          })}
        <tr>
          <td colSpan="3" className="font-bold">
            Total Price
          </td>
          <td className="font-bold">
            ${" "}
            {totalPrice.toLocaleString("id-ID", {
              styles: "curency",
              currency: "IDR",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
