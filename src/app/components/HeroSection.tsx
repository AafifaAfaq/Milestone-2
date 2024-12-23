import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section
        className="hero"
        style={{ backgroundImage: "url(background.jpg)" }}
      >
        <div className="hero-text">
          <h1 className="fade-in">"Discover the Elegance of The Jewellery"</h1>
          <p>
            "Explore our exquisite collection of jewellery, designed to add a
            sparkle to your life. Step into a world of beauty and sophistication
            with our exquisite collection. Crafted with precision and designed
            to perfection, our jewelry celebrates your unique style and grace.
            Whether it's a special occasion or an everyday moment, let your
            shine tell your story. "
          </p>
          <button>Shop now</button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
