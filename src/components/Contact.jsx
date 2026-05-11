import { motion } from 'framer-motion';
import { AtSign, Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-neon-blue/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-cinematic font-bold text-white mb-6"
            >
              Follow Me On Socials <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Let's Create Something Epic.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 font-sans max-w-xl mx-auto"
            >
              Ready to elevate your visual content? Drop a message below or reach out via socials. Let's make the internet stop scrolling.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

            {/* Socials / Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 space-y-6"
            >
              <a href="#" className="flex items-center gap-4 group p-4 glass rounded-xl border-white/5 hover:border-neon-blue/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center group-hover:bg-neon-blue/10 group-hover:text-neon-blue group-hover:box-glow transition-all">
                  <AtSign size={20} className="text-white group-hover:text-neon-blue transition-colors" />
                </div>
                <div>
                  <p className="text-white font-sans font-medium text-sm">Instagram</p>
                  <p className="text-gray-500 font-sans text-xs uppercase tracking-wider mt-1">@__uditaren__</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 group p-4 glass rounded-xl border-white/5 hover:border-stadium-orange/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center group-hover:bg-stadium-orange/10 group-hover:text-stadium-orange group-hover:drop-shadow-[0_0_15px_rgba(255,140,0,0.5)] transition-all">
                  <Mail size={20} className="text-white group-hover:text-stadium-orange transition-colors" />
                </div>
                <div>
                  <p className="text-white font-sans font-medium text-sm">Email</p>
                  <p className="text-gray-500 font-sans text-xs uppercase tracking-wider mt-1">arenudit2626@gmail.com</p>
                </div>
              </a>

              {/* <a href="#" className="flex items-center gap-4 group p-4 glass rounded-xl border-white/5 hover:border-green-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center group-hover:bg-green-500/10 group-hover:text-green-500 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all">
                  <MessageCircle size={20} className="text-white group-hover:text-green-500 transition-colors" />
                </div>
                <div>
                  <p className="text-white font-sans font-medium text-sm">WhatsApp</p>
                  <p className="text-gray-500 font-sans text-xs uppercase tracking-wider mt-1">Let's chat</p>
                </div>
              </a> */}
            </motion.div>

            {/* Contact Form */}
            {/* <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-3 glass p-8 rounded-2xl border-white/5"
            > */}
            {/* <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 font-sans text-xs uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark-800 border border-white/10 rounded-none px-4 py-3 text-white font-sans focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 font-sans text-xs uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark-800 border border-white/10 rounded-none px-4 py-3 text-white font-sans focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 font-sans text-xs uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full bg-dark-800 border border-white/10 rounded-none px-4 py-3 text-white font-sans focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-600 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-white text-black font-sans font-semibold py-4 flex items-center justify-center gap-2 hover:bg-neon-blue hover:text-black hover:box-glow transition-all"
                >
                  Send Message <Send size={18} />
                </button>
              </div> */}
            {/* </motion.form> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
