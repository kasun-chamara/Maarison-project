import React from "react";
import "./Service.css";
import placeholderImage from "../../assets/images/src.jpg"; // Replace with the correct image path

const ServicePage = () => {
  const services = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2944/2944527.png",
      title: "Mobile Development",
      description: "Sample text. Click to edit the text box.",
      link: "#",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2910/2910763.png",
      title: "Mobility Services",
      description: "Sample text. Click to edit the text box.",
      link: "#",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3191/3191175.png",
      title: "Software Consulting",
      description: "Sample text. Click to edit the text box.",
      link: "#",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1032/1032430.png",
      title: "Web Development",
      description: "Build high-performing web applications with modern frameworks.",
      link: "#",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      title: "UI/UX Design",
      description: "Create user-friendly and visually appealing interfaces.",
      link: "#",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3653/3653788.png",
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing for your business.",
      link: "#",
    },
  ];

  return (
    <div className="page-container">
      <h1 className="header-title">Our Services</h1>
      <img src={placeholderImage} alt="Header" className="top-image" />
      <div className="card-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.icon} alt={`${service.title} icon`} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link}>MORE</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
