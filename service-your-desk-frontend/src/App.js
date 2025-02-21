import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import ServiceProviders from "./components/ServiceProviders/ServiceProviders";
import ServiceProviderDetails from "./components/ServiceProviderDetails/ServiceProviderDetails";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Services />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:serviceName" element={<ServiceProviders />} />
          <Route path="/provider/:providerId" element={<ServiceProviderDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
