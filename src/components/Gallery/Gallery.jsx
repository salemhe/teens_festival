import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const features = [
    { id: 1, title: "IMG-20240914-WA0045.jpg" },
    { id: 2, title: "IMG-20240914-WA0046.jpg" },
    { id: 3, title: "IMG-20240914-WA0047.jpg" },
    { id: 4, title: "IMG-20240914-WA0048.jpg" },
    { id: 5, title: "IMG-20240914-WA0049.jpg" },
    { id: 6, title: "IMG-20240914-WA0050.jpg" },
    { id: 7, title: "IMG-20240914-WA0051.jpg" },
    { id: 8, title: "IMG-20240914-WA0052.jpg" },
    { id: 9, title: "IMG-20240914-WA0053.jpg" },
    { id: 10, title: "IMG-20240914-WA0054.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Our Gallery
      </h2>
      <Slider {...settings} className="slick-slider">
        {features.map((feature) => (
          <div key={feature.id} className="p-4">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="h-48 w-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
                <img
                  alt=""
                  src={feature.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
