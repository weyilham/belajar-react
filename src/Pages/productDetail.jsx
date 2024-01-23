import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductDetail } from "../services/product.services";
import Loading from "../components/Elements/Loading/Loading";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProducts] = useState({});

  useEffect(() => {
    getProductDetail(id, (data) => {
      setProducts(data);
    });
    if (Object.keys(product).length > 0) {
      setLoading(false);
    }
  }, []);

  return (
    <div className="w-100 min-h-screen flex justify-center items-center">
      {Object.keys(product).length > 0 && (
        <div className="flex font-sans max-w-xl">
          <div className="flex font-sans bg-slate-100 rounded-lg shadow-md">
            <div className="flex-none w-56 relative">
              <img
                src={product.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto font-medium text-slate-900">
                  {product.title}
                </h1>
                <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                  ${product.price}
                </div>
                <div className="text-sm font-medium text-slate-400">
                  Rating : {product.rating.rate} / 5 ({product.rating.count})
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm">
                  {product.description.substring(0, 70)}
                </div>
              </div>
              <div className="flex space-x-4 mb-5 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <button
                    className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white"
                    type="submit"
                  >
                    Buy now
                  </button>
                  <Link
                    to={`/products`}
                    className="h-10 px-6 font-semibold rounded-full border bg-red-400 border-slate-200 text-white flex justify-center items-center"
                  >
                    Kembali
                  </Link>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Free shipping on all continental US orders.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
