import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProductSlider.css";

// Import SVG files
import Pcard1 from "../../assets/images/Pcard1.png";
import Pcard2 from "../../assets/images/Pcard2.png";
import Pcard3 from "../../assets/images/Pcard3.png";
import Pcard4 from "../../assets/images/Pcard4.png";

// Product data
const products = [
  {
    id: 1,
    name: "The Divine Shell",
    description:
      "A rare and sacred conch, Walampuri is known for its spiritual significance, attracting prosperity, positivity, and divine blessings.",
    image: Pcard1,
    additionalImage:
      "https://media.istockphoto.com/id/177983583/photo/queen-conch-on-the-dock.jpg?s=612x612&w=0&k=20&c=jf8TyckwZy-XRSL1G8Tjo8vxMRisZ7P-dKTtCFefoBc=",
  },
  {
    id: 2,
    name: "Bangles ",
    description:
      "Worn for spiritual and astrological benefits, these bangles enhance positive energy, ward off negativity, and bring balance to life.",
    image: Pcard2,
    additionalImage:
      "https://content.jdmagicbox.com/quickquotes/images_main/designer-gold-bangles-2209676315-mon8pgvj.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
  },
  {
    id: 3,
    name: "Suwandakudu",
    description:
      "A traditional incense with a soothing aroma, Suwandakudu purifies the environment and uplifts the mind, body, and soul.",
    image: Pcard3,
    additionalImage:
      "https://media.istockphoto.com/id/586705490/photo/cocoa-powder-into-a-bowl-and-spoon.jpg?s=612x612&w=is&k=20&c=eb3sRY3398EM4w1MNcqZ71d98pM8bwOQW4Th0d1pmGo=",
  },
  {
    id: 4,
    name: "Astrology Books",
    description:
      "Discover books filled with astrological insights, remedies, and guidance to help you align with cosmic energies and destiny.",
    image: Pcard4,
    additionalImage:
      "https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg",
  },
];

const ProductSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="product-section">
      <h3 className="section-sub-title" data-aos="fade-up">
        Exclusive Deals Just for You
      </h3>
      <h2 className="section-title" data-aos="fade-right">
        Our Featured Products
      </h2>
      <div
        className="product-container-modern"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            data-aos="fade-up"
            data-aos-delay={500 + product.id * 100}
          >
            <img
              src={product.additionalImage}
              alt={`Additional for ${product.name}`}
              className="product-additional-image"
            />
            <div className="svg-container">
              <img src={product.image} alt={product.name} className="product-svg" />
            </div>

            <div className="product-header-info">
              <div className="product-name">{product.name}</div>
            </div>
            <p className="product-description">{product.description}</p>
            <button className="product-button">More Info</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
