import React from "react";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import "../../scss/startpage.scss";
import { Carousel } from "../../components/carousel";
import { Spotlight } from "../../components/spotlight";
import { ProductGrid } from "../../components/productgrid";
import { Promo } from "../../components/promo";

const StartPage: React.FC = () => {
  return (
    <>
      <Header />
      <article className="main">
        <Carousel />
        <Promo />
        <Spotlight />
        <ProductGrid />
      </article>
      <Footer />
    </>
  );
};

export { StartPage };
