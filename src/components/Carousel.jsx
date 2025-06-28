import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


const Carousel = ({ title, posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="max-w-6xl mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">{title}</h2>
      <Slider {...settings}>
        {posts.map((post, idx) => (
          <div key={idx} className="min-w-[300px] bg-white rounded-lg shadow-md p-4 mx-2 text-center transition-transform duration-200 hover:-translate-y-1">
            <img src={post.image} alt={post.title} className="w-full rounded mb-2" />
            <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{post.date} by {post.author}</p>
            <p className="text-sm text-gray-700">{post.excerpt}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default Carousel;