import React from "react";

const Hero = ({ scrollToProducts }) => {
  return (
    <section className="hero">

      <div className="hero-glow glow-left"></div>
      <div className="hero-glow glow-right"></div>

      <div className="hero-wrapper">
        <h1 className="hero-title">
          EXFRAG <br />
        Every piece has lived before<br />
        </h1>

        <h2 className="hero-subtitle">
          First Collection
        </h2>

        <div className="hero-btns">
            <button
            className="hero-btn"
            onClick={() => {
              const top = scrollToProducts?.current?.offsetTop || 0;
              window.scrollTo({ top, behavior: "smooth" });
              }}
            >
              Shop now
            </button>

            <a className="hero-about-btn" href="/about">Abaut us</a>
        </div> 
        
      </div>
    </section>
  );
};

export default Hero;
