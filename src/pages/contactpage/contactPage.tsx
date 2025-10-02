import React, { useState } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/footer";
import { FAQ } from "../../components/faq";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setShowThankYou(true);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <main className="container-fluid">
        <div className="contactContainer">
          <article className="contact row m-6 p-3 mt-3">
            <section className="contact__section col">
              <h4 className="contact__title">Contact Us</h4>
              <p className="contact__text">
                We're excited to hear from you!
                <br />
                Please use the form below or contact us. All questions will be
                answered within three business days.
              </p>
            </section>

            <section className="contact__section col">
              <h4 className="contact__title">We're Available</h4>
              <p className="contact__text">
                Weekdays: 10 — 16
                <br />
                Saturday: 12 — 16
                <br />
                Sunday: 12 — 15
                <br />
              </p>
            </section>
          </article>

          <article className="row p-3 m-3 formContact">
            <form
              className="col-lg-6 p-3 border border-dark m-6 p-3 contactForm"
              onSubmit={handleSubmit}
            >
              <div className="col-xs-10 col-md-6 col-lg-6 m-3 formContact__container">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name *"
                  required
                />
              </div>

              <div className="col-xs-10 col-md-6 col-lg-6 m-3 formContact__container">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name *"
                  required
                />
              </div>

              <div className="col-xs-10 col-md-6 col-lg-6 m-3 formContact__container">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  className="form-control"
                  id="phone"
                  name="phone"
                  type="text"
                  maxLength={12}
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Your Mobile Number"
                />
              </div>

              <div className="col-xs-10 col-md-6 col-lg-6 m-3 formContact__container">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  placeholder="Enter your email address *"
                  required
                />
              </div>

              <div className="col-xs-10 col-md-6 col-lg-6 m-3 formContact__container">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control formTextMessage"
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button
                className="btn btn-outline-secondary m-3 contactBtn"
                type="submit"
              >
                Send
              </button>
            </form>

            {showThankYou && (
              <section className="thankYouMessage">
                <h4>Thank you for getting in touch!</h4>
                <p className="thankYouMessageText">
                  We have received your message and would like to thank you for
                  writing to us. We will get back to you shortly. Have a great
                  day!
                </p>
              </section>
            )}
          </article>

          <div className="wrapperFAQ">
            <FAQ />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
