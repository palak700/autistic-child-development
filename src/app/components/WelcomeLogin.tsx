import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Smile, UserCircle } from 'lucide-react';

export function WelcomeLogin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-[#F5E6F3] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full"
      >
        {/* Logo and Welcome */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#B4D4FF] to-[#C8B6E2] rounded-full flex items-center justify-center"
          >
            <Smile className="w-12 h-12 text-white" strokeWidth={2} />
          </motion.div>
          
          <h1 className="text-4xl mb-3 text-[#4A5568]">CalmConnect</h1>
          <p className="text-lg text-[#718096]">A calm space to learn and grow</p>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 rounded-3xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1769095206270-09c3d233a2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwY2hpbGQlMjBpbGx1c3RyYXRpb24lMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzA2NTYxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Calm and peaceful illustration"
            className="w-full h-48 object-cover"
          />
        </motion.div>

        {/* Login Buttons */}
        <div className="space-y-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => navigate('/child-dashboard')}
            className="w-full bg-[#B4D4FF] hover:bg-[#A0C8FF] text-[#2D3748] py-6 px-8 rounded-3xl flex items-center justify-center gap-4 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Smile className="w-8 h-8" strokeWidth={2} />
            <span className="text-xl">Child Login</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            onClick={() => navigate('/parent-dashboard')}
            className="w-full bg-[#D4C5F9] hover:bg-[#C5B5E8] text-[#2D3748] py-6 px-8 rounded-3xl flex items-center justify-center gap-4 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <UserCircle className="w-8 h-8" strokeWidth={2} />
            <span className="text-xl">Parent Login</span>
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center text-sm text-[#A0AEC0] mt-8"
        >
          A safe and supportive learning environment
        </motion.p>
      </motion.div>
    </div>
  );
}
