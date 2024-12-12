import React, { useState } from "react";
import "./ProductsPage.css";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample product data with prices and locations
  const products = [
    {
      id: 1,
      name: "Golden Walampuri",
      category: "Walampuri",
      description: "Sacred and auspicious Walampuri.",
      price: "$120",
      location: "Sri Lanka",
      image: "https://media.istockphoto.com/id/494162338/photo/seashell-on-the-beach.jpg?s=612x612&w=is&k=20&c=0CJs2JnlLTgSZmpWmRKuZNRBY3wxpbThXwpeGGVI8Ok=",
    },
    {
      id: 2,
      name: "Silver Bangal",
      category: "Bangals",
      description: "Mystical silver Bangal.",
      price: "$80",
      location: "India",
      image: "https://meerzah.pk/cdn/shop/files/bn-697_2.jpg?v=1725007752&width=1024",
    },
    {
      id: 3,
      name: "Sandalwood Suwanda Kudu",
      category: "Suwanda Kudu",
      description: "Fragrant Sandalwood cones.",
      price: "$15",
      location: "Sri Lanka",
      image: "https://img.freepik.com/premium-photo/turmeric-powder-spoon-blue-background_739547-2375.jpg",
    },
    {
      id: 4,
      name: "Traditional Walampuri",
      category: "Walampuri",
      description: "Traditional design with celestial patterns.",
      price: "$150",
      location: "Maldives",
      image: "https://c4.wallpaperflare.com/wallpaper/130/114/462/seashell-on-the-beach-brown-sea-shell-wallpaper-preview.jpg",
    },
    {
      id: 5,
      name: "Gemstone Bangal",
      category: "Bangals",
      description: "Gemstone-encrusted Bangal.",
      price: "$200",
      location: "Thailand",
      image: "https://manubhai.in/SocialMedia/post_artworks/Wedding-10-3Jan2023.jpg",
    },
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="products-page">
      <div className="banner">
        <h1>Astrological Treasures</h1>
        <p>Explore sacred Walampuri, mystical Bangals, and aromatic Suwanda Kudu.</p>
      </div>
      <div className="category-tabs">
        {["All", "Walampuri", "Bangals", "Suwanda Kudu"].map((category) => (
          <button
            key={category}
            className={`category-tab ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-container">
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <div
                className="product-image"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="product-content">
                <h2 className="product-title">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: {product.price}</p>
        
                <button className="buy-button">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
