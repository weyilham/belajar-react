import { Fragment, useEffect, useState } from "react";
import CardProducts from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.services";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

const ProductPage = () => {
  //use state untuk mengstate komponent

  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header images={product.image} id={product.id} />
                <CardProducts.Body title={product.title.substring(0, 20)}>
                  {product.description.substring(0, 100)}
                </CardProducts.Body>
                <CardProducts.Footer
                  price={product.price.toLocaleString("id-ID", {
                    styles: "curency",
                    currency: "IDR",
                  })}
                  id={product.id}
                />
              </CardProducts>
            ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
