import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Cart from './Cart';
import { useCartContext } from '../utils/CartContext';
import Logo from "../img/exfrag-logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { cart, removeFromCart } = useCartContext();

    return (
        <header>
            <div className="header_container">

                <NavLink className='logo' to="/">
                    <h2>EXFRAG</h2>
                </NavLink>

                <div className="header-right">
                    

                    <div
                        className={`shop-cart-button header-cart-icon ${cartOpen ? "active" : ""}`}
                        onClick={() => setCartOpen(!cartOpen)}
                    >
                        <FaShoppingCart className="shop-cart-button-pic" />

                        {cart.length > 0 && (
                            <div className="lenght-amount">{cart.length}</div>
                        )}
                    </div>

                    <div className={`shop-cart ${cartOpen ? "open" : ""}`}>
                        <Cart cartItems={cart} removeFromCart={removeFromCart} />
                    </div>
                </div>
                
            </div>
        </header>
    );
}
