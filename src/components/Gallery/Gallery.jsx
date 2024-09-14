import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  // Define an array of features
  const features = [
    { id: 1, title: "Fast Performance" },
    { id: 2, title: "Responsive Design" },
    { id: 3, title: "User-Friendly Interface" },
    { id: 4, title: "Secure Data Handling" },
    { id: 5, title: "Seamless Integrations" },
    { id: 6, title: "Scalable Architecture" },
  ];

  // Slider settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Default number of slides
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // If screen size <= 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 768, // If screen size <= 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Gallery
      </h2>
      <Slider {...settings} className="slick-slider">
        {features.map((feature) => (
          <div key={feature.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center h-48 hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
