import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Settings, Users, TrendingUp, Clock, Heart, BookOpen } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const moduleUsageData = [
  { name: 'Phonics', minutes: 45 },
  { name: 'Stories', minutes: 30 },
  { name: 'Emotions', minutes: 20 },
  { name: 'Calm Zone', minutes: 25 }
];

const emotionTrendsData = [
  { day: 'Mon', happy: 8, calm: 6, other: 2 },
  { day: 'Tue', happy: 7, calm: 7, other: 3 },
  { day: 'Wed', happy: 9, calm: 5, other: 2 },
  { day: 'Thu', happy: 8, calm: 8, other: 1 },
  { day: 'Fri', happy: 10, calm: 6, other: 2 }
];

export function ParentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F9FC] to-[#E8F4F8] p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl text-[#4A5568] mb-2">Parent Dashboard</h1>
            <p className="text-lg text-[#718096]">Track your child's progress and growth</p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/')}
              className="p-3 rounded-xl bg-white hover:bg-gray-50 shadow-md transition-all"
            >
              <Home className="w-6 h-6 text-[#4A5568]" />
            </button>
            <button
              onClick={() => navigate('/parental-controls')}
              className="p-3 rounded-xl bg-white hover:bg-gray-50 shadow-md transition-all"
            >
              <Settings className="w-6 h-6 text-[#4A5568]" />
            </button>
            <button
              onClick={() => navigate('/parent-community')}
              className="p-3 rounded-xl bg-white hover:bg-gray-50 shadow-md transition-all"
            >
              <Users className="w-6 h-6 text-[#4A5568]" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-[#B4D4FF] to-[#9BC5FF] p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 mb-1">Total Time</p>
                <p className="text-3xl text-white">2h 15m</p>
              </div>
              <Clock className="w-8 h-8 text-white/60" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#FFD4B4] to-[#FFC89B] p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 mb-1">Activities</p>
                <p className="text-3xl text-white">18</p>
              </div>
              <TrendingUp className="w-8 h-8 text-white/60" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#FFB4D4] to-[#FF9BC5] p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 mb-1">Positive Moods</p>
                <p className="text-3xl text-white">85%</p>
              </div>
              <Heart className="w-8 h-8 text-white/60" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[#C8B6E2] to-[#B9A5D8] p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 mb-1">Stories Read</p>
                <p className="text-3xl text-white">12</p>
              </div>
              <BookOpen className="w-8 h-8 text-white/60" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Module Usage Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl text-[#4A5568] mb-6">Module Usage (This Week)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={moduleUsageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="name" stroke="#718096" />
              <YAxis stroke="#718096" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none', 
                  borderRadius: '12px', 
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
                }}
              />
              <Bar dataKey="minutes" fill="#B4D4FF" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Emotion Trends Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl text-[#4A5568] mb-6">Emotion Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={emotionTrendsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="day" stroke="#718096" />
              <YAxis stroke="#718096" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none', 
                  borderRadius: '12px', 
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
                }}
              />
              <Line type="monotone" dataKey="happy" stroke="#FFD4B4" strokeWidth={3} />
              <Line type="monotone" dataKey="calm" stroke="#B4D4FF" strokeWidth={3} />
              <Line type="monotone" dataKey="other" stroke="#C8B6E2" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#FFD4B4]"></div>
              <span className="text-sm text-[#718096]">Happy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#B4D4FF]"></div>
              <span className="text-sm text-[#718096]">Calm</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#C8B6E2]"></div>
              <span className="text-sm text-[#718096]">Other</span>
            </div>
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl text-[#4A5568] mb-6">Recent Activities</h2>
          <div className="space-y-4">
            {[
              { activity: 'Completed Phonics Lesson (Letter M)', time: '2 hours ago', color: 'bg-[#B4D4FF]' },
              { activity: 'Read "Sharing with Friends" story', time: '4 hours ago', color: 'bg-[#FFD4B4]' },
              { activity: 'Used Calm Zone for 10 minutes', time: '6 hours ago', color: 'bg-[#C8B6E2]' },
              { activity: 'Tracked emotion: Happy', time: 'Yesterday', color: 'bg-[#FFB4D4]' }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className={`w-2 h-2 rounded-full ${item.color} mt-2 flex-shrink-0`}></div>
                <div className="flex-1">
                  <p className="text-[#4A5568]">{item.activity}</p>
                  <p className="text-sm text-[#718096]">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl text-white mb-6">Weekly Insights</h2>
          <div className="space-y-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white mb-2">🎉 Great Progress!</p>
              <p className="text-white/90 text-sm">
                Your child has shown consistent engagement with learning activities this week.
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white mb-2">💙 Emotional Awareness</p>
              <p className="text-white/90 text-sm">
                The emotion tracker shows positive self-awareness. Keep encouraging expression!
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white mb-2">📚 Favorite Activity</p>
              <p className="text-white/90 text-sm">
                Phonics has been the most engaged module. Consider exploring related activities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
