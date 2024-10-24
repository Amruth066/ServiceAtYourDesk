import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import ServiceProvider from './components/ServiceProviders/ServiceProviders';
import ServiceProviderDetails from './components/ServiceProviderDetails/ServiceProviderDetails';
import Bookings from './components/Bookings/bookings';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';

function App() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service); 
  };

  const handleBackToServices = () => {
    setSelectedService(null); 
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/myBookings" element={<Bookings/>} />
          <Route path="/services" element={<Services onServiceSelect={handleServiceSelect} />} />
          <Route path="/services/service-provider" element={<ServiceProvider service={selectedService} />} />
          <Route path="/service-provider-details" element={<ServiceProviderDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
