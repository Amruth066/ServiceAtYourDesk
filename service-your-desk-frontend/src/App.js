import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import ServiceProviders from "./components/ServiceProviders/ServiceProviders";
import ServiceProviderDetails from "./components/ServiceProviderDetails/ServiceProviderDetails";
import Footer from "./components/Footer/Footer";
import Bookings from "./components/Bookings/Bookings";
import Auth from "./components/Auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import ServiceProviderNavigation from "./components/ServiceProviderNavigation/ServiceProviderNavigation";
import ChatbotComponent from "./components/Chatbot/Chatbot";
import ServiceProviderBookings from "./components/ServiceProviderBookings/ServiceProviderBookings"
import ServiceProviderProfile from "./components/ServiceProviderProfile/ServiceProviderProfile";
import ServiceProviderSignIn from "./components/ServiceProviderSignIn/ServiceProviderSignIn";
import "./App.css";

function AppContent() {

  return (
    <div className="App">
      <Navigation/>
      <ServiceProviderNavigation/>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/serviceProviderSignIn" element={<ServiceProviderSignIn />} />
        <Route path="/" element={<ProtectedRoute element={<><Header /><Services /></>} />} />
        <Route path="/services" element={<ProtectedRoute element={<Services />} />} />
        <Route path="/service/:serviceName" element={<ProtectedRoute element={<ServiceProviders />} />} />
        <Route path="/provider/:providerId" element={<ProtectedRoute element={<ServiceProviderDetails />} />} />
        <Route path="/bookings" element={<ProtectedRoute element={<Bookings />} />} />
        <Route path="/serviceProviderBookings" element={<ServiceProviderBookings/>} />
        <Route path="/serviceProviderProfile" element={<ServiceProviderProfile/>} />
      </Routes>

      <Footer />
      <ChatbotComponent />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
