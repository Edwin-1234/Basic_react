import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        if (response.status !== 200) {
          throw new Error("Failed to fetch products");
        }
        setProducts(response.data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '2rem'
     }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>All Products</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
         maxWidth: '1200px',        // ✅ limits grid width
          margin: '2rem auto',       // ✅ centers the grid
          padding: '0 1rem'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            textAlign: 'center',
            backgroundColor: '#fff',
            overflow: 'hidden'  // prevents image overflow
            }}>

            <img 
                src={product.image} 
                alt={product.title} 
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'contain',
                    marginBottom: '1rem',
                    borderRadius: '8px'
                }} 
            />

            <h2 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{product.title}</h2>
            <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem' }}>
              {product.description.length > 100
                ? product.description.substring(0, 100) + '...'
                : product.description}
            </p>
            <p style={{ fontWeight: 'bold', color: 'green' }}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
