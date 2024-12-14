import React from "react";
import "../../scss/startpage.scss";

const Carousel: React.FC = () => {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://i.ibb.co/vmgH7gs/aurora.jpg"
          alt="Aurora"
          className="startpage__img"
        />
        <div className="carousel-caption">
          <h3 className="startpage__title">Welcome to Aurora Jewelry.</h3>
          <span className="startpage__text">
            Aurora Jewelry has something for everyone. Come visit us today and
            let us help you find a piece that expresses your personal style and
            elegance.
          </span>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://i.ibb.co/bW14cc6/valentines.jpg"
          alt="Valentine's Day"
          className="startpage__img"
        />
        <div className="carousel-caption">
          <h3 className="startpage__title">
            Join us in celebrating love and commitment with our Valentine's Day
            collection &hearts;
          </h3>
          <span className="startpage__text">
            One of the most popular gifts to give on Valentine's Day is jewelry,
            we have something for every occasion and taste.
          </span>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://i.ibb.co/gWtQRQG/gifts.jpg"
          alt="Gifts"
          className="startpage__img"
        />
        <div className="carousel-caption">
          <h3 className="startpage__title">Sparkle and shine!</h3>
          <span className="startpage__text">
            With our dazzling selection of rings! Visit our jewelry shop now for
            a unique selection of fashionable and timeless rings.
          </span>
        </div>
      </div>
    </div>
  );
};
export { Carousel };
