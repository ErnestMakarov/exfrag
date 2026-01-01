import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../data/products"
import { useCartContext } from "../../utils/CartContext"
import Stable from "../../img/size-img.png";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const { addToCart } = useCartContext();

  const [selectedImage, setSelectedImage] = useState(product?.img || "");
  const [added, setAdded] = useState(false);

  if (!product) return <h2>Product not found</h2>;

  const flyToCart = () => {
    const img = document.querySelector(".main-img");
    const cartIcon = document.querySelector(".shop-cart-button");

    if (!img || !cartIcon) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    const imgClone = img.cloneNode(true);
    imgClone.style.position = "fixed";
    imgClone.style.left = imgRect.left + "px";
    imgClone.style.top = imgRect.top + "px";
    imgClone.style.width = imgRect.width + "px";
    imgClone.style.transition = "all 0.7s ease";
    imgClone.style.zIndex = 9999;
    imgClone.style.pointerEvents = "none";

    document.body.appendChild(imgClone);

    setTimeout(() => {
      imgClone.style.left = cartRect.left + "px";
      imgClone.style.top = cartRect.top + "px";
      imgClone.style.width = "20px";
      imgClone.style.opacity = "0.2";
    }, 30);

    setTimeout(() => imgClone.remove(), 800);
  };

  const handleAdd = () => {
    if (added) return;

    addToCart(product, null, 1);
    flyToCart();
    setAdded(true);
  };

  return (
    <div className="full-item">
      <div className="gallery">
        <img src={selectedImage} className="main-img" alt={product.title} />

        <div className="small-images">
          {[product.img, ...(product.otherImages || [])].map((img, i) => (
            <img
              key={i}
              src={img}
              className={selectedImage === img ? "active" : ""}
              onClick={() => setSelectedImage(img)}
              alt=""
            />
          ))}
        </div>
      </div>

      <div className="info">
        <h2>{product.title}</h2>
        <p className="desc">{product.desc}</p>
        <b className="price">{product.price}€</b>
        
        <div class="size-guide">
          <div class="size-guide-title">SIZE GUIDE (WAIST)</div>

          <div class="size-row">
            <span>72–76 cm</span><span>XS</span>
          </div>
          <div class="size-row">
            <span>77–81 cm</span><span>S</span>
          </div>
          <div class="size-row">
            <span>82–86 cm</span><span>M</span>
          </div>
          <div class="size-row">
            <span>87–91 cm</span><span>L</span>
          </div>
          <div class="size-row">
            <span>92–97 cm</span><span>XL</span>
          </div>
          <div class="size-row">
            <span>98–103 cm</span><span>XXL</span>
          </div>
          <div class="size-row">
            <span>104–110 cm</span><span>XXXL</span>
          </div>

          <div class="size-note">
            Sizes are approximate. Fit is determined by waist.
          </div>
        </div>

        <button className="add-btn" disabled={added} onClick={handleAdd}>
          {added ? "added" : "add to cart"}
        </button>
      </div>
    </div>
  );
}
