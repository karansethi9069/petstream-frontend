import React, { useState, useEffect } from 'react';
import trainingBg from '../../assets/images/trng.jpeg';
import api from '../../api'; // Adjust path based on your file structure

const TrainingUpdate = () => {
  const [updates, setUpdates] = useState([]);
  const [allUpdates, setAllUpdates] = useState([]); // Store all training updates
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleUpdates, setVisibleUpdates] = useState(5); // Initially show 5 updates
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
    api.get('/api/trainings') // Changed from axios.get to api.get
      .then((res) => {
        setAllUpdates(res.data); // Save all updates in a separate state
        setUpdates(res.data.slice(0, visibleUpdates)); // Show only the first few initially
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || 'Failed to load training updates');
      })
      .finally(() => setLoading(false));
  }, [visibleUpdates]); // Effect runs when visibleUpdates changes

  const toggleReadMore = (updateId) => {
    setExpandedUpdate((prev) => (prev === updateId ? null : updateId)); // Toggle expanded state
  };

  const handleLoadMore = () => {
    const nextVisible = visibleUpdates + 5; // Increase by 5 updates
    setVisibleUpdates(nextVisible);
    setUpdates(allUpdates.slice(0, nextVisible)); // Show the next set of updates
  };

  // Format Date function with validation
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
    return <div className="text-center py-16">Loading training updates…</div>;
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
            <a href="/newsroom" className="text-gray-700 hover:text-blue-600 font-medium">Newsroom</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
          </nav>
          <button className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Banner with background image */}
      <section className="relative h-96">
        <img
          src={trainingBg}
          alt="Training Update Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Training Update</h1>
          <div className="flex items-center text-white">
            <a href="/" className="hover:text-gray-200">Home</a>
            <span className="mx-2">›</span>
            <span>Training Update</span>
          </div>
        </div>
      </section>

      {/* Main Content – Training Updates Grid */}
      <main className="py-16 flex-grow bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update) => {
              const title = update.name ?? update.title ?? 'Untitled Training';

              // Date formatting (safe fallback)
              const rawDate = update.date ?? update.scheduled_date ?? '';
              const formattedDate = formatDate(rawDate) || 'No valid date'; // Use the formatDate function

              // Text snippet
              const bodyText = update.description ?? update.tlb_cms_text ?? '';
              const snippet = bodyText.length > 200
                ? bodyText.slice(0, 200) + '…'
                : bodyText;

              return (
                <div
                  key={update.id}
                  className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">{formattedDate}</div>
                    <a href={`/training-update/${update.id}`} className="block">
                      <h4 className="text-xl font-bold text-gray-800 hover:text-blue-700 transition-colors">
                        {title}
                      </h4>
                    </a>
                  </div>
                  {expandedUpdate === update.id ? (
                    <p className="text-gray-600 mb-4">{update.description}</p>
                  ) : (
                    <p className="text-gray-600 mb-4">{snippet}</p>
                  )}

                  {/* Updated "Read More" Button styled like "Load More" */}
                  <div className="text-center mt-8">
                    <button
                      onClick={() => toggleReadMore(update.id)}
                      className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none"
                    >
                      {expandedUpdate === update.id ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button for fetching more updates */}
          {allUpdates.length > visibleUpdates && (
            <div className="text-center mt-8">
               <button
                onClick={handleLoadMore}
                className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none"
              >
                Load More
              </button>


            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TrainingUpdate;