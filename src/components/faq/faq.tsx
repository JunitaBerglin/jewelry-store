import React from "react";
import "../../scss/contact.scss";

const FAQ: React.FC = () => {
  return (
    <div className="faq">
      <h4 className="faq-mtitle">Frequently Asked Questions</h4>

      <p className="faq-description">
        Here, you'll find answers to some of the most common questions we
        receive from our customers. If you don't see the answer to your question
        below, feel free to contact us and we'll be happy to help. We hope this
        page helps to make your experience with our company as smooth and
        enjoyable as possible.
      </p>

      <div className="faq-item">
        <input className="faq-input" type="checkbox" id="faq_1" />
        <label className="faq-title" htmlFor="faq_1">
          Jewelry Care
        </label>
        <div className="faq-text">
          <p>
            Store your jewelry properly: Keep your jewelry in a safe, dry place
            when not wearing it. You can use a jewelry box with compartments or
            a jewelry organizer to keep your pieces separated and prevent them
            from getting scratched or tangled. Avoid storing your jewelry in
            damp or humid areas, as moisture can damage certain materials.
            <br />
            <br />
            Clean your jewelry regularly: Dust, sweat, and oils from your skin
            can build up on your jewelry over time, dulling its shine. Use a
            soft, lint-free cloth to gently wipe your jewelry clean. Avoid using
            harsh chemicals or abrasive materials, as these can damage the
            surface of your jewelry. If your jewelry is particularly dirty or
            has accumulated a lot of grime, you may need to use a gentle
            cleaning solution specifically designed for jewelry.
          </p>
        </div>
      </div>

      <div className="faq-item">
        <input className="faq-input" type="checkbox" id="faq_2" />
        <label className="faq-title" htmlFor="faq_2">
          Sizing Guide
        </label>
        <div className="faq-text">
          <p>
            Jewelry sizing refers to the measurement and fitting of jewelry to
            ensure a proper fit for the wearer. There are several different
            types of jewelry that require different sizing methods, including
            rings, bracelets, and necklaces. Here are some general tips for
            jewelry sizing:
            <br />
            <br />
            Ring sizing: Ring sizes can be measured using a tape measure or a
            piece of string, which can be wrapped around the finger and then
            compared to a chart to determine the size.
            <br />
            <br />
            Necklace sizing: To determine the size of a necklace that will fit
            you well, measure the circumference of your neck using a tape
            measure or a piece of string, and then compare the measurement to a
            chart to determine the size. Alternatively, you can measure the
            length of a necklace that fits you well using a ruler to determine
            the size.
            <br />
            <br />
            Bracelet sizing: To measure your wrist size, wrap a flexible tape
            measure or a piece of string around your wrist, and then compare the
            measurement to a chart to determine the size. Alternatively, you can
            measure the inside diameter of a bracelet that fits you well using a
            ruler to determine the size.
            <br />
            <br />
            It's important to note that jewelry sizing can vary slightly from
            one manufacturer to another, so it's always a good idea to try on
            jewelry or to measure your size carefully to ensure a good fit.
          </p>
        </div>
      </div>

      <div className="faq-item">
        <input className="faq-input" type="checkbox" id="faq_3" />
        <label className="faq-title" htmlFor="faq_3">
          Shipping
        </label>
        <div className="faq-text">
          <p>
            Our Express and Standard Courier services are fast and reliable way
            to get your package delivered to its destination. With this
            services, your package will be picked up from our warehouse and
            delivered directly to the recipient's address, typically within 1-5
            business days. You'll receive tracking updates along the way so you
            can keep track of your package's progress. Delivery services are
            available for domestic and international shipping. Please note that
            delivery times may vary depending on the destination, and additional
            charges may apply for certain locations. Contact us for more
            information on our delivery services.
          </p>
        </div>
      </div>

      <div className="faq-item">
        <input className="faq-input" type="checkbox" id="faq_4" />
        <label className="faq-title" htmlFor="faq_4">
          Returns
        </label>
        <div className="faq-text">
          <p>
            We want you to be completely satisfied with your purchase. If for
            any reason you are not happy with your order, you may return it
            within 14 days of receiving it for a full refund or exchange. Please
            note that all returns must be in their original condition, including
            tags and packaging. Customized or personalized items are
            non-refundable.
            <br />
            <br />
            To initiate a return, please contact our customer service to request
            a return authorization. Once your return has been approved, you will
            receive instructions on how to send your item(s) back to us. We
            recommend using a tracked and insured shipping method, as we are not
            responsible for lost or damaged packages.
            <br />
            <br />
            Once we receive your returned item(s), we will process your refund
            or exchange within 7 business days. Please note that original
            shipping charges are non-refundable.
            <br />
            <br />
            We reserve the right to refuse any returns that do not meet the
            above requirements.
          </p>
        </div>
      </div>

      <div className="faq-item">
        <input className="faq-input" type="checkbox" id="faq_5" />
        <label className="faq-title" htmlFor="faq_5">
          Order Status
        </label>
        <div className="faq-text">
          <p>
            Check your order confirmation email: a confirmation email will be
            sent to you after you place an order, which may include information
            about the status of your order.
            <br />
            <br />
            Check your order tracking number: You can use your tracking number
            to track the progress of your shipment on Express Courier website.
            <br />
            <br />
            Contact costumer service: If you have any questions or concerns
            about the status of your order, you can contact us through our
            website or by phone to inquire about the status of your order.
          </p>
        </div>
      </div>

      <div className="faq-item">
        <input className="faq-input" type="checkbox" id="faq_6" />
        <label className="faq-title" htmlFor="faq_6">
          Payment Options
        </label>
        <div className="faq-text">
          <p>
            Card payments: Enter your chosen card number, expiration date, and
            security code (the three- or four-digit code on the back of your
            card). Enter your billing address and any other required
            information. Review the details of your order, including the total
            amount due and the shipping address. If everything is correct, click
            the "Pay" button to complete the payment. You may be prompted to
            enter a one-time code that is sent to your phone or email to confirm
            the payment.
            <br />
            <br />
            Invoice: The invoice will outline the payment terms and methods that
            are accepted. Keep a copy of the invoice and any receipts or
            confirmation emails related to the payment for your records. It is
            important to pay invoices promptly to avoid any delays or late fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export { FAQ };
