import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if user has already accepted terms
  useEffect(() => {
    const hasAccepted = localStorage.getItem('terms_accepted');
    if (!hasAccepted) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('terms_accepted', 'true');
    localStorage.setItem('terms_accepted_date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
    // User has declined - just hide the banner without any message
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 max-w-sm bg-gray-900 text-white rounded-lg shadow-2xl border border-gray-700 z-[9999] animate-fade-in cookie-banner">
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={16} />
      </button>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-3">
          <Cookie className="h-5 w-5 text-blue-400" />
          <h3 className="font-semibold text-white">Terms & Cookies</h3>
        </div>

        {/* Content */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          We use cookies to enhance your browsing experience. By using our website, 
          you agree to our{' '}
          <a 
            href="/terms-of-service" 
            target="_blank" 
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Terms of Service
          </a>{' '}
          and cookie policy.
        </p>

        {/* Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleAccept}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-medium py-2 px-4 rounded transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;