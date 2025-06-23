import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="transition-transform duration-300 ease-in-out hover:scale-110"
          src={image[0]}
          alt={image[0]}
        />
      </div>
      <p className="p-3 pb-1 text-sm"> {name}</p>
      <p className="pl-3 text-sm font-medim">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
