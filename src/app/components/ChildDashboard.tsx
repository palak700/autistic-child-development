import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, MessageCircle, Heart, Sparkles, Home } from 'lucide-react';

export function ChildDashboard() {
  const navigate = useNavigate();

  const modules = [
    {
      id: 'phonics',
      title: 'Phonics',
      description: 'Learn letters and sounds',
      icon: BookOpen,
      color: 'from-[#B4D4FF] to-[#9BC5FF]',
      path: '/phonics'
    },
    {
      id: 'story',
      title: 'Story Corner',
      description: 'Read amazing stories',
      icon: MessageCircle,
      color: 'from-[#FFD4B4] to-[#FFC89B]',
      path: '/story'
    },
    {
      id: 'emotion',
      title: 'Emotion Tracker',
      description: 'How are you feeling?',
      icon: Heart,
      color: 'from-[#FFB4D4] to-[#FF9BC5]',
      path: '/emotion'
    },
    {
      id: 'calm',
      title: 'Calm Zone',
      description: 'Relax and breathe',
      icon: Sparkles,
      color: 'from-[#C8B6E2] to-[#B9A5D8]',
      path: '/calm'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-[#FFF5F7] p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate('/')}
            className="p-3 rounded-full bg-white/60 hover:bg-white shadow-md transition-all"
          >
            <Home className="w-6 h-6 text-[#4A5568]" />
          </motion.button>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* Avatar */}
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#FFD4B4] to-[#FFC89B] rounded-full flex items-center justify-center">
            <span className="text-4xl">🌟</span>
          </div>
          
          <h1 className="text-3xl text-[#4A5568] mb-2">Hello, Friend!</h1>
          <p className="text-lg text-[#718096]">What would you like to do today?</p>
        </motion.div>
      </div>

      {/* Module Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module, index) => (
          <motion.button
            key={module.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => navigate(module.path)}
            className={`bg-gradient-to-br ${module.color} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-left hover:scale-105`}
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white/30 rounded-2xl">
                <module.icon className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl text-white mb-2">{module.title}</h2>
                <p className="text-lg text-white/90">{module.description}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Encouragement Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-2xl mx-auto mt-12 p-6 bg-white/50 rounded-3xl text-center"
      >
        <p className="text-lg text-[#718096]">
          You're doing great! Take your time and enjoy learning. 💙
        </p>
      </motion.div>
    </div>
  );
}
