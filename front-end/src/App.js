import './App.css';
import Header from './components/Header/header'
import Services from './components/Services/services';
import Hero from './components/Hero/hero';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;