import React, { useEffect } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { AboutUs } from "../AboutUs";
import { ProductSpotlight } from "../ProductSpotlight";
import { Carousel } from "../Carousel";

const StartPage: React.FC = () => {
  useEffect(() => {
    // Any additional logic for initialization
  }, []);

  return (
    <div className="startpage">
      <Header />
      <Carousel />
      <AboutUs />
      <ProductSpotlight />
      <Footer />
    </div>
  );
};

export { StartPage };
