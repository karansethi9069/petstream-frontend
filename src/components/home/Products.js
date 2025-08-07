import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/products';

const Products = () => {
  // Get featured products
  const featuredProducts = productsData
    .filter(product => product.isFeatured)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .slice(0, 3); // Limit to 3 products for the homepage

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We represent world-class manufacturers of capital equipment and tools for the beverage, 
            packaging, healthcare, and plastics industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.images.find(img => img.isPrimary)?.url || product.images[0]?.url} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <Link 
                  to={`/products/${product.slug}`} 
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="btn btn-primary"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;