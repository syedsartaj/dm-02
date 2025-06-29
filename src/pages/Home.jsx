import React from 'react';
import Bottom from '../components/Bottom';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import { useData } from '../DataContext'; // using the global context

const Home = () => {
  const { sheetData, loading } = useData(); // get data and loading state from context

  // Extract unique categories from the sheet
  const categories = Array.from(
    new Set(sheetData.map(post => post.category?.trim()).filter(Boolean))
  );

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Header />

      {loading ? (
        <div className="text-center py-10 font-semibold text-lg">Loading blog posts...</div>
      ) : (
        categories.map((cat, idx) => {
          const postsForCategory = sheetData.filter(
            post => post.category?.trim() === cat
          );

          return (
            <Carousel key={idx} title={cat} posts={postsForCategory} />
          );
        })
      )}

      <Bottom />
    </div>
  );
};

export default Home;
