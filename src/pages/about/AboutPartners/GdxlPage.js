import React from 'react';
import { Link } from 'react-router-dom';

const GdxlPage= () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content area with proper padding and scrolling */}
      <main className="flex-1 container mx-auto px-4 py-8 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
          
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are dedicated to providing exceptional pet care solutions through 
              innovative technology that connects pet owners with their beloved animals.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Team</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our passionate team consists of animal lovers, technology experts, and 
              customer service professionals who work together to deliver the best 
              experience for you and your pets.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Our History</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2020, we began with a simple idea: to help pet owners stay connected
              with their pets when they couldn't be physically present. Since then, we've grown
              to serve thousands of happy customers and their pets.
            </p>
          </section>
          
          <div className="mt-8 pt-4 border-t border-gray-200">
            <Link 
              to="/about" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Back to About
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GdxlPage;