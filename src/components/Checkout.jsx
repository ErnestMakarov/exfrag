import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useCartContext } from "../utils/CartContext";

export default function Checkout() {
  const { cart } = useCartContext();
  const form = useRef();

  const [contactMethod, setContactMethod] = useState("instagram");

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price || 0);
  }, 0);

  const sendEmail = (e) => {
    e.preventDefault();

    const itemsList = cart
      .map((item) => `${item.title} — ${item.price}€`)
      .join("\n");

    const templateParams = {
      contact_method: contactMethod,
      contact_nickname: form.current.contact_nickname.value,
      user_comment: form.current.user_comment.value,
      items_list: itemsList,
      total_sum: total.toFixed(2),
    };

    emailjs
      .send(
        "service_o3f9qla",
        "template_qwvs75t",
        templateParams,
        "FRg2d-gy8wK3aDlVA"
      )
      .then(() => {
        alert("Order sent! We will contact you shortly.");
        form.current.reset();
        setContactMethod("instagram");
      })
      .catch(() => {
        alert("Error sending order.");
      });
  };

  return (
    <main className="checkout-min">
      <div className="checkout-wrapper">

        
        <form ref={form} onSubmit={sendEmail} className="checkout-form">

          <div className="how-it-works">
            After submitting the order, we will contact you via the selected
            social network to confirm availability and details.
          </div>

          <label className="label">Preferred contact</label>
          <select
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
          >
            <option value="instagram">Instagram</option>
            <option value="telegram">Telegram</option>
          </select>

          <input
            name="contact_nickname"
            placeholder={
              contactMethod === "instagram"
                ? "Instagram username"
                : "Telegram username"
            }
            required
          />

          <textarea
            name="user_comment"
            placeholder="Comment (optional)"
          />

          <button type="submit" className="submit-btn">
            Submit Order
          </button>
        </form>

        {/* RIGHT */}
        <aside className="order-box">
          <h3>Your order</h3>

          <div className="order-list">
            {cart.map((item) => (
              <div className="order-item" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div>
                  <p className="item-title">{item.title}</p>
                  <p className="item-price">{item.price}€</p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-total">
            Total: <b>{total.toFixed(2)}€</b>
          </div>
        </aside>

      </div>
    </main>
  );
}
