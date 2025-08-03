import { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-secondary p-6 rounded-lg shadow-md">
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
          <h2 className="font-display text-xl mb-2">{product.title}</h2>
          <p className="mb-4">{product.description.substring(0, 100)}...</p>
          <div className="flex justify-between items-center">
            <span className="text-accent font-bold">${product.price}</span>
            <button className="bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}