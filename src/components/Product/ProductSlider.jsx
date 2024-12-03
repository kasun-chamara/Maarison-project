import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProductSlider.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$20",
    description: "This is a short description of Product 1, highlighting its features and benefits.",
    image: "https://images.fineartamerica.com/images-medium-large-5/beautiful-sea-shell-boon-mee.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$25",
    description: "This is a short description of Product 2, highlighting its features and benefits.",
    image: "https://www.bhindi.com/upload/category/bhindi-set-of-bangles-1728070066.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30",
    description: "This is a short description of Product 3, highlighting its features and benefits.",
    image: "https://img.freepik.com/premium-photo/curry-powder-bowl_762785-234310.jpg",
  },
  {
    id: 4,
    name: "Product 1",
    price: "$20",
    description: "This is a short description of Product 1, highlighting its features and benefits.",
    image: "https://images.fineartamerica.com/images-medium-large-5/beautiful-sea-shell-boon-mee.jpg",
  },
  {
    id: 5,
    name: "Product 2",
    price: "$25",
    description: "This is a short description of Product 2, highlighting its features and benefits.",
    image: "https://www.bhindi.com/upload/category/bhindi-set-of-bangles-1728070066.jpg",
  },
  {
    id: 6,
    name: "Product 3",
    price: "$30",
    description: "This is a short description of Product 3, highlighting its features and benefits.",
    image: "https://img.freepik.com/premium-photo/curry-powder-bowl_762785-234310.jpg",
  },
];

const ProductSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const showDetails = (productName) => {
    alert(`Details of ${productName} will be shown here.`);
  };

  return (
    <section className="product-section">
      <h3 className="section-sub-title" data-aos="fade-up">Exclusive Deals Just for You</h3>
      <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">Our Featured Products</h2>
      <div className="product-container-modern" data-aos="fade-up" data-aos-delay="400">
        {products.map((product) => (
          <div className="product-card" key={product.id} data-aos="fade-up" data-aos-delay={500 + product.id * 100}>
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">{product.price}</span>
            </div>
            <p className="product-description">{product.description}</p>
            <button
              className="details-button"
              onClick={() => showDetails(product.name)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
      <div className="more-products-section">
        <p className="discover-text">Discover more products</p>
        <button className="more-products-button">More Products</button>
      </div>
    </section>
  );
};

export default ProductSection;
