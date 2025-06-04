import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="mb-4">Explore our wide range of products from the best categories.</p>

        <Link
          to="/home"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          View Products
        </Link>
      </div>
    </div>
  );
};

export default App;
