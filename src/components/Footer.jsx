const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-cinematic font-bold text-lg tracking-widest uppercase text-white flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-neon-blue rounded-full text-glow"></span>
          Cinematic
        </div>
        
        <p className="text-gray-500 font-sans text-xs uppercase tracking-widest text-center">
          Crafted with creativity & late-night editing sessions.
        </p>

        <p className="text-gray-600 font-sans text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
