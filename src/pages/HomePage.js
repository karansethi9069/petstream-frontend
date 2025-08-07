// File: pages/HomePage.js
import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import NewsEvents from '../components/home/NewsEvents';
import Services from '../components/home/Services';
import Products from '../components/home/Products';
import Partners from '../components/home/Partners';
import Customers from '../components/home/Customers';
import ContactCTA from '../components/home/ContactCTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <NewsEvents />
      <Services />
      {/* <Products /> */}
      <Partners />
      <Customers />
      <ContactCTA />
    </>
  );
};

export default HomePage;