import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../../models/Product";
import { products } from "../../models/productList";
import useCart from "../../context/useCart";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const selectedProduct = products.find((prod) => prod.id === id);
    setProduct(selectedProduct || null);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={product.image}
                  className="d-block w-100"
                  alt={product.name}
                />
              </div>
              {product.secondImage && (
                <div className="carousel-item">
                  <img
                    src={product.secondImage}
                    className="d-block w-100"
                    alt="Second"
                  />
                </div>
              )}
              {product.thirdImage && (
                <div className="carousel-item">
                  <img
                    src={product.thirdImage}
                    className="d-block w-100"
                    alt="Third"
                  />
                </div>
              )}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">{product.name}</h2>
          <p className="text-muted">{product.type}</p>
          <p>{product.description}</p>
          <p className="fw-bold">{product.price} kr</p>

          <button className="btn btn-dark" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <Link to="/cart" className="icons__shoppingbag">
            <i className="fa fa-shopping-bag"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { ProductDetails };
