import './App.css';
import Header from './components/Header/header'
import Services from './components/Services/services';
import Hero from './components/Hero/hero';
import Footer from './components/Footer/footer';
import ServiceProvider from './components/ServiceProviders/serviceProvider';
import { useState } from 'react';
function App() {
  const [selectedService,setSelectedService] = useState(null);
  
  const handleServiceSelect=(serviceName)=>{
    setSelectedService(serviceName);
  }
  return (
    <div className="App">
      <Header />
      {!selectedService?(
        <>
          <Hero/>
          <Services onServiceSelect={handleServiceSelect} />
        </>
      ):(
        <ServiceProvider service={selectedService}/>
      )}
      <Footer />
    </div>
  );
}

export default App;