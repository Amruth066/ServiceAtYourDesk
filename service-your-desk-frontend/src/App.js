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
import ChatbotComponent from "./components/Chatbot/Chatbot";
import ServiceProviderBookings from "./components/ServiceProviderScreen/ServiceProviderBookings/ServiceProviderBookings"
import ServiceProviderProfile from "./components/ServiceProviderProfile/ServiceProviderProfile";
import ServiceProviderSignIn from "./components/ServiceProviderSignIn/ServiceProviderSignIn";
import "./App.css";
import { UserContext, UserProvider } from "./context/UserContext";
import Messenger from "./components/Messenger/Messenger";
import {DataProvider} from './context/DataContext'
function AppContent() {

  return (
    <div className="App">
      <ChatbotComponent />

      <Navigation />
      {/* <ServiceProviderNavigation/> */}
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/serviceProviderSignIn" element={<ServiceProviderSignIn />} />
        <Route path="/" element={<ProtectedRoute element={<><Header /><Services /></>} />} />
        <Route path="/services" element={<ProtectedRoute element={<Services />} />} />
        <Route path="/service/:serviceName" element={<ProtectedRoute element={<ServiceProviders />} />} />
        <Route path="/provider/:providerId" element={<ProtectedRoute element={<ServiceProviderDetails />} />} />
        <Route path="/bookings" element={<ProtectedRoute element={<Bookings />} />} />
        <Route path="/messages" element={<Messenger />} />
        <Route path="/serviceProviderBookings" element={<ServiceProviderBookings />} />
        <Route path="/serviceProviderProfile" element={<ServiceProviderProfile />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <DataProvider>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </DataProvider>
    </Router>
  );
}

export default App;
