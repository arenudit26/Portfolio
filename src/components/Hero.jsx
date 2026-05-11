import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
          poster="/video_editing_03.jpg"
        >
          {/* Using a placeholder cinematic sports video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-running-on-a-dark-sports-stadium-41614-large.mp4" type="video/mp4" />
        </video>

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-transparent to-dark-900 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stadium-orange/10 via-transparent to-transparent z-10" />

        {/* Film grain effect (simulated with a repeating background or opacity) */}
        <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center lg:text-left flex flex-col items-center lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full glass border-white/10 mb-6"
        >
          <span className="text-neon-blue font-sans text-sm tracking-widest uppercase font-medium">Cinematic Editor</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-cinematic font-bold leading-[1.1] tracking-tight mb-6"
        >
          Turning Moments <br className="hidden md:block" />
          Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Cinematic</span><br />
          Stories.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl font-sans max-w-2xl mb-10 leading-relaxed"
        >
          Sports edits, Cinematic reels, and visual storytelling crafted with emotion and energy. Every frame tells a story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-none overflow-hidden flex items-center justify-center gap-3 transition-transform hover:scale-105">
            <div className="absolute inset-0 bg-neon-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
              <Play size={20} className="fill-current" /> Watch My Work
            </span>
          </button>

          <button className="group px-8 py-4 glass text-white font-semibold rounded-none flex items-center justify-center gap-3 transition-all hover:bg-white/10 hover:box-glow">
            Contact Me <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase writing-vertical-rl">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
