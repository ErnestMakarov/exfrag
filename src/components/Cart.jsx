import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../utils/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCartContext();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price);
    const qty = Number(item.qty) || 0;
    return sum + price * qty;
  }, 0);

  return (
    <div className="cart-block-pos">
      {cart.length === 0 ? (
        <p className="empty-text">Empty(</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id + item.size}>
              <img src={item.img} />

              <div className="cart-info">
                <h3>{item.title}</h3>
                
                <p>{parseFloat(item.price).toFixed(2)}€</p>

              </div>

              <FaTrash
                className="delete-icon"
                onClick={() => removeFromCart(item.id, item.size)}
              />
            </div>
          ))}

          <div className="cart-total">
            <span>Total: </span>
            <b>{total.toFixed(2)}€</b>

            <Link className="checkout_btn" to="checkout">
              Check out
            </Link>
          </div>

          
        </>
      )}
    </div>
  );
};

export default Cart;
