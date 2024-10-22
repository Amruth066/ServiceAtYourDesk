import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import ServiceProvider from './components/ServiceProviders/ServiceProviders';

function App() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);  // This sets the service when selected
  };

  const handleBackToServices = () => {
    setSelectedService(null);  // This resets the selected service to go back
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      {!selectedService ? (
        <Services onServiceSelect={handleServiceSelect} />  
      ) : (
        <ServiceProvider service={selectedService} goBack={handleBackToServices} />
      )}
      <Footer />
    </div>
  );
}

export default App;
