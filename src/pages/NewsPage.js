// File: pages/NewsPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsEvents';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(newsData.map(news => news.category))];
  
  // Filter news based on selected category
  const filteredNews = selectedCategory === 'All' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl text-orange-100">Stay updated with our latest developments and industry insights</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <article 
              key={news.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {news.image && (
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                    {news.date}
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-green-600 transition-colors">
                  <Link to={`/news/${news.slug}`}>{news.title}</Link>
                </h2>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">By {news.author}</span>
                  <Link 
                    to={`/news/${news.slug}`}
                    className="text-green-600 hover:text-orange-700 font-semibold text-sm uppercase tracking-wide transition-colors inline-flex items-center group"
                  >
                    Read More 
                    <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button (if you want pagination) */}
        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-semibold">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;