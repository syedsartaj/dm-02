import React from 'react';
const Bottom = () => {
const categories = [
  'PC Updates',
  'Technology Updates',
  'Gadgets World',
  'Marketing Strategies',
  'Start Ups & Apps',
  'Artificial Intelligence',
  'Recent Updates'
];

 return (
    <footer className="bg-blue-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">About Us</h4>
            <p className="text-sm text-gray-300">PC World Solutions is your go-to source for tech updates and strategies.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Categories</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {categories.map((cat, idx) => <li key={idx}>{cat}</li>)}
            </ul>
          </div>
        </div>
      </footer>
);

};
export default Bottom;