import { motion } from 'framer-motion';
import { Video, Film, Scissors, Layers, MonitorPlay, Share2 } from 'lucide-react';

const servicesList = [
  {
    icon: <Film size={28} className="text-neon-blue" />,
    title: "Cinematic Color Grading",
    desc: "Transforming flat footage into moody, cinematic masterpieces that evoke emotion and set the tone."
  },
  {
    icon: <Video size={28} className="text-stadium-orange" />,
    title: "Cricket Highlight Edits",
    desc: "High-energy, fast-paced sports edits perfectly synced to music, focusing on impact and momentum."
  },
  {
    icon: <MonitorPlay size={28} className="text-purple-400" />,
    title: "YouTube Shorts Editing",
    desc: "Optimized, engaging short-form content designed to capture attention in the first 3 seconds."
  },
  {
    icon: <Share2 size={28} className="text-green-400" />,
    title: "Instagram Reel Editing",
    desc: "Trendy, dynamic edits for social media, utilizing modern effects and sound design to boost engagement."
  },
  {
    icon: <Layers size={28} className="text-pink-400" />,
    title: "Motion Transitions",
    desc: "Seamless, creative transitions that keep the viewer hooked and make the visual flow feel effortless."
  },
  {
    icon: <Scissors size={28} className="text-yellow-400" />,
    title: "Social Media Content",
    desc: "End-to-end content editing tailored for specific platforms to maximize reach and aesthetic consistency."
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="glass p-8 rounded-2xl border-white/5 hover:border-white/20 transition-all group relative overflow-hidden"
  >
    {/* Hover Glow Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="mb-6 inline-block p-4 rounded-xl bg-dark-900/50 shadow-inner group-hover:scale-110 transition-transform duration-500">
      {service.icon}
    </div>
    
    <h3 className="text-xl font-cinematic font-bold text-white mb-3 group-hover:text-glow transition-all">
      {service.title}
    </h3>
    
    <p className="text-gray-400 font-sans text-sm leading-relaxed relative z-10">
      {service.desc}
    </p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 bg-dark-800 relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-500">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-sans"
          >
            Delivering premium visual experiences tailored for modern platforms, athletes, and brands.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
