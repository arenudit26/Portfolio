// import { motion } from 'framer-motion';
// import { AtSign, Play, Star } from 'lucide-react';

// const testimonials = [
//   {
//     name: "Alex M.",
//     role: "Sports Creator",
//     text: "The pacing in his edits is unreal. He knows exactly when to drop the beat and let the visuals breathe. Highly recommended for hype reels.",
//   },
//   {
//     name: "Priya K.",
//     role: "Fitness Influencer",
//     text: "Took my standard gym footage and turned it into a cinematic movie trailer. My engagement spiked by 300% on the reels he edited.",
//   },
//   {
//     name: "Rahul S.",
//     role: "Cricket Academy",
//     text: "Captured the emotion of our players perfectly. The slow-motion cuts and color grading gave our promotional video a true broadcast quality.",
//   }
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-24 bg-dark-800 relative border-t border-white/5">
//       <div className="container mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-4"
//           >
//             Social <span className="text-transparent bg-clip-text bg-gradient-to-r from-stadium-orange to-yellow-500">Proof</span>
//           </motion.h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//           {/* Metrics Column */}
//           <div className="lg:col-span-4 space-y-6">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="glass p-8 rounded-2xl border-white/5 relative overflow-hidden group"
//             >
//               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
//                 <AtSign size={64} />
//               </div>
//               <p className="text-gray-400 font-sans text-sm uppercase tracking-wider mb-2">Audience Growth</p>
//               <h3 className="text-4xl font-cinematic font-bold text-white mb-1">+150K</h3>
//               <p className="text-neon-blue font-sans text-sm">Followers across client pages</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="glass p-8 rounded-2xl border-white/5 relative overflow-hidden group"
//             >
//               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
//                 <Play size={64} />
//               </div>
//               <p className="text-gray-400 font-sans text-sm uppercase tracking-wider mb-2">Reel Engagement</p>
//               <h3 className="text-4xl font-cinematic font-bold text-white mb-1">Top 1%</h3>
//               <p className="text-stadium-orange font-sans text-sm">Retention rate on short form</p>
//             </motion.div>
//           </div>

//           {/* Testimonials Grid */}
//           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {testimonials.map((test, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className={`glass p-8 rounded-2xl border-white/5 flex flex-col justify-between ${index === 2 ? 'md:col-span-2' : ''}`}
//               >
//                 <div>
//                   <div className="flex gap-1 mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
//                     ))}
//                   </div>
//                   <p className="text-gray-300 font-sans italic leading-relaxed mb-6">
//                     "{test.text}"
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center">
//                     <span className="text-white font-cinematic font-bold">{test.name.charAt(0)}</span>
//                   </div>
//                   <div>
//                     <h4 className="text-white font-sans font-semibold text-sm">{test.name}</h4>
//                     <p className="text-gray-500 font-sans text-xs uppercase tracking-wider">{test.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
