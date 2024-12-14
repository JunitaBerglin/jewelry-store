import React from "react";
import "../../scss/startpage.scss";

const Spotlight: React.FC = () => {
  return (
    <div className="spotlight">
      <p className="spotlight__title">In the Spotlight!</p>
      <p className="spotlight__text">Check out our latest collection.</p>
    </div>
  );
};
export { Spotlight };
