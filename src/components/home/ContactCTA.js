import React, { useState, useRef } from 'react';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_dlo9o4g',
  templateId: 'template_u4d1p0i',
  publicKey: 'Nl8_pe9vOapY7zN6V'
};

// Validation rules
const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    message: 'Name must contain only letters and spaces (2-50 characters)'
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  phone: {
    required: false,
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: 'Please enter a valid phone number (only numbers, + allowed at start)'
  },
  jobTitle: {
    required: false,
    maxLength: 100,
    pattern: /^[a-zA-Z0-9\s\-\.]+$/,
    message: 'Job title can contain letters, numbers, spaces, hyphens and periods only'
  },
  company: {
    required: false,
    maxLength: 100,
    pattern: /^[a-zA-Z0-9\s\-\.\&]+$/,
    message: 'Company name can contain letters, numbers, spaces, hyphens, periods and & only'
  },
  address: {
    required: false,
    maxLength: 200,
    message: 'Address must be less than 200 characters'
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    message: 'Message must be between 10-1000 characters'
  }
};

// File validation
const fileValidation = {
  maxSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'text/plain',
    'text/csv',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ],
  allowedExtensions: ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.gif', '.txt', '.csv', '.xlsx', '.xls']
};

// Contact Form Modal Component with Enhanced Validation
const ContactFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    productInterest: '',
    address: '',
    message: '',
    files: []
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const formRef = useRef();

  // Validation function
  const validateField = (name, value) => {
    const rule = validationRules[name];
    if (!rule) return '';

    // Required field check
    if (rule.required && (!value || value.trim() === '')) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    // Skip other validations if field is not required and empty
    if (!rule.required && (!value || value.trim() === '')) {
      return '';
    }

    // Length validations
    if (rule.minLength && value.length < rule.minLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rule.minLength} characters`;
    }

    if (rule.maxLength && value.length > rule.maxLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be less than ${rule.maxLength} characters`;
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      return rule.message;
    }

    return '';
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    Object.keys(validationRules).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    return newErrors;
  };

  // File validation
  const validateFile = (file) => {
    const errors = [];
    
    // Check file size
    if (file.size > fileValidation.maxSize) {
      errors.push(`File "${file.name}" is too large. Maximum size is 10MB.`);
    }

    // Check file type
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!fileValidation.allowedExtensions.includes(fileExtension)) {
      errors.push(`File "${file.name}" has an unsupported format. Allowed formats: ${fileValidation.allowedExtensions.join(', ')}`);
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone number (only allow numbers, +, -, spaces, parentheses)
    if (name === 'phone') {
      const cleanedValue = value.replace(/[^\d\+\-\(\)\s]/g, '');
      setFormData(prevState => ({
        ...prevState,
        [name]: cleanedValue
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, name === 'phone' ? value.replace(/[^\d\+\-\(\)\s]/g, '') : value);
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prevTouched => ({
      ...prevTouched,
      [name]: true
    }));

    // Validate on blur
    const error = validateField(name, formData[name]);
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const fileErrors = [];
    const validFiles = [];

    selectedFiles.forEach(file => {
      const validation = validateFile(file);
      if (validation.length > 0) {
        fileErrors.push(...validation);
      } else {
        validFiles.push(file);
      }
    });

    if (fileErrors.length > 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        files: fileErrors.join(' ')
      }));
    } else {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors.files;
        return newErrors;
      });
    }

    setFormData(prevState => ({
      ...prevState,
      files: validFiles
    }));
  };

  const removeFile = (indexToRemove) => {
    setFormData(prevState => ({
      ...prevState,
      files: prevState.files.filter((_, index) => index !== indexToRemove)
    }));
    
    // Clear file errors if no files left
    if (formData.files.length === 1) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors.files;
        return newErrors;
      });
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const sendEmail = async (templateParams) => {
    try {
      // Load EmailJS script dynamically
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.async = true;
        document.head.appendChild(script);
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });
        
        // Initialize EmailJS
        window.emailjs.init(EMAILJS_CONFIG.publicKey);
      }

      const response = await window.emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      return response;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(validationRules).forEach(field => {
      allTouched[field] = true;
    });
    setTouched(allTouched);

    // Validate entire form
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      
      // Scroll to first error
      const firstErrorField = Object.keys(formErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
      
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        phone: formData.phone.trim() || 'Not provided',
        job_title: formData.jobTitle.trim() || 'Not provided',
        company: formData.company.trim() || 'Not provided',
        product_interest: formData.productInterest || 'Not specified',
        address: formData.address.trim() || 'Not provided',
        message: formData.message.trim(),
        files_attached: formData.files.length > 0 
          ? formData.files.map(file => `${file.name} (${formatFileSize(file.size)})`).join(', ')
          : 'No files attached',
        submission_date: new Date().toLocaleString()
      };

      // Send email via EmailJS
      await sendEmail(templateParams);
      
      // Success handling
      setSubmitStatus({
        success: true,
        message: "Your enquiry has been submitted successfully! We'll contact you shortly."
      });
      
      // Show popup
      setShowSubmitPopup(true);
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        jobTitle: '',
        company: '',
        productInterest: '',
        address: '',
        message: '',
        files: []
      });
      
      // Reset validation states
      setErrors({});
      setTouched({});
      
      // Reset file input
      const fileInput = document.getElementById('file-upload');
      if (fileInput) {
        fileInput.value = '';
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Error handling
      setSubmitStatus({
        success: false,
        message: "There was an error submitting your enquiry. Please try again or contact us directly."
      });
      
      // Show popup for error as well
      setShowSubmitPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSubmitPopup = () => {
    setShowSubmitPopup(false);
    setSubmitStatus(null);
    
    // If success, close the main modal after popup is closed
    if (submitStatus?.success) {
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Helper function to render field error
  const renderFieldError = (fieldName) => {
    if (errors[fieldName] && touched[fieldName]) {
      return (
        <p className="mt-2 text-sm text-red-600 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {errors[fieldName]}
        </p>
      );
    }
    return null;
  };

  // Helper function to get input classes
  const getInputClasses = (fieldName) => {
    const baseClasses = "block w-full pl-12 pr-4 py-4 border-2 rounded-lg focus:ring-2 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300";
    
    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClasses} border-red-300 focus:border-red-500 focus:ring-red-500`;
    } else if (touched[fieldName] && !errors[fieldName] && formData[fieldName]) {
      return `${baseClasses} border-green-300 focus:border-green-500 focus:ring-green-500`;
    } else {
      return `${baseClasses} border-gray-200 focus:border-green-500 focus:ring-green-500`;
    }
  };

  return (
    <>
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .modal-backdrop {
          backdrop-filter: blur(8px);
        }
        .popup-enter {
          animation: popupEnter 0.3s ease-out forwards;
        }
        @keyframes popupEnter {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      
      {/* Submission Popup Modal */}
      {showSubmitPopup && submitStatus && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl popup-enter">
            <div className="text-center">
              {submitStatus.success ? (
                <>
                  {/* Success Icon */}
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {submitStatus.message}
                  </p>
                  <button
                    onClick={closeSubmitPopup}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Close
                  </button>
                </>
              ) : (
                <>
                  {/* Error Icon */}
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Oops! Something went wrong
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {submitStatus.message}
                  </p>
                  <button
                    onClick={closeSubmitPopup}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Try Again
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 overflow-y-auto modal-backdrop"
        onClick={handleBackdropClick}
      >
        <div className="bg-white rounded-2xl w-full max-w-6xl my-8 shadow-2xl max-h-[95vh] overflow-y-auto">
          {/* Close button at top-right */}
          <div className="sticky top-0 bg-white z-20 flex justify-end p-4 border-b border-gray-100">
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Main content */}
          <div className="px-8 pb-8">
            {/* Contact Form Section */}
            <section className="relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                  <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>
              </div>

              <div className="relative z-10 py-8">
                <div className="max-w-7xl mx-auto">
                  {/* Decorative top accent */}
                  <div className="text-center mb-8">
                    <div className="inline-block px-8 py-3 bg-gradient-to-r from-orange-100 to-orange-50 text-green-600 rounded-full font-semibold mb-6 shadow-lg">
                      🚀 Get in Touch with Our Experts
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Side - Enhanced Form Title and Features */}
                    <div className="lg:w-1/3">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                          ENQUIRY <span className="text-green-500 block">FORM</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-green-400 to-green-600 mb-6 rounded-full"></div>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                          Contact with us through our representative or submit a
                          business inquiry online.
                        </p>

                        {/* Added features list */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center shadow-md">
                              <svg
                                className="w-6 h-6 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700 font-medium">
                              Instant response within 24 hours
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center shadow-md">
                              <svg
                                className="w-6 h-6 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700 font-medium">
                              100% secure & confidential
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center shadow-md">
                              <svg
                                className="w-6 h-6 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700 font-medium">
                              Quick consultation booking
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Enhanced Form Fields */}
                    <div className="lg:w-2/3">
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
                          {/* First Row - Name and Email */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Name *
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <svg
                                    className={`w-5 h-5 transition-colors duration-200 ${
                                      errors.name && touched.name ? 'text-red-400' :
                                      touched.name && !errors.name && formData.name ? 'text-green-400' :
                                      'text-gray-400 group-focus-within:text-green-500'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                                  className={getInputClasses('name')}
                                  placeholder="Enter your name"
                                />
                              </div>
                              {renderFieldError('name')}
                            </div>
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Email Address *
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <svg
                                    className={`w-5 h-5 transition-colors duration-200 ${
                                      errors.email && touched.email ? 'text-red-400' :
                                      touched.email && !errors.email && formData.email ? 'text-green-400' :
                                      'text-gray-400 group-focus-within:text-green-500'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                                  className={getInputClasses('email')}
                                  placeholder="Enter Email Address"
                                />
                              </div>
                              {renderFieldError('email')}
                            </div>
                          </div>

                          {/* Second Row - Contact No and Job Title */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Contact No
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <svg
                                    className={`w-5 h-5 transition-colors duration-200 ${
                                      errors.phone && touched.phone ? 'text-red-400' :
                                      touched.phone && !errors.phone && formData.phone ? 'text-green-400' :
                                      'text-gray-400 group-focus-within:text-green-500'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={getInputClasses('phone')}
                                  placeholder="Contact Number"
                                />
                              </div>
                              {renderFieldError('phone')}
                            </div>
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Job Title
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <svg
                                    className={`w-5 h-5 transition-colors duration-200 ${
                                      errors.jobTitle && touched.jobTitle ? 'text-red-400' :
                                      touched.jobTitle && !errors.jobTitle && formData.jobTitle ? 'text-green-400' :
                                      'text-gray-400 group-focus-within:text-green-500'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="text"
                                  name="jobTitle"
                                  value={formData.jobTitle || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={getInputClasses('jobTitle')}
                                  placeholder="Job Title"
                                />
                              </div>
                              {renderFieldError('jobTitle')}
                            </div>
                          </div>

                          {/* Third Row - Company Name and Product Dropdown */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Company Name
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <svg
                                    className={`w-5 h-5 transition-colors duration-200 ${
                                      errors.company && touched.company ? 'text-red-400' :
                                      touched.company && !errors.company && formData.company ? 'text-green-400' :
                                      'text-gray-400 group-focus-within:text-green-500'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="text"
                                  name="company"
                                  value={formData.company || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={getInputClasses('company')}
                                  placeholder="Company Name"
                                />
                              </div>
                              {renderFieldError('company')}
                            </div>
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Product Interest
                              </label>
                              <div className="relative">
                                <select
                                  name="productInterest"
                                  value={formData.productInterest || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="block w-full pl-4 pr-10 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer hover:border-gray-300"
                                >
                                  <option value="">Select Your Product</option>
                                  <option value="Netstal">Netstal</option>
                                  <option value="GDXL">GDXL</option>
                                  <option value="Zonwon">Zonwon</option>
                                  <option value="Newamstar">Newamstar</option>
                                  <option value="Corvaglia">Corvaglia</option>
                                  <option value="Glaroform">Glaroform</option>
                                  <option value="Integrated Plastic">Integrated Plastic</option>
                                  <option value="Buchtech">Buchtech</option>
                                  <option value="Spare Parts And Services">
                                    Spare Parts And Services
                                  </option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                  <svg
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Fourth Row - Address */}
                          <div className="mb-6">
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Address
                              </label>
                              <div className="relative">
                                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                                  <svg
                                    className={`w-5 h-5 transition-colors duration-200 ${
                                      errors.address && touched.address ? 'text-red-400' :
                                      touched.address && !errors.address && formData.address ? 'text-green-400' :
                                      'text-gray-400 group-focus-within:text-green-500'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="text"
                                  name="address"
                                  value={formData.address || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={getInputClasses('address')}
                                  placeholder="Enter Address"
                                />
                              </div>
                              {renderFieldError('address')}
                            </div>
                          </div>

                          {/* Fifth Row - File Upload */}
                          <div className="mb-6">
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Attach Files <span className="text-gray-500 font-normal">(Optional)</span>
                              </label>
                              <div className="relative">
                                <input
                                  type="file"
                                  id="file-upload"
                                  multiple
                                  onChange={handleFileChange}
                                  className="hidden"
                                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.txt,.csv,.xlsx,.xls"
                                />
                                <label 
                                  htmlFor="file-upload"
                                  className={`flex items-center justify-center w-full px-4 py-8 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 ${
                                    errors.files ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
                                  }`}
                                >
                                  <div className="text-center">
                                    <svg
                                      className={`w-12 h-12 mx-auto mb-4 transition-colors duration-200 ${
                                        errors.files ? 'text-red-400' : 'text-gray-400 group-hover:text-green-500'
                                      }`}
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                      />
                                    </svg>
                                    <p className="text-gray-600 font-medium mb-2">
                                      Click to upload files or drag and drop
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      PDF, Word, Images, Excel files up to 10MB each
                                    </p>
                                  </div>
                                </label>
                              </div>
                              
                              {/* File errors */}
                              {errors.files && (
                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                  {errors.files}
                                </p>
                              )}
                              
                              {/* File preview */}
                              {formData.files.length > 0 && (
                                <div className="mt-4 space-y-2">
                                  <p className="text-sm font-medium text-gray-700">
                                    Selected Files ({formData.files.length}):
                                  </p>
                                  {formData.files.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                                      <div className="flex items-center space-x-3">
                                        <svg
                                          className="w-6 h-6 text-gray-500"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V4a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                          />
                                        </svg>
                                        <div>
                                          <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                                            {file.name}
                                          </p>
                                          <p className="text-xs text-gray-500">
                                            {formatFileSize(file.size)}
                                          </p>
                                        </div>
                                      </div>
                                      <button
                                        type="button"
                                        onClick={() => removeFile(index)}
                                        className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full p-1 transition-colors duration-200"
                                        aria-label="Remove file"
                                      >
                                        <svg
                                          className="w-5 h-5"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Sixth Row - Enquiry */}
                          <div className="mb-8">
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Enquiry *
                              </label>
                              <div className="relative">
                                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                                  <svg
                                    className={`w-5 h-5 transition-colors duration-200 ${
                                      errors.message && touched.message ? 'text-red-400' :
                                      touched.message && !errors.message && formData.message ? 'text-green-400' :
                                      'text-gray-400 group-focus-within:text-green-500'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                  </svg>
                                </div>
                                <textarea
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                                  rows="5"
                                  className={`${getInputClasses('message')} resize-none`}
                                  placeholder="Tell us about your requirements..."
                                ></textarea>
                              </div>
                              {renderFieldError('message')}
                              {/* Character count */}
                              <div className="mt-2 text-right">
                                <span className={`text-xs ${
                                  formData.message.length > 1000 ? 'text-red-500' : 
                                  formData.message.length > 900 ? 'text-yellow-500' : 
                                  'text-gray-500'
                                }`}>
                                  {formData.message.length}/1000 characters
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="flex items-center justify-center">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className={`px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 ${
                                isSubmitting
                                  ? "opacity-70 cursor-not-allowed"
                                  : "hover:transform hover:-translate-y-1 hover:from-green-600 hover:to-green-700"
                              }`}
                            >
                              {isSubmitting ? (
                                <div className="flex items-center">
                                  <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                    ></circle>
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                  </svg>
                                  Submitting...
                                </div>
                              ) : (
                                "Submit Enquiry"
                              )}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

// Updated ContactCTA Component
const ContactCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        className="py-20 bg-blue-700 text-white relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9))',
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to optimize your production efficiency ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our team of experts is ready to help you select the right equipment and services 
            for your specific requirements.
          </p>
          <button
            onClick={openModal}
            className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
          >
           Get In Touch
          </button>
        </div>
      </section>
      
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ContactCTA;