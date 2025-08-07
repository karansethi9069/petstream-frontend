import React, { useState, useEffect } from 'react';
import api from '../../api';
import newsroom from '../../assets/images/newsroom.jpg';

const CompanyUpdate = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedUpdate, setExpandedUpdate] = useState(null); // Track expanded update
  useEffect(() => {
    // Method 1: Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Method 2: Smooth scroll after a brief delay
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
    
    // Method 3: Using document body scroll
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  
  useEffect(() => {
    api
    .get('/api/companies')
      .then((res) => setUpdates(res.data))
      .catch((err) => {
        console.error(err);
        setError(err.message || 'Failed to load company updates');
      })
      .finally(() => setLoading(false));
  }, []);

  const toggleReadMore = (updateId) => {
    setExpandedUpdate((prev) => (prev === updateId ? null : updateId)); // Toggle expanded state
  };

  const formatDate = (date) => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      return ''; // If invalid date, return an empty string
    }
    return parsedDate.toLocaleDateString(undefined, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (loading) {
    return <div className="text-center py-16">Loading company updates…</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-16">{error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-4 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-gray-800">PSI</a>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="/products" className="text-gray-700 hover:text-blue-600 font-medium">Products</a>
            <a href="/consulting-services" className="text-gray-700 hover:text-blue-600 font-medium">Consulting &amp; Services</a>
            <a href="/newsroom" className="text-blue-600 font-medium">Newsroom</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
          </nav>
          <button className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-64">
        <img
          src={newsroom}
          alt="Company Update Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Company Update</h1>
          <div className="flex items-center text-white text-sm">
            <a href="/" className="hover:text-gray-200">Home</a>
            <span className="mx-2">›</span>
            <span>Company Update</span>
          </div>
        </div>
      </section>

      {/* Main Content – Company Updates Grid */}
      <main className="py-16 flex-grow bg-white">
        <div className="container mx-auto px-4">
          {updates.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No company updates available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {updates.map((update) => {
                const rawText = update.description ?? '';
                const snippet = rawText.length > 200 ? rawText.slice(0, 200) + '…' : rawText;

                return (
                  <div
                    key={update.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">{update.name}</h3>
                      </div>
                      <div className="text-gray-500 text-sm mb-3">
                        {formatDate(update.date) || 'No valid date'} {/* Use the formatDate function */}
                      </div>
                      {expandedUpdate === update.id ? (
                        <p className="text-gray-600 mb-4">{update.description}</p>
                      ) : (
                        <p className="text-gray-600 mb-4">{snippet}</p>
                      )}
                      <button
                        onClick={() => toggleReadMore(update.id)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {expandedUpdate === update.id ? 'Show Less' : 'Read More'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CompanyUpdate;
