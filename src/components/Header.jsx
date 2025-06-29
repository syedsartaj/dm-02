import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext'; // using the global context

const Header = () => {
    const { sheetData, loading } = useData(); // get data and loading state from context
  const primaryLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contactus' },
  { label: 'Advertise', path: '/contact' },
  { label: 'Blogs', path: '/BlogList' }
];

  const categories = Array.from(
    new Set(sheetData.map(post => post.category?.trim()).filter(Boolean))
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handlePrimaryLinkClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

const handleCategoryClick = (category) => {
  const formattedCategory = category.replace(/\s+/g, '-');
  setMenuOpen(false);
  navigate(`/BlogList?cat=${encodeURIComponent(formattedCategory)}`);
};

  return (
    <header className="bg-blue-900 text-white py-4 shadow relative z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">PC World Solutions</h1>
        <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div
        className={`absolute w-full bg-blue-900 text-white left-0 top-full px-4 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col space-y-2">
          {primaryLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handlePrimaryLinkClick(link.path)}
              className="text-left hover:text-yellow-300 transition-colors"
            >
              {link.label}
            </button>
          ))}

          {categories.map((category, idx) => (
            <button
              key={`cat-${idx}`}
              onClick={() => handleCategoryClick(category)}
              className="text-left hover:text-yellow-300 transition-colors"
            >
              {category}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
