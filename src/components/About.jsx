import { motion } from 'framer-motion';

const JourneyCard = ({ year, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative pl-8 pb-8 border-l border-white/10 last:pb-0 last:border-transparent group"
  >
    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[6.5px] rounded-full bg-dark-800 border-2 border-neon-blue group-hover:bg-neon-blue group-hover:box-glow transition-all" />
    <span className="text-neon-blue font-sans text-sm font-semibold tracking-wider">{year}</span>
    <h4 className="text-white font-cinematic text-xl font-bold mt-1 mb-2">{title}</h4>
    <p className="text-gray-400 font-sans text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image / Avatar area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden group">
              {/* Image */}
              <img
                src="./WhatsApp Image 2026-05-11 at 21.50.33.jpeg"
                alt="Cinematic Portrait"
              // className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-neon-blue/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />

              <div className="absolute bottom-8 left-8">
                <p className="text-white font-cinematic text-2xl font-bold drop-shadow-md">Creator & Editor</p>
                <p className="text-neon-blue font-sans text-sm tracking-widest uppercase mt-1">Based in India</p>
              </div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 lg:-right-12 glass p-6 rounded-xl border border-white/10 hidden md:block"
            >
              <p className="text-white font-cinematic font-bold text-lg">Engineering Student</p>
              <p className="text-gray-400 font-sans text-xs uppercase tracking-wider mt-1">By Day</p>
              <div className="w-full h-[1px] bg-white/20 my-3" />
              <p className="text-white font-cinematic font-bold text-lg">Cinematic Editor</p>
              <p className="text-neon-blue font-sans text-xs uppercase tracking-wider mt-1">By Night</p>
            </motion.div>
          </motion.div>

          {/* Right Column: Content & Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-6">
                The Mind Behind The <span className="text-transparent bg-clip-text bg-gradient-to-r from-stadium-orange to-red-500">Lens</span>
              </h2>
              <p className="text-gray-300 font-sans text-lg mb-6 leading-relaxed">
                HEY Guys!! Myself Udit and I am a part time video editor and full time engineering student with a relentless passion for cinematic storytelling. What started as a hobby of making sports edits has evolved into a creative journey focused on crafting visual experiences that make you feel something.
              </p>
              <p className="text-gray-400 font-sans mb-12 leading-relaxed">
                When I'm not studying complex algorithms, I'm color grading footage, syncing beats, and exploring the intersection of web development and creative design. I don't just edit videos; I engineer emotions.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative mt-8">
              <JourneyCard
                year="2024"
                title="The First Edit"
                desc="Started experimenting with VN and CapCut, creating fan edits for favorite cricket players ,cricket montage and learning the basics of pacing."
                delay={0.2}
              />
              <JourneyCard
                year="2025"
                title="Discovering Cinema"
                desc="Dove deep into color grading, sound design, and After Effects. Started focusing on narrative-driven hype reels rather than just highlight packages.Started making Travel Edits"
                delay={0.4}
              />
              <JourneyCard
                year="2026"
                title="First Major Software - DavinciResolve"
                desc="Finally got my hands on Davinci Resolve for increasing the quality of my edits and serving some premium content.Dove into Color grading , Cinematic edits eperimenting more advanced features on Davinci ."
                delay={0.6}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
