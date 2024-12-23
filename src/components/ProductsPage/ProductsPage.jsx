import React, { useState } from "react";
import "./ProductsPage.css";
import BangalsImage from "../../assets/images/Bangals-01.png";
import BangalsImage02 from "../../assets/images/Bangals-02.png";
import BangalsImage03 from "../../assets/images/Bangals-03.png";
import BangalsImage04 from "../../assets/images/Bangals-04.png";
import BangalsImage05 from "../../assets/images/Bangals-05.png";
import BangalsImage06 from "../../assets/images/Bangals-06.png";
import BangalsImage07 from "../../assets/images/Bangals-07.png";
import BangalsImage08 from "../../assets/images/Bangals-08.png";
import BangalsImage09 from "../../assets/images/Bangals-09.png";
import BangalsImage10 from "../../assets/images/Bangals-10.png";

import walampuri01 from "../../assets/images/walampuri-01.png";
import walampuri02 from "../../assets/images/walampuri-02.png";
import walampuri03 from "../../assets/images/walampuri-03.png";
import walampuri04 from "../../assets/images/walampuri-04.png";

import Books01 from "../../assets/images/Book-01.png";
import Books02 from "../../assets/images/Book-02.png";
import Books03 from "../../assets/images/Book-03.png";
import Books04 from "../../assets/images/Book-04.png";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Golden Walampuri",
      category: "Walampuri",
      description: "Sacred and auspicious Walampuri.",
      price: "$120",

      image: walampuri01,
    },
    {
      id: 2,
      name: "Silver Bangal",
      category: "Bangals",
      description: "Mystical silver Bangal.",
      price: "$80",

      image: BangalsImage,
    },
    {
      id: 3,
      name: "Suwanda Kudu",
      category: "Suwanda Kudu",
      description: "Fragrant Sandalwood cones.",
      price: "$15",
   
      image:
        "https://img.freepik.com/premium-photo/turmeric-powder-spoon-blue-background_739547-2375.jpg",
    },
     {
      id: 19,
      name: "Traditional Book",
      category: "Books",
      description: "Traditional design with celestial patterns.",
      price: "$150",

      image: Books04,
    },

    {
      id: 5,
      name: "Traditional Walampuri",
      category: "Walampuri",
      description: "Traditional design with celestial patterns.",
      price: "$150",

      image: walampuri02,
    },
    {
      id: 6,
      name: "Gemstone Bangal",
      category: "Bangals",
      description: "Gemstone-encrusted Bangal.",
      price: "$200",
     
      image: BangalsImage03,
    },
    {
      id: 7,
      name: "Gemstone Bangal",
      category: "Bangals",
      description: "Gemstone-encrusted Bangal.",
      price: "$200",

      image: BangalsImage02,
    },    {
      id: 4,
      name: "Traditional Book",
      category: "Books",
      description: "Traditional design with celestial patterns.",
      price: "$150",

      image: Books01,
    },
    {
      id: 8,
      name: "Gemstone Bangal",
      category: "Bangals",
      description: "Gemstone-encrusted Bangal.",
      price: "$200",
    
      image: BangalsImage04,
    },
    {
      id: 9,
      name: "Gemstone Bangal",
      category: "Bangals",
      description: "Gemstone-encrusted Bangal.",
      price: "$200",
 
      image: BangalsImage05,
    },
    {
      id: 10,
      name: "Gemstone Bangal",
      category: "Bangals",
      description: "Gemstone-encrusted Bangal.",
      price: "$200",
    
      image: BangalsImage06,
    },
    {
      id: 11,
      name: "Golden Walampuri",
      category: "Walampuri",
      description: "Sacred and auspicious Walampuri.",
      price: "$120",
   
      image: walampuri04,
    },
    {
      id: 12,
      name: "Gemstone Bangal",
      category: "Bangals",
      description: "Gemstone-encrusted Bangal.",
      price: "$200",

      image: BangalsImage07,
    },
       {
      id: 18,
      name: "Traditional Book",
      category: "Books",
      description: "Traditional design with celestial patterns.",
      price: "$150",
      
      image: Books03,
    },
    {
      id: 13,
      name: "Gemstone Bangal",
      category: "Bangals",
      description: "Gemstone-encrusted Bangal.",
      price: "$200",
     
      image: BangalsImage08,
    },
    {
      id: 14,
      name: "Golden Walampuri",
      category: "Walampuri",
      description: "Sacred and auspicious Walampuri.",
      price: "$120",
   
      image: walampuri03,
    },
    {
      id: 15,
      name: "Gemstone Bangal",
      category: "Bangals",
      description: "Gemstone-encrusted Bangal.",
      price: "$200",
     
      image: BangalsImage09,
    },
    {
      id: 16,
      name: "Gemstone Bangal",
      category: "Bangals",
      description: "Gemstone-encrusted Bangal.",
      price: "$200",
     
      image: BangalsImage10,
    },
     {
      id: 17,
      name: "Traditional Book",
      category: "Books",
      description: "Traditional design with celestial patterns.",
      price: "$150",
      
      image: Books02,
    },
  
   
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="products-page">
      {/* Header Banner */}
      <div className="banner">
        <h1>Astrological Treasures</h1>
        <p>
          Discover rare and sacred Walampuri, elegant Bangals, and Suwanda Kudu
          crafted with care.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="category-tabs">
        {["All", "Walampuri", "Bangals", "Suwanda Kudu", "Books"].map((category) => (
          <button
            key={category}
            className={`category-tab ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-container">
        {filteredProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <div
              className="product-image"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="price-location">
                <span className="price">{product.price}</span>
             <button className="buy-button" >
  <i className="fa fa-shopping-cart" style={{ fontSize: '15px', paddingRight: '10px',}}></i> Buy Now
</button>
              </div>
         



            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
