import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import PorqueUnConsejo from './components/PorqueUnConsejo/PorqueUnConsejo';
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
        <PorqueUnConsejo />
        <Updates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;