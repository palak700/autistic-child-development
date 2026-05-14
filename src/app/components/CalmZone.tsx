import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Play, Pause, Volume2 } from 'lucide-react';

const soundOptions = [
  { id: 'ocean', name: 'Ocean Waves', icon: '🌊', color: 'from-[#B4D4FF] to-[#9BC5FF]' },
  { id: 'rain', name: 'Gentle Rain', icon: '🌧️', color: 'from-[#C8E6C9] to-[#A5D6A7]' },
  { id: 'forest', name: 'Forest Sounds', icon: '🌲', color: 'from-[#C8B6E2] to-[#B9A5D8]' },
  { id: 'birds', name: 'Birds Singing', icon: '🐦', color: 'from-[#FFE4B4] to-[#FFD89B]' }
];

export function CalmZone() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSound, setSelectedSound] = useState(soundOptions[0]);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Breathing animation cycle
  const breathingAnimation = {
    inhale: { scale: 1.3, transition: { duration: 4 } },
    hold: { scale: 1.3, transition: { duration: 2 } },
    exhale: { scale: 1, transition: { duration: 4 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2D3748] to-[#4A5568] p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/child-dashboard')}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 shadow-md transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-3xl text-white">Calm Zone</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Breathing Circle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-12"
        >
          <p className="text-xl text-white/80 mb-8">Follow the circle to breathe</p>
          
          <div className="relative w-64 h-64 flex items-center justify-center">
            <motion.div
              animate={breathingPhase === 'inhale' ? breathingAnimation.inhale : 
                       breathingPhase === 'hold' ? breathingAnimation.hold : 
                       breathingAnimation.exhale}
              onAnimationComplete={() => {
                if (breathingPhase === 'inhale') setBreathingPhase('hold');
                else if (breathingPhase === 'hold') setBreathingPhase('exhale');
                else setBreathingPhase('inhale');
              }}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-[#B4D4FF] to-[#C8B6E2] opacity-60"
            />
            <motion.div
              animate={breathingPhase === 'inhale' ? breathingAnimation.inhale : 
                       breathingPhase === 'hold' ? breathingAnimation.hold : 
                       breathingAnimation.exhale}
              className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[#FFD4B4] to-[#FFC89B] opacity-80"
            />
            <motion.div
              animate={breathingPhase === 'inhale' ? breathingAnimation.inhale : 
                       breathingPhase === 'hold' ? breathingAnimation.hold : 
                       breathingAnimation.exhale}
              className="absolute w-16 h-16 rounded-full bg-white"
            />
          </div>

          <motion.p
            key={breathingPhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl text-white mt-8 capitalize"
          >
            {breathingPhase === 'hold' ? 'Hold...' : `${breathingPhase}...`}
          </motion.p>
        </motion.div>

        {/* Calming Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1641173587142-ce4c1b35e950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMHNjZW5lfGVufDF8fHx8MTc3MDY1NjEzNHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Peaceful nature scene"
            className="w-full h-48 object-cover opacity-70"
          />
        </motion.div>

        {/* Sound Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Volume2 className="w-6 h-6 text-white" />
            <h2 className="text-2xl text-white">Calming Sounds</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {soundOptions.map((sound) => (
              <button
                key={sound.id}
                onClick={() => setSelectedSound(sound)}
                className={`bg-gradient-to-br ${sound.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
                  selectedSound.id === sound.id ? 'ring-4 ring-white' : ''
                }`}
              >
                <div className="text-4xl mb-2">{sound.icon}</div>
                <p className="text-lg text-white">{sound.name}</p>
              </button>
            ))}
          </div>

          {/* Play/Pause Control */}
          <button
            onClick={togglePlay}
            className={`w-full py-6 px-8 rounded-3xl text-lg shadow-lg transition-all flex items-center justify-center gap-4 ${
              isPlaying
                ? 'bg-white/20 hover:bg-white/30 text-white'
                : 'bg-white hover:bg-gray-100 text-[#4A5568]'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-7 h-7" />
                <span>Pause {selectedSound.name}</span>
              </>
            ) : (
              <>
                <Play className="w-7 h-7" />
                <span>Play {selectedSound.name}</span>
              </>
            )}
          </button>

          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center"
            >
              <p className="text-white/80">Now playing...</p>
            </motion.div>
          )}
        </motion.div>

        {/* Calming Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center"
        >
          <p className="text-lg text-white/90">
            Take your time. You're safe here. Everything is going to be okay. 🌙✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}
