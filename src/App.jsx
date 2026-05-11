import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedEdits from './components/FeaturedEdits';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-dark-900 min-h-screen text-white font-sans selection:bg-neon-blue selection:text-black">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <FeaturedEdits />
            <About />
            <Services />
            <Skills />
            {/* <Testimonials /> */}
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
