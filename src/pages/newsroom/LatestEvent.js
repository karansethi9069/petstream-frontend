import React, { useState, useEffect } from 'react';
import api from '../../api';
import newsroom from '../../assets/images/newsroom/events.png';
import ContactCTA from '../../components/home/ContactCTA';

const LatestEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 100);
  }, []);

  useEffect(() => {
    api
      .get('/api/events')
      .then((res) => setEvents(res.data))
      .catch((err) => setError(err.message || 'Failed to load events'))
      .finally(() => setLoading(false));
  }, []);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'scheduled':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'postponed':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-indigo-100 text-indigo-800';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-64">
        <img src={newsroom} alt="Latest Events Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Latest Events</h1>
          <div className="flex items-center text-white text-sm">
            <a href="/" className="hover:text-gray-200">Home</a>
            <span className="mx-2">›</span>
            <span>Latest Events</span>
          </div>
        </div>
      </section>

      {/* Event Content */}
      <main className="py-16 flex-grow bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {loading && <div className="text-center py-16">Loading latest events…</div>}
          {error && <div className="text-center text-red-600 py-16">{error}</div>}
          {events.length === 0 && !loading && (
            <div className="text-center py-16 text-gray-500 text-lg">No events available.</div>
          )}

          {events.map((event) => {
            const image_url = event.file;

            const dateTimeObj = new Date(event.event_date);
            const formattedDate = !isNaN(dateTimeObj)
              ? dateTimeObj.toLocaleDateString(undefined, {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              : event.event_date;

            const formattedTime = !isNaN(dateTimeObj)
              ? dateTimeObj.toLocaleTimeString(undefined, {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                })
              : '';

            const locationMatch = event.content?.match(/(?:at|in|@)\s+([^.!?\n]+)/i);
            const extractedLocation = locationMatch ? locationMatch[1].trim() : null;

            return (
              <article key={event.id} className="mb-16">
                {image_url && (
                  <img
                    src={image_url}
                    alt={event.title}
                    className="w-full h-auto object-cover mb-4 rounded-lg"
                  />
                )}

                <h2 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h2>

                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-gray-600 text-sm">
                    📅 {formattedDate} {formattedTime && `at ${formattedTime}`}
                  </span>
                  {event.status && (
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  )}
                  {extractedLocation && (
                    <span className="text-sm text-gray-500">📍 {extractedLocation}</span>
                  )}
                </div>

                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{event.content}</p>
                <hr className="mt-10 border-t" />
              </article>
            );
          })}
        </div>
      </main>

      <ContactCTA />
    </div>
  );
};

export default LatestEvent;

