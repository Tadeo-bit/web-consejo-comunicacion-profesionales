import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Anteproyecto from './components/Anteproyecto/Anteproyecto';
import Updates from './components/Updates/Updates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Anteproyecto />
        <Updates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;