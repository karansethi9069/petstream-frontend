import React, { useState, useEffect } from 'react';
import api from '../../api';
import newsroom from '../../assets/images/newsroom.jpg';

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null); // Track expanded project
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
    .get('/api/projects')
      .then((res) => setProjects(res.data))
      .catch((err) => {
        console.error(err);
        setError(err.message || 'Failed to load projects');
      })
      .finally(() => setLoading(false));
  }, []);

  const toggleReadMore = (projectId) => {
    setExpandedProject((prev) => (prev === projectId ? null : projectId)); // Toggle expanded state
  };

  if (loading) {
    return <div className="text-center py-16">Loading recent projects…</div>;
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
          src={newsroom}
          alt="Recent Projects Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Recent Projects</h1>
          <div className="flex items-center text-white">
            <a href="/" className="hover:text-gray-200">Home</a>
            <span className="mx-2">›</span>
            <span>Recent Projects</span>
          </div>
        </div>
      </section>

      {/* Main Content – Projects List */}
      <main className="py-16 flex-grow bg-white">
        <div className="container mx-auto px-4">
          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              // Title
              const title = project.name ?? project.title ?? 'Untitled Project';

              // Date formatting
              const rawDate = project.date ?? project.project_date ?? '';
              const dt = new Date(rawDate);
              const formattedDate = !isNaN(dt)
                ? dt.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })
                : rawDate;

              // Text snippet
              const text = project.description ?? project.tlb_cms_text ?? '';
              const snippet = text.length > 200 ? text.slice(0, 200) + '…' : text;

              return (
                <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                  <div className="relative">
                    {/* Project Image (if available) */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    {/* Overlay effect for the image */}
                    <div className="absolute inset-0 bg-black bg-opacity-30" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                    <div className="text-gray-500 text-sm mb-3">{formattedDate}</div>
                    {/* Conditionally render full description or snippet */}
                    {expandedProject === project.id ? (
                      <p className="text-gray-600 mb-4">{project.description}</p>
                    ) : (
                      <p className="text-gray-600 mb-4">{snippet}</p>
                    )}
                    {/* "Read More" button */}
                    <button
                      onClick={() => toggleReadMore(project.id)}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {expandedProject === project.id ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecentProjects;
