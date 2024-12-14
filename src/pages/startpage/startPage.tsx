import React from "react";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import "../../scss/startpage.scss";
import { Carousel } from "../../components/carousel";
import { Spotlight } from "../../components/spotlight";
import { ProductGrid } from "../../components/productgrid";

const StartPage: React.FC = () => {
  return (
    <div className="startpage">
      <Header />
      <Carousel />
      <Spotlight />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export { StartPage };
