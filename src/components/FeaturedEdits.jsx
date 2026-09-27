import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

const edits = [
  {
    id: 1,
    title: 'Cinematic Edit',
    category: 'Cinematic',
    description: 'A portrait cinematic edit built around rhythm, atmosphere, and visual storytelling.',
    video: '/videos/cinematic-edit.mp4',
  },
  {
    id: 2,
    title: 'Delhi Edit',
    category: 'Travel',
    description: 'A fast-paced Delhi travel edit capturing the energy, movement, and character of the city.',
    video: '/videos/delhi-edit.mp4',
  },
  {
    id: 3,
    title: 'Maharashtra — Pune Trip',
    category: 'Travel',
    description: 'A portrait travel reel from Pune, focused on atmosphere, transitions, and memorable moments.',
    video: '/videos/maharashtra-pune-edit.mp4',
  },
  {
    id: 4,
    title: 'Spider-Man — BND',
    category: 'Fan Edit',
    description: 'A high-energy fan edit combining music, motion, cuts, and cinematic character moments.',
    video: '/videos/spiderman-bnd-edit.mp4',
  },
];

const pauseOtherVideos = (currentVideo) => {
  document.querySelectorAll('#work video').forEach((video) => {
    if (video !== currentVideo) video.pause();
  });
};

const VideoCard = ({ edit, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (event) => {
    pauseOtherVideos(event.currentTarget);
    setIsPlaying(true);
  };

  const handleOverlayPlay = async (event) => {
    const card = event.currentTarget.closest('[data-video-card]');
    const video = card?.querySelector('video');
    if (!video) return;

    pauseOtherVideos(video);

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error('Unable to play video:', error);
    }
  };

  const handlePause = () => setIsPlaying(false);

  return (
    <motion.article
      data-video-card
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark-800/70"
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <video
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          onPlay={handlePlay}
          onPause={handlePause}
          aria-label={`${edit.title} video`}
        >
          <source src={edit.video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <button
          type="button"
          onClick={handleOverlayPlay}
          aria-label={`Play ${edit.title}`}
          className={`pointer-events-auto absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-neon-blue ${isPlaying ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
        >
          <Play size={21} fill="currentColor" className="ml-0.5" />
        </button>

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            {edit.category}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
            <Volume2 size={12} /> Audio
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-neon-blue">
          0{index + 1}
        </div>
        <h3 className="font-cinematic text-2xl font-bold text-white">
          {edit.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-400">
          {edit.description}
        </p>
      </div>
    </motion.article>
  );
};

const FeaturedEdits = () => {
  return (
    <section id="work" className="relative z-10 bg-dark-900 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-neon-blue">
              Selected work
            </p>
            <h2 className="font-cinematic text-4xl font-bold text-white md:text-5xl">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-500">Edits</span>
            </h2>
            <p className="mt-4 max-w-xl font-sans text-gray-400">
              A selection of cinematic, travel, and fan edits. Press play to watch each piece with its original audio.
            </p>
          </motion.div>

          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-blue" />
            {edits.length} projects
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {edits.map((edit, index) => (
            <VideoCard key={edit.id} edit={edit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEdits;
