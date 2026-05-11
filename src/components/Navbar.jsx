import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }} // delay after loading screen
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-cinematic font-bold text-xl tracking-widest uppercase text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-neon-blue rounded-full text-glow"></span>
          Udit Aren
        </a>

        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest text-gray-400 uppercase">
          <a href="#work" className="hover:text-white transition-colors hover:text-glow">Work</a>
          <a href="#about" className="hover:text-white transition-colors hover:text-glow">About</a>
          <a href="#services" className="hover:text-white transition-colors hover:text-glow">Services</a>
          <a href="#contact" className="px-5 py-2 glass hover:bg-white hover:text-black transition-all rounded-none border-white/20">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
