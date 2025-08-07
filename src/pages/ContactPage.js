// client/src/pages/ContactPage.js
import React, { useState, useEffect } from "react";
import companyData from "../data/company";
import axios from "axios";
import mapImage from "../assets/images/map.webp";
import contactBanner from "../assets/images/contact-us.jpg";
import ravi from "../assets/team-new/ravi_bansal.jpg";
import Avinash from "../assets/team-new/avinash_pal.jpg";
import Manish from "../assets/team-new/manish_kaushik.jpg";
import Saurabh from "../assets/team-new/saurabh_tyagi.jpg";
import Lerin from "../assets/team-new/lerin_suresh.jpg";
import ashwani from "../assets/team-new/ashwani_mishra.jpg";
import Toshak from "../assets/team-new/toshak-chaudhary.jpg";
import mailIcon from "../assets/images/mail_icon.webp";
import emailjs from "@emailjs/browser";

const ContactPage = () => {

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

  const [selectedRegion, setSelectedRegion] = useState('global');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    jobTitle: "",
    productInterest: "",
    address: "",
    files: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  
  // Validation states
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

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

  // Validation functions
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

  // Helper functions for rendering
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

  const getInputClasses = (fieldName) => {
    const baseClasses = "block w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 transition-all duration-300 bg-gray-50 focus:bg-white";
    
    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClasses} border-red-300 focus:border-red-500 focus:ring-red-500`;
    } else if (touched[fieldName] && !errors[fieldName] && formData[fieldName]) {
      return `${baseClasses} border-green-300 focus:border-green-500 focus:ring-green-500`;
    } else {
      return `${baseClasses} border-gray-100 focus:border-green-500 focus:ring-green-500`;
    }
  };

  // Debug EmailJS configuration on component mount
  useEffect(() => {
    console.log('EmailJS Configuration Check:');
    console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID ? 'Set ✓' : 'Missing ✗');
    console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID ? 'Set ✓' : 'Missing ✗');
    console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY ? 'Set ✓' : 'Missing ✗');
  }, []);

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

  // Enhanced EmailJS handler with retry logic
  const sendEmailWithRetry = async (templateParams, maxRetries = 3) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`Attempt ${attempt} to send email...`);
        
        const response = await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          templateParams,
          {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          }
        );
        
        console.log('Email sent successfully:', response);
        return response;
        
      } catch (error) {
        console.error(`Attempt ${attempt} failed:`, error);
        
        if (attempt === maxRetries) {
          throw error; // Re-throw on final attempt
        }
        
        // Wait before retry (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
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
      
      setSubmitStatus({
        success: false,
        message: "Please correct the errors in the form before submitting.",
      });
      setShowSubmitPopup(true);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Validate environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is incomplete. Please check environment variables.');
      }
      
      // Prepare clean template parameters that match your EmailJS template
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        to_email: 'info@petstream.in', // Replace with your actual Office 365 email
        phone: formData.phone.trim() || 'Not provided',
        company: formData.company.trim() || 'Not provided',
        job_title: formData.jobTitle.trim() || 'Not provided',
        product_interest: formData.productInterest || 'Not specified',
        address: formData.address.trim() || 'Not provided',
        message: formData.message.trim(),
        subject: `New Inquiry from ${formData.name} - ${formData.company || 'Individual'}`,
        files_count: formData.files.length,
        files_attached: formData.files.length > 0 
          ? formData.files.map(file => `${file.name} (${formatFileSize(file.size)})`).join(', ')
          : 'No files attached',
        submission_date: new Date().toLocaleString(),
        
        // Additional parameters for Office 365 compatibility
        reply_to: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_company: formData.company,
        user_message: formData.message
      };
      
      console.log('Sending email with params:', templateParams);
      
      // Send email with retry logic
      const response = await sendEmailWithRetry(templateParams);
      
      if (response.status === 200) {
        setTimeout(() => {
          setSubmitStatus({
            success: true,
            message: "Thank you for your message! We will contact you soon.",
          });
          
          setShowSubmitPopup(true);
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message: "",
            jobTitle: "",
            productInterest: "",
            address: "",
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
          
          setIsSubmitting(false);
        }, 1500);
      }
      
    } catch (error) {
      console.error("Final error submitting form:", error);
      
      let errorMessage = "There was an error sending your message. Please try again later.";
      
      // More specific error handling
      if (error.message.includes('configuration')) {
        errorMessage = "Email service configuration error. Please contact support.";
      } else if (error.text) {
        errorMessage = `Email service error: ${error.text}`;
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = "Network error. Please check your connection and try again.";
      } else if (error.status) {
        errorMessage = `Email service returned status: ${error.status}. Please try again.`;
      }
      
      setSubmitStatus({
        success: false,
        message: errorMessage,
      });
      
      setShowSubmitPopup(true);
      setIsSubmitting(false);
    }
  };

  const closeSubmitPopup = () => {
    setShowSubmitPopup(false);
    setSubmitStatus(null);
  };

  // Test function for debugging EmailJS
  const testEmailJS = async () => {
    try {
      const testParams = {
        from_name: 'Test User',
        from_email: 'test@example.com',
        to_email: 'info@petstream.in',
        message: 'This is a test message from the contact form',
        subject: 'Test Email from Contact Form'
      };
      
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        testParams,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        }
      );
      
      console.log('Test email sent successfully:', response);
      alert('Test email sent successfully!');
    } catch (error) {
      console.error('Test email failed:', error);
      alert('Test email failed: ' + error.message);
    }
  };

  const mapEmbeds = {
    global: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d201434618.01234!2d0!3d20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890",
    india: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.12345678!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1234567890",
    africa: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000000!2d20!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890",
    middleeast: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8000000!2d45!3d25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890",
    southeastasia: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12000000!2d110!3d5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
  };

  const regions = [
    { id: 'global', name: 'Global View', icon: '🌍' },
    { id: 'india', name: 'India Offices', icon: '🏢' },
    { id: 'africa', name: 'Africa', icon: '🌍' },
    { id: 'middleeast', name: 'West Asia', icon: '🕌' },
    { id: 'southeastasia', name: 'Southeast Asia', icon: '🏝️' }
  ];

  const countryList = {
    africa: ['Morocco', 'Algeria', 'Egypt', 'Nigeria', 'Ghana', 'Uganda', 'Angola', 'Namibia', 'Zimbabwe','Zambia', 'congo', 'Tanzania', 'Ethopia', 'Botswana', 'Angola', 'Kenya', 'Algeria',' Tunisia'],
    middleeast: ['Israel', 'Jordan', 'Saudi Arabia', 'Qatar', 'Afghanistan','UAE', 'OMAN', 'KUWAIT', 'Turkey'],
    southeastasia: ['Thailand', 'Vietnam', 'Malaysia', 'Singapore', 'Philippines', 'Brunei', 'Myanmar','Laos','Cambodia'],
    southasia: ['Sri Lanka', 'Bangladesh', 'Nepal', 'Bhutan']
  };

  // India office locations
  const indiaOffices = [
    {
      type: 'Corporate Office',
      address: 'Office No. 1603A & 1603B, 16th floor, The Iconic Tower, Corenthum, Sector -62, Noida, National Capital Region, India-201309',
      phone: '+91-98112 06119',
      email: 'ravi.bansal@petstream.in',
      icon: '🏢',
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'Head Office',
      address: 'Office No 206, 2nd floor, Vardhman capital complex, L.S.C Gulabi bagh, Delhi, India- 110052',
      phone: '+91-98119 06119',
      email: 'info@petstream.in',
      icon: '🏭',
      color: 'from-green-500 to-green-600'
    },
    {
      type: 'Registered Office',
      address: 'Office no 7255/77A, Ajendra Market, Ground Floor, Shakti Nagar, Delhi-110007(INDIA)',
      phone: '+91-98119 06119',
      email: 'manish.kaushik@petstream.in',
      icon: '📋',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Submission Popup Modal */}
      {showSubmitPopup && submitStatus && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[70] flex items-center justify-center p-4">
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
                  <div className="space-y-3">
                    <button
                      onClick={closeSubmitPopup}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl block w-full"
                    >
                      Try Again
                    </button>
                    {/* Add test button in development */}
                    {process.env.NODE_ENV === 'development' && (
                      <button
                        onClick={() => {
                          closeSubmitPopup();
                          testEmailJS();
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl block w-full"
                      >
                        Test EmailJS
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Banner */}
      <section
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact us
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Reach out to us for inquiries, service requests, or to discuss how
            we can help optimize your manufacturing operations.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're after a machine, spare part, power tool, or need to
              book a service call PET Stream will help you find the right solution in a
              timely manner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
   
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">Corporate Office:</h3>
                </div>
                 <div className="space-y-4">
                    <div className="flex items-start group">
                        <svg className="w-6 h-6 text-blue-600 mr-4 mt-0.5 flex-shrink-0 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        <p className="text-gray-700 leading-relaxed">Office No. 1603A & 1603B, 16th floor, The Iconic Tower, Corenthum, Sector -62, Noida, National Capital Region, India-201309</p>
                    </div>
                    <div className="flex items-center group">
                        <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <a href="tel:+919811906119" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">+91-98112 06119</a>
                    </div>
                    <div className="flex items-center group">
                        <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <a href="mailto:info@petstream.in" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">ravi.bansal@petstream.in</a>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">Head Office:</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex items-start group">
                        <svg className="w-6 h-6 text-blue-600 mr-4 mt-0.5 flex-shrink-0 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        <p className="text-gray-700 leading-relaxed">Office No 206, 2nd floor, Vardhman capital complex, L.S.C Gulabi bagh, Delhi, India- 110052</p>
                    </div>
                    <div className="flex items-center group">
                        <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <a href="tel:+919811906119" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">+91-98119 06119</a>
                    </div>
                    <div className="flex items-center group">
                        <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <a href="mailto:info@petstream.in" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">info@petstream.in</a>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">Registered Office:</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex items-start group">
                        <svg className="w-6 h-6 text-blue-600 mr-4 mt-0.5 flex-shrink-0 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        <p className="text-gray-700 leading-relaxed">Office no 7255/77A, Ajendra Market, Ground Floor, Shakti Nagar, Delhi-110007 (INDIA)</p>
                    </div>
                    <div className="flex items-center group">
                        <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <a href="tel:+9198119 06119" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">+91-98119 06119</a>
                    </div>
                    <div className="flex items-center group">
                        <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <a href="mailto:manish.kaushik@petstream.com" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">manish.kaushik@petstream.in</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </section>

    {/* Map Section */}
 <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Global Presence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving customers across 28+ countries worldwide
          </p>
        </div>

        {/* Region Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedRegion === region.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="mr-2">{region.icon}</span>
              {region.name}
            </button>
          ))}
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto bg-white">
          <div className="relative">
            <iframe
              src={mapEmbeds[selectedRegion]}
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${selectedRegion} office locations`}
              className="w-full"
            />
            
            {/* Dynamic Info Panel based on selected region */}
            <div className="absolute top-6 right-6 space-y-3 z-10">
              {selectedRegion === 'india' ? (
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white border-opacity-20 max-w-xs">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    🇮🇳 India Operations
                  </h3>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>• Corporate Office (Noida)</div>
                    <div>• Head Office (Delhi)</div>
                    <div>• Registered Office (Delhi)</div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white border-opacity-20">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      🏪 Corporate Office
                    </h3>
                    <p className="text-sm text-gray-600">Sales Team & Service Team</p>
                  </div>
                </>
              )}
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white border-opacity-20 z-10">
              <h3 className="font-semibold text-gray-900 mb-3">Legend</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow mr-3"></div>
                  <span className="text-sm text-gray-700">Headquarters (India)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow mr-3"></div>
                  <span className="text-sm text-gray-700">Service Locations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* India Offices Detail Cards (shown when India is selected) */}
        {selectedRegion === 'india' && (
          <div className="mt-12 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our India Offices</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {indiaOffices.map((office, index) => (
                <div key={index} className={`bg-gradient-to-br ${office.color} text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{office.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold">{office.type}</h4>
                      {office.company && (
                        <p className="text-sm opacity-90">{office.company}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <span className="mr-2">📍</span>
                      <span className="opacity-90 leading-relaxed">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="mr-2">📞</span>
                      <a href={`tel:${office.phone}`} className="opacity-90 hover:opacity-100 underline">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="mr-2">✉️</span>
                      <a href={`mailto:${office.email}`} className="opacity-90 hover:opacity-100 underline">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Countries List (shown for other regions) */}
        {selectedRegion !== 'india' && selectedRegion !== 'global' && (
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Headquarters Card */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  🏢 Headquarters
                </h3>
                <div className="text-sm">
                  <div className="font-medium">India</div>
                  <div className="opacity-90 text-xs mt-1">3 Office Locations</div>
                </div>
              </div>

              {/* Regional Lists */}
              {Object.entries(countryList).map(([region, countries]) => (
                <div key={region} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 capitalize">
                    {region === 'southasia' ? 'South Asia' : 
                     region === 'middleeast' ? 'West Asia' :
                     region === 'southeastasia' ? 'Southeast Asia' : region}
                  </h3>
                  <div className="space-y-1">
                    {countries.map((country, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Global Overview (shown for global view) */}
        {selectedRegion === 'global' && (
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* India Headquarters */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  🇮🇳 India (HQ)
                </h3>
                <div className="text-sm space-y-1">
                  <div className="font-medium">3 Office Locations</div>
                  <div className="opacity-90 text-xs">Corporate • Head • Registered</div>
                </div>
              </div>

              {/* Regional Summary */}
              {Object.entries(countryList).map(([region, countries]) => (
                <div key={region} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 capitalize flex items-center">
                    {region === 'southasia' ? '🏔️ South Asia' : 
                     region === 'middleeast' ? '🕌 West Asia' :
                     region === 'southeastasia' ? '🏝️ Southeast Asia' : 
                     region === 'africa' ? '🌍 Africa' : region}
                  </h3>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium text-2xl text-gray-900">{countries.length}</div>
                    <div className="text-xs">Countries Served</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6 rounded-xl text-center shadow-lg">
            <div className="text-3xl font-bold mb-2">28+</div>
            <div className="text-sm opacity-90">Countries</div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-teal-700 text-white p-6 rounded-xl text-center shadow-lg">
            <div className="text-3xl font-bold mb-2">5</div>
            <div className="text-sm opacity-90">Regions</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-red-700 text-white p-6 rounded-xl text-center shadow-lg">
            <div className="text-3xl font-bold mb-2">4</div>
            <div className="text-sm opacity-90">Continents</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-pink-700 text-white p-6 rounded-xl text-center shadow-lg">
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-sm opacity-90">India Offices</div>
          </div>
        </div>
      </div>
    </section>

      {/* Contact Form Section */}
{/* Contact Form Section */}
<section className="py-24 relative overflow-hidden">
  {/* Animated background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-7xl mx-auto">
      {/* Decorative top accent */}
      <div className="text-center mb-16">
        <div className="inline-block px-8 py-2 bg-orange-100 text-green-600 rounded-full font-medium mb-6">
          Get in Touch with Our Experts
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
        {/* Left Side - Enhanced Form Title and Features */}
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              ENQUIRY <span className="text-green-500 block">FORM</span>
            </h2>
            <div className="h-1.5 w-24 bg-green-500 mb-8 rounded-full"></div>

            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Contact with us through our representative or submit a
              business inquiry online.
            </p>

            {/* Added features list */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                <span className="text-gray-700">
                  Instant response within 24 hours
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                <span className="text-gray-700">
                  100% secure & confidential
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                <span className="text-gray-700">
                  Quick consultation booking
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Fields with Validation */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div className="bg-white rounded-3xl shadow-2xl backdrop-blur-xl p-8 lg:p-12">
              
              {/* First Row - Name and Email Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="group">
                  <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                    Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg
                        className={`w-5 h-5 transition-colors ${
                          errors.name && touched.name 
                            ? 'text-red-400' 
                            : touched.name && !errors.name && formData.name
                            ? 'text-green-400'
                            : 'text-gray-400 group-focus-within:text-green-500'
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
                  <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg
                        className={`w-5 h-5 transition-colors ${
                          errors.email && touched.email 
                            ? 'text-red-400' 
                            : touched.email && !errors.email && formData.email
                            ? 'text-green-400'
                            : 'text-gray-400 group-focus-within:text-green-500'
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="group">
                  <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                    Contact No
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg
                        className={`w-5 h-5 transition-colors ${
                          errors.phone && touched.phone 
                            ? 'text-red-400' 
                            : touched.phone && !errors.phone && formData.phone
                            ? 'text-green-400'
                            : 'text-gray-400 group-focus-within:text-green-500'
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
                  <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                    Job Title
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg
                        className={`w-5 h-5 transition-colors ${
                          errors.jobTitle && touched.jobTitle 
                            ? 'text-red-400' 
                            : touched.jobTitle && !errors.jobTitle && formData.jobTitle
                            ? 'text-green-400'
                            : 'text-gray-400 group-focus-within:text-green-500'
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
                      value={formData.jobTitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClasses('jobTitle')}
                      placeholder="Job Title"
                    />
                  </div>
                  {renderFieldError('jobTitle')}
                </div>
              </div>

              {/* Third Row - Company Name and Product Interest */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="group">
                  <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                    Company Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg
                        className={`w-5 h-5 transition-colors ${
                          errors.company && touched.company 
                            ? 'text-red-400' 
                            : touched.company && !errors.company && formData.company
                            ? 'text-green-400'
                            : 'text-gray-400 group-focus-within:text-green-500'
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
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClasses('company')}
                      placeholder="Company Name"
                    />
                  </div>
                  {renderFieldError('company')}
                </div>

                <div className="group">
                  <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                    Product Interest
                  </label>
                  <div className="relative">
                    <select
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full pl-4 pr-10 py-4 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select Your Product</option>
                      <option value="Netstal">Netstal</option>
                      <option value="GDXL">GDXL</option>
                      <option value="Zonwon">Zonwon</option>
                      <option value="Newamstar">Newamstar</option>
                      <option value="Corvaglia">Corvaglia</option>
                      <option value="glaroform">glaroform</option>
                      <option value="Integrated Plastics">Integrated Plastics</option>
                      <option value="Colorway">Buchtech</option>
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
              <div className="mb-8">
                <div className="group">
                  <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                    Address
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                      <svg
                        className={`w-5 h-5 transition-colors ${
                          errors.address && touched.address 
                            ? 'text-red-400' 
                            : touched.address && !errors.address && formData.address
                            ? 'text-green-400'
                            : 'text-gray-400 group-focus-within:text-green-500'
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
                      value={formData.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClasses('address')}
                      placeholder="Enter Address"
                    />
                  </div>
                  {renderFieldError('address')}
                </div>
              </div>

              {/* Fifth Row - Attach Files */}
              <div className="mb-8">
                <div className="group">
                  <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
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
                      className={`flex flex-col items-center justify-center w-full px-4 py-8 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${
                        errors.files 
                          ? 'border-red-300 hover:border-red-400 bg-red-50' 
                          : 'border-gray-300 hover:border-green-400 hover:bg-green-50 group-focus-within:border-green-500 group-focus-within:bg-green-50'
                      }`}
                    >
                      <div className="text-center">
                        <svg
                          className={`w-12 h-12 mx-auto mb-4 transition-colors duration-200 ${
                            errors.files 
                              ? 'text-red-400' 
                              : 'text-gray-400 group-hover:text-green-500'
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
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-200">
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
              <div className="mb-10">
                <div className="group">
                  <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                    Enquiry *
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                      <svg
                        className={`w-5 h-5 transition-colors ${
                          errors.message && touched.message 
                            ? 'text-red-400' 
                            : touched.message && !errors.message && formData.message
                            ? 'text-green-400'
                            : 'text-gray-400 group-focus-within:text-green-500'
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
              <div className="flex items-center justify-center gap-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:transform hover:-translate-y-1"
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

              {/* Form validation summary */}
              {Object.keys(errors).length > 0 && Object.keys(touched).length > 0 && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-sm font-medium text-red-800">Please correct the following errors:</h4>
                  </div>
                  <ul className="text-sm text-red-700 list-disc list-inside space-y-1">
                    {Object.entries(errors).map(([field, error]) => (
                      <li key={field}>
                        {Array.isArray(error) ? error.join(', ') : error}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
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
  `}</style>
</section>

    </div>
  );
};

export default ContactPage;
