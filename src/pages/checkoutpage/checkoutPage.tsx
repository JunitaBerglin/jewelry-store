import React, { useState } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/footer";
import useCart from "../../context/useCart";
import "../../scss/checkout.scss";

export const CheckoutPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const shippingCost = shippingMethod === "express" ? 99 : 49;
  const grandTotal = totalAmount + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    // Save customer info to localStorage
    localStorage.setItem("customer", JSON.stringify(customerInfo));

    // Process order
    alert(`Order placed successfully! Payment method: ${paymentMethod}`);
    clearCart();

    // Reset form
    setCustomerInfo({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zipCode: "",
      phone: "",
      email: "",
    });
    setCardInfo({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardHolder: "",
    });
    setPaymentMethod("");
    setShowPaymentForm(false);
  };

  return (
    <>
      <Header />
      <main className="checkout">
        <article className="row">
          <section>
            <div className="summary">
              <h4 className="col-md-5 col-lg-4 summary__order">
                Order Summary
              </h4>
            </div>
            <ul className="list-group mb-3" id="checkoutsummary">
              {cartItems.map((item) => (
                <li
                  key={item.product.id}
                  className="list-group-item d-flex justify-content-between lh-sm"
                >
                  <div>
                    <h6 className="my-0">{item.product.name}</h6>
                    <small className="text-muted">
                      Quantity: {item.quantity}
                    </small>
                  </div>
                  <span className="text-muted">
                    {item.product.price * item.quantity} kr
                  </span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Shipping</span>
                <span>{shippingCost} kr</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (SEK)</span>
                <strong>{grandTotal} kr</strong>
              </li>
            </ul>
          </section>
        </article>

        <h4 className="col-md-5 col-lg-4 shipping__title">Shipping Method</h4>
        <article className="row p-3 m-3 shipping">
          <section className="col-xs-10 col-md-6 col-lg-6 p-3 m-6 mb-4 mt-2 shipping__methods">
            <div className="form-check">
              <input
                type="radio"
                id="express"
                name="shipping"
                value="express"
                className="form-check-input"
                checked={shippingMethod === "express"}
                onChange={(e) => setShippingMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="express">
                <span>Express Courier (99 kr)</span>
                <br />
                <small className="text-muted">2 to 3 business days</small>
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="standard"
                name="shipping"
                value="standard"
                className="form-check-input"
                checked={shippingMethod === "standard"}
                onChange={(e) => setShippingMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="standard">
                <span>Standard Shipping (49 kr)</span>
                <br />
                <small className="text-muted">5 to 7 business days</small>
              </label>
            </div>
          </section>
        </article>

        <h4 className="col-md-5 col-lg-4 customer__title">
          Customer Information
        </h4>
        <article className="row p-3 m-3">
          <form
            className="col-lg-6 p-3 border border-dark m-6 p-3"
            onSubmit={handleSubmit}
          >
            <div className="col-xs-10 col-md-6 col-lg-6 m-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={customerInfo.firstName}
                onChange={handleInputChange}
                placeholder="First Name *"
                required
              />
            </div>

            <div className="col-xs-10 col-md-6 col-lg-6 m-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={customerInfo.lastName}
                onChange={handleInputChange}
                placeholder="Last Name *"
                required
              />
            </div>

            <div className="col-xs-10 col-md-6 col-lg-6 m-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                placeholder="Address *"
                required
              />
            </div>

            <div className="col-xs-10 col-md-6 col-lg-6 m-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={customerInfo.city}
                onChange={handleInputChange}
                placeholder="City *"
                required
              />
            </div>

            <div className="col-xs-10 col-md-6 col-lg-6 m-3">
              <label htmlFor="zipCode" className="form-label">
                Zip Code
              </label>
              <input
                type="text"
                className="form-control"
                id="zipCode"
                name="zipCode"
                value={customerInfo.zipCode}
                onChange={handleInputChange}
                placeholder="Zip-code *"
                required
              />
            </div>

            <div className="col-xs-10 col-md-6 col-lg-6 m-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                className="form-control"
                id="phone"
                name="phone"
                type="text"
                maxLength={10}
                value={customerInfo.phone}
                onChange={handleInputChange}
                placeholder="Enter Your Mobile Number *"
                required
              />
            </div>

            <div className="col-xs-10 col-md-6 col-lg-6 m-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={customerInfo.email}
                onChange={handleInputChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                placeholder="Enter your email address *"
                required
              />
            </div>

            <button className="btn btn-primary customer__btn" type="submit">
              Continue to Payment
            </button>
          </form>
        </article>

        <h4 className="col-md-5 col-lg-4 payment__title">Payment</h4>
        <article className="row p-3 m-3">
          <section className="col-xs-10 col-md-6 col-lg-6 m-6 p-3 payment">
            <div className="payment__methods">
              <div className="form-check mb-3">
                <input
                  type="radio"
                  id="card"
                  name="payment"
                  value="card"
                  className="form-check-input"
                  checked={paymentMethod === "card"}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                    setShowPaymentForm(true);
                  }}
                />
                <label className="form-check-label" htmlFor="card">
                  <strong>Credit/Debit Card</strong>
                  <br />
                  <small className="text-muted">
                    Pay securely with your card
                  </small>
                </label>
              </div>

              {paymentMethod === "card" && showPaymentForm && (
                <div className="card-payment-form border p-3 mb-3">
                  <div className="mb-3">
                    <label htmlFor="cardHolder" className="form-label">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardHolder"
                      name="cardHolder"
                      value={cardInfo.cardHolder}
                      onChange={handleCardInputChange}
                      placeholder="Name on card"
                      required={paymentMethod === "card"}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      name="cardNumber"
                      value={cardInfo.cardNumber}
                      onChange={handleCardInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={16}
                      required={paymentMethod === "card"}
                    />
                  </div>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <label htmlFor="expiryDate" className="form-label">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="expiryDate"
                        name="expiryDate"
                        value={cardInfo.expiryDate}
                        onChange={handleCardInputChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        required={paymentMethod === "card"}
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="cvv" className="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cvv"
                        name="cvv"
                        value={cardInfo.cvv}
                        onChange={handleCardInputChange}
                        placeholder="123"
                        maxLength={3}
                        required={paymentMethod === "card"}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="form-check">
                <input
                  type="radio"
                  id="invoice"
                  name="payment"
                  value="invoice"
                  className="form-check-input"
                  checked={paymentMethod === "invoice"}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                    setShowPaymentForm(false);
                  }}
                />
                <label className="form-check-label" htmlFor="invoice">
                  <strong>Invoice</strong>
                  <br />
                  <small className="text-muted">Pay within 30 days</small>
                </label>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};
