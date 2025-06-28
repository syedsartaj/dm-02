import React, { useEffect, useState } from 'react';
import Bottom from '../components/Bottom';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

const categories = [
  'PC Updates',
  'Technology Updates',
  'Gadgets World',
  'Marketing Strategies',
  'Start Ups & Apps',
  'Artificial Intelligence',
  'Recent Updates'
];

const dummyPosts = Array.from({ length: 6 }, (_, i) => ({
  title: `Sample Blog Post ${i + 1}`,
  date: '2025-06-27',
  author: 'Sartaj',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: 'https://i.postimg.cc/g03h3n2B/img.jpg',
}));

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    setAllPosts(dummyPosts);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Header/>
      {categories.map((cat, idx) => (
        <Carousel key={idx} title={cat} posts={allPosts} />
      ))}
      <Bottom/>
    </div>
  );
}

export default Home;
