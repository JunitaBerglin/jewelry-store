import React from "react";
import { useNavigate } from "react-router-dom";

const Promo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row banner" color="primary">
        <div className="row col-md inner-banner m-4">
          <div className="col-md-6 content bg-circle align-self-center text-center">
            <h4 className="text-center">Hello There!</h4>

            <h5>
              Join us in celebrating love and commitment with our Valentine's
              Day collection &hearts;
            </h5>

            <p className="promo-text">
              One of the most popular gifts to give on Valentine's Day is
              jewelry, as it is a timeless and elegant way to show your love.
              From sparkling diamonds to heartfelt charms, there are endless
              options to choose from when it comes to finding the perfect piece
              of jewelry for your loved one. Surprise your loved one with a
              stunning piece of jewelry from our Valentine's Day collection or
              treat yourself to something special with our collection of luxury
              jewelry. From statement necklaces to sparkling gemstone rings, we
              have something for every occasion and taste.
            </p>
            <div className="button">
              <button
                type="button"
                className="btn"
                onClick={() => navigate("/products")}
              >
                Shop Now{" "}
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="col-md-6 alig-end">
            <div className="d-flex justify-content-center">
              <img
                src="https://images.pexels.com/photos/14756614/pexels-photo-14756614.jpeg"
                className="image"
                alt="black and white boxes stacked on top of eachother"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Promo };
