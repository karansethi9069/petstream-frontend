import React, { useState, useEffect } from 'react';
import api from '../../api';
import newsroom from '../../assets/images/newsroom/events.png';
import ContactCTA from '../../components/home/ContactCTA';

const ProductUpdate = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    api
      .get('/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message || 'Failed to load product updates'))
      .finally(() => setLoading(false));
  }, []);

  const toggleReadMore = (id) => {
    setExpandedItemId((prevId) => (prevId === id ? null : id));
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  if (loading) return <div className="text-center py-16">Loading product updates…</div>;
  if (error) return <div className="text-center text-red-600 py-16">{error}</div>;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-64">
        <img src={newsroom} alt="Product Updates Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Product Updates</h1>
          <div className="flex items-center text-white text-sm">
            <a href="/" className="hover:text-gray-200">Home</a>
            <span className="mx-2">›</span>
            <span>Product Updates</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 flex-grow bg-white">
        <div className="container mx-auto px-4">
          {products.length === 0 ? (
            <div className="text-center py-16 text-gray-500 text-lg">No product updates available.</div>
          ) : (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products.slice(0, visibleCount).map((product) => {
                  const isExpanded = expandedItemId === product.id;
                  const isLong = product.description?.length > 200;

                  return (
                    <article
                      key={product.id}
                      className="border rounded-md shadow hover:shadow-lg transition p-4 bg-white"
                    >
                      <img
                        src={product.file}
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-md mb-3"
                      />
                      <h2 className="text-xl font-semibold text-gray-800 mb-1">{product.title || 'Untitled'}</h2>
                      <p className="text-gray-500 text-sm mb-2">
                        {new Date(product.release_date).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700 text-sm whitespace-pre-line">
                        {isExpanded || !isLong
                          ? product.description
                          : `${product.description?.substring(0, 200)}...`}
                        {isLong && (
                          <button
                            onClick={() => toggleReadMore(product.id)}
                            className="ml-2 text-blue-600 hover:underline text-sm"
                          >
                            {isExpanded ? 'Show Less' : 'Read More'}
                          </button>
                        )}
                      </p>
                    </article>
                  );
                })}
              </div>

              {visibleCount < products.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={handleLoadMore}
                    className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 focus:outline-none"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <ContactCTA />
    </div>
  );
};

export default ProductUpdate;

