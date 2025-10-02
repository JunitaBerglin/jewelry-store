import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/footer";
import "../../scss/about.scss";

export const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <article className="aboutContainer container mt-5 pt-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="text-center mb-4">About 4 Jewelry</h1>

              <div className="about-content">
                <p className="lead">
                  Welcome to 4 Jewelry, where elegance meets craftsmanship.
                  Since our founding, we have been dedicated to creating and
                  curating the finest jewelry pieces that capture life's most
                  precious moments.
                </p>

                <h3>Our Story</h3>
                <p>
                  4 Jewelry was born from a passion for exceptional design and
                  uncompromising quality. We believe that jewelry is more than
                  just an accessory – it's a way to express your unique style
                  and commemorate life's special occasions.
                </p>

                <h3>Our Mission</h3>
                <p>
                  We are committed to providing our customers with jewelry that
                  combines timeless beauty with contemporary design. Each piece
                  in our collection is carefully selected or crafted to meet our
                  high standards of quality and craftsmanship.
                </p>

                <h3>Why Choose Us?</h3>
                <ul className="list-unstyled">
                  <li>✨ Exceptional quality and craftsmanship</li>
                  <li>✨ Unique and contemporary designs</li>
                  <li>✨ Personalized customer service</li>
                  <li>✨ Competitive pricing</li>
                  <li>✨ Satisfaction guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};
