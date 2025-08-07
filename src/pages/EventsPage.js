// File: pages/EventsPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { eventsData } from '../data/newsEvents';

const EventsPage = () => {
  const [selectedType, setSelectedType] = useState('All');
  
  // Get unique event types
  const eventTypes = ['All', ...new Set(eventsData.map(event => event.type))];
  
  // Filter events based on selected type
  const filteredEvents = selectedType === 'All' 
    ? eventsData 
    : eventsData.filter(event => event.type === selectedType);

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-orange-100">Join us at industry events, workshops, and conferences</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Event Type Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  selectedType === type
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-500 text-white rounded-lg p-4 mr-6 text-center min-w-[80px]">
                        <div className="text-2xl font-bold">{event.date.split(' ')[0]}</div>
                        <div className="text-sm">{event.date.split(' ')[1]}</div>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h2>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {formatDate(event.fullDate)}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {event.time}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-semibold">
                        {event.type}
                      </span>
                      <Link 
                        to={event.registrationLink}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-semibold text-sm"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Don't Miss Out!</h3>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest events and workshops. Subscribe to our newsletter to receive event notifications.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-semibold">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;