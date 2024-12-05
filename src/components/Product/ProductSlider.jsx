import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProductSlider.css";

// Import SVG files
import Pcard1 from "../../assets/images/Pcard1.svg";
import Pcard2 from "../../assets/images/Pcard2.svg";
import Pcard3 from "../../assets/images/Pcard3.svg";

// Product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$20",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed officia minima nesciunt eum ducimus cumque earum. Iste minima distinctio nostrum in quae beatae, veritatis inventore magni, magnam corporis maxime molestias.",
    image: Pcard1,
    additionalImage: "https://media.istockphoto.com/id/177983583/photo/queen-conch-on-the-dock.jpg?s=612x612&w=0&k=20&c=jf8TyckwZy-XRSL1G8Tjo8vxMRisZ7P-dKTtCFefoBc=",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$25",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed officia minima nesciunt eum ducimus cumque earum. Iste minima distinctio nostrum in quae beatae, veritatis inventore magni, magnam corporis maxime molestias.",
    image: Pcard2,
    additionalImage: "https://content.jdmagicbox.com/quickquotes/images_main/designer-gold-bangles-2209676315-mon8pgvj.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed officia minima nesciunt eum ducimus cumque earum. Iste minima distinctio nostrum in quae beatae, veritatis inventore magni, magnam corporis maxime molestias.",
    image: Pcard3,
    additionalImage: "https://media.istockphoto.com/id/586705490/photo/cocoa-powder-into-a-bowl-and-spoon.jpg?s=612x612&w=is&k=20&c=eb3sRY3398EM4w1MNcqZ71d98pM8bwOQW4Th0d1pmGo=",
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
      <div className="product-container-modern" data-aos="fade-up" data-aos-delay="400">
        {products.map((product) => (
          <div className="product-card" key={product.id} data-aos="fade-up" data-aos-delay={500 + product.id * 100}>
            <div className="product-header">
              <div className="svg-container">
                <img src={product.image} alt={product.name} className="product-svg" />
              </div>
              <div className="product-header-info">
                <div className="product-price">{product.price}</div>
                <div className="product-name">{product.name}</div>
              </div>
            </div>
            <p className="product-description">{product.description}</p>
            <img
              src={product.additionalImage}
              alt={`Additional for ${product.name}`}
              className="product-additional-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
