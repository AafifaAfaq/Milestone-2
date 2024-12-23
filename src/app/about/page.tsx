import React from "react";

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="about" style={{ backgroundImage: "url(p1.avif)" }}>
        <div className="about-content">
          <h2 className="fade-in">About Us</h2>
          <p>
            Welcome to <strong>The Jewellery</strong>, where elegance meets craftsmanship. 
            We specialize in creating timeless jewelry pieces that celebrate individuality and style. 
            With a passion for artistry and attention to detail, our collections are designed to inspire 
            and complement every occasion. From sparkling gemstones to intricately crafted metals, each 
            piece tells a story of beauty and sophistication.
          </p>
          <p>
            At <strong>The Jewellery</strong>, we believe that jewelry is more than an accessory; 
            it's a reflection of who you are. Explore our collections and let us be a part of your journey to shine brighter.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="mission-vision">
          <h2 className="fade-in">Mission & Vision</h2>
          <p>
            Our <strong>mission</strong> is to craft exquisite, high-quality jewelry that celebrates individuality and 
            timeless elegance. We aim to inspire confidence and joy in every customer by offering ethically sourced, 
            meticulously designed pieces that reflect their unique stories and cherished moments.
          </p>
          <p>
            Our <strong>vision</strong> is to be a global leader in the jewelry industry, renowned for innovation, 
            craftsmanship, and sustainability. We strive to create a world where beauty and ethical responsibility 
            coexist, empowering individuals to express their style and values through our exceptional collections.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="core-values">
          <h2 className="fade-in">Our Core Values</h2>
          <ul>
            <li><strong>Craftsmanship:</strong> Exceptional quality and attention to detail in every piece.</li>
            <li><strong>Innovation:</strong> Continuously pushing the boundaries of jewelry design.</li>
            <li><strong>Sustainability:</strong> Commitment to ethical sourcing and eco-friendly practices.</li>
            <li><strong>Customer First:</strong> Creating memorable experiences for our valued customers.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
