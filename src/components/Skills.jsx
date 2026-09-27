import { motion } from 'framer-motion';

const skillsData = [
  { name: 'Davinci Resolve', level: 95, color: 'bg-[#00005c]', glow: 'shadow-[0_0_15px_rgba(0,0,92,0.8)]' },
  { name: 'CapCut & VN Editor', level: 85, color: 'bg-[#9999ff]', glow: 'shadow-[0_0_15px_rgba(153,153,255,0.8)]' },
  { name: 'Color Grading', level: 90, color: 'bg-stadium-orange', glow: 'shadow-[0_0_15px_rgba(255,140,0,0.8)]' },
  { name: 'Sound Design', level: 80, color: 'bg-neon-blue', glow: 'shadow-[0_0_15px_rgba(0,240,255,0.8)]' },
];

const badges = [
  "DavinciResolve", "Motion Graphics", "Storytelling", "Creative Direction", "Beat Syncing", "Visual Effects"
];

const Skills = () => {
  return (
    <section className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Progress Bars */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-10"
            >
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Expertise</span>
            </motion.h2>

            <div className="space-y-8">
              {skillsData.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-sans font-medium">{skill.name}</span>
                    <span className="text-gray-500 font-sans text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-800 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className={`h-full ${skill.color} ${skill.glow}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating Badges */}
          <div className="relative h-full min-h-[300px] flex items-center justify-center lg:justify-end">
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="px-6 py-3 glass rounded-full border-white/10 hover:border-neon-blue/50 transition-colors cursor-default"
                >
                  <span className="text-white font-sans text-sm tracking-wider uppercase drop-shadow-md">
                    {badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
