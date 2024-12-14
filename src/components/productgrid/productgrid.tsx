import React from "react";
import { products } from "../../models/productList";
import "../../scss/startpage.scss";
import { useNavigate } from "react-router-dom";

const ProductGrid: React.FC = () => {
  const navigate = useNavigate();

  const spotlightProducts = products.slice(0, 6);

  return (
    <div className="productStartpage">
      {spotlightProducts.map((product) => (
        <div className="productsStartpage" key={product.id}>
          <div
            className="productsStartpageImgContainer"
            onClick={() => navigate(`/productdetails/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="productsStartpage__img"
            />
          </div>
          <p className="productsStartpage__type">{product.type}</p>
          <p className="productsStartpage__name">{product.name}</p>
          <p className="productsStartpage__price">{product.price} kr</p>
        </div>
      ))}
    </div>
  );
};
export { ProductGrid };
