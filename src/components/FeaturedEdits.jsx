import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Play, TrendingUp, Users, Film } from 'lucide-react';

const edits = [
  {
    id: 1,
    title: "",
    category: "Cricket Edit",
    video: "https://assets.mixkit.co/videos/preview/mixkit-cricket-player-hitting-the-ball-in-slow-motion-42861-large.mp4",
    poster: "",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "",
    category: "Cinematic Edit",
    video: "https://assets.mixkit.co/videos/preview/mixkit-basketball-player-dribbling-in-a-dark-court-41586-large.mp4",
    poster: "",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "",
    category: "",
    video: "https://assets.mixkit.co/videos/preview/mixkit-running-on-a-dark-sports-stadium-41614-large.mp4",
    poster: "",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "",
    category: "",
    video: "https://assets.mixkit.co/videos/preview/mixkit-boxer-punching-in-the-dark-41580-large.mp4",
    poster: "",
    className: "md:col-span-2 md:row-span-1",
  }
];

const VideoCard = ({ edit }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Play interrupted", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-xl bg-dark-800 border border-white/5 cursor-pointer ${edit.className}`}
    >
      {/* Video / Poster */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={edit.poster}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
      >
        <source src={edit.video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent group-hover:from-dark-900/80 transition-all duration-500" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-stadium-orange/10 transition-opacity duration-500 mix-blend-overlay" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="px-3 py-1 text-xs font-sans tracking-wider uppercase bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10">
            {edit.category}
          </span>
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Play size={16} className="text-white ml-1" />
          </div>
        </div>

        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-cinematic text-2xl font-bold text-white mb-1 drop-shadow-lg group-hover:text-glow transition-all">
            {edit.title}
          </h3>
          <p className="text-gray-400 text-sm font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            Watch Full Reel
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedEdits = () => {
  return (
    <section id="work" className="py-24 bg-dark-900 relative z-10">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-500">Edits</span>
            </h2>
            <p className="text-gray-400 font-sans max-w-md">
              A curated collection of high-energy sports content, cinematic storytelling, and visual adrenaline.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white border-b border-white/30 pb-1 hover:text-neon-blue hover:border-neon-blue transition-colors font-sans uppercase tracking-widest text-sm"
          >
            View All Work
          </motion.button>
        </div>

        {/* Stats Row */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-6 rounded-xl border-white/5 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
          >
            <TrendingUp size={24} className="text-neon-blue mb-3 group-hover:text-glow transition-all" />
            <h4 className="text-3xl font-cinematic font-bold text-white mb-1">2.5M+</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-sans">Total Views</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-6 rounded-xl border-white/5 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
          >
            <Film size={24} className="text-stadium-orange mb-3 group-hover:drop-shadow-[0_0_15px_rgba(255,140,0,0.8)] transition-all" />
            <h4 className="text-3xl font-cinematic font-bold text-white mb-1">150+</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-sans">Projects Edited</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass p-6 rounded-xl border-white/5 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors col-span-2 md:col-span-1"
          >
            <Users size={24} className="text-purple-500 mb-3 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all" />
            <h4 className="text-3xl font-cinematic font-bold text-white mb-1">45+</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-sans">Happy Clients</p>
          </motion.div> */}
        {/* </div> */}

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 grid-rows-[300px_300px_300px] md:grid-rows-[400px_400px] gap-4"
        >
          {edits.map((edit) => (
            <VideoCard key={edit.id} edit={edit} />
          ))}
        </motion.div>

      </div>
    </section >
  );
};

export default FeaturedEdits;
