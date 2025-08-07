// File: src/components/NewsEvents.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function newsEvents() {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [errorNews, setErrorNews] = useState(null);
  const [errorEvents, setErrorEvents] = useState(null);

  useEffect(() => {
    // fetch news
api.get('/api/news')
      .then(res => {
        setNews(res.data);
      })
      .catch(err => {
        console.error(err);
        setErrorNews(err.message);
      })
      .finally(() => {
        setLoadingNews(false);
      });

    // fetch events
  api.get('/api/events')
      .then(res => {
        setEvents(res.data);
      })
      .catch(err => {
        console.error(err);
        setErrorEvents(err.message);
      })
      .finally(() => {
        setLoadingEvents(false);
      });
  }, []);

  if (loadingNews || loadingEvents) {
    return <p className="text-center py-8">Loading…</p>;
  }

  if (errorNews || errorEvents) {
    return (
      <div className="text-red-600 p-4">
        {errorNews && <p>Error loading news: {errorNews}</p>}
        {errorEvents && <p>Error loading events: {errorEvents}</p>}
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* News Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map(item => (
            <article key={item.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 mb-1">
                {new Date(item.published_date).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
              <h3 className="text-lg font-medium mb-2">{item.headline}</h3>
              <p className="text-gray-700 line-clamp-3 mb-3">
                {item.content.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 100) + '…'}
              </p>
              <Link
                to={`/news/${item.id}`}
                className="text-blue-600 hover:underline text-sm"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="space-y-6">
          {events.map(evt => (
            <div key={evt.id} className="border-l-4 border-blue-600 pl-4 hover:border-blue-800 transition-colors">
              <p className="text-sm text-gray-500">
                {new Date(evt.event_date).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
                {evt.time && ` · ${evt.time}`}
              </p>
              <h3 className="text-xl font-medium">{evt.title}</h3>
              {evt.location && <p className="text-gray-700 mb-1">{evt.location}</p>}
              {evt.description && <p className="text-gray-600 mb-2">{evt.description}</p>}
              {evt.registrationLink && (
                <a
                  href={evt.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                >
                  Register
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

//export default newsEvents;