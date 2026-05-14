import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Bell, Shield, Eye, EyeOff } from 'lucide-react';
import * as Switch from '@radix-ui/react-switch';
import * as Slider from '@radix-ui/react-slider';

export function ParentalControls() {
  const navigate = useNavigate();
  const [screenTimeLimit, setScreenTimeLimit] = useState(60);
  const [modules, setModules] = useState({
    phonics: true,
    story: true,
    emotion: true,
    calm: true
  });
  const [notifications, setNotifications] = useState({
    dailyReport: true,
    milestones: true,
    emotionAlerts: false,
    weeklyInsights: true
  });

  const toggleModule = (moduleName: keyof typeof modules) => {
    setModules(prev => ({ ...prev, [moduleName]: !prev[moduleName] }));
  };

  const toggleNotification = (notifName: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [notifName]: !prev[notifName] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F9FC] to-[#E8F4F8] p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/parent-dashboard')}
            className="p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-[#4A5568]" />
          </button>
          <h1 className="text-3xl text-[#4A5568]">Parental Controls</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Screen Time Control */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#B4D4FF]/20 rounded-xl">
              <Clock className="w-6 h-6 text-[#4A5568]" />
            </div>
            <h2 className="text-2xl text-[#4A5568]">Screen Time Limit</h2>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg text-[#718096]">Daily limit</p>
              <p className="text-2xl text-[#4A5568]">{screenTimeLimit} minutes</p>
            </div>
            
            <Slider.Root
              className="relative flex items-center select-none touch-none w-full h-5"
              value={[screenTimeLimit]}
              onValueChange={(value) => setScreenTimeLimit(value[0])}
              max={180}
              min={15}
              step={15}
            >
              <Slider.Track className="bg-gray-200 relative grow rounded-full h-3">
                <Slider.Range className="absolute bg-gradient-to-r from-[#B4D4FF] to-[#9BC5FF] rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb
                className="block w-6 h-6 bg-white shadow-lg rounded-full hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#B4D4FF]/50 transition-transform"
                aria-label="Screen time"
              />
            </Slider.Root>
            
            <div className="flex justify-between text-sm text-[#718096] mt-2">
              <span>15 min</span>
              <span>180 min</span>
            </div>
          </div>

          <div className="bg-[#E8F4F8] rounded-xl p-4">
            <p className="text-sm text-[#718096]">
              ℹ️ A gentle reminder will be shown 5 minutes before the time limit.
            </p>
          </div>
        </motion.div>

        {/* Module Access Control */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#FFD4B4]/20 rounded-xl">
              <Shield className="w-6 h-6 text-[#4A5568]" />
            </div>
            <h2 className="text-2xl text-[#4A5568]">Module Access</h2>
          </div>

          <div className="space-y-4">
            {[
              { key: 'phonics' as const, label: 'Phonics Module', icon: '📚' },
              { key: 'story' as const, label: 'Story Corner', icon: '📖' },
              { key: 'emotion' as const, label: 'Emotion Tracker', icon: '❤️' },
              { key: 'calm' as const, label: 'Calm Zone', icon: '✨' }
            ].map((module) => (
              <div key={module.key} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{module.icon}</span>
                  <div>
                    <p className="text-lg text-[#4A5568]">{module.label}</p>
                    <p className="text-sm text-[#718096]">
                      {modules[module.key] ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                </div>
                
                <Switch.Root
                  checked={modules[module.key]}
                  onCheckedChange={() => toggleModule(module.key)}
                  className={`w-14 h-8 rounded-full transition-colors ${
                    modules[module.key] ? 'bg-[#B4D4FF]' : 'bg-gray-300'
                  }`}
                >
                  <Switch.Thumb className="block w-6 h-6 bg-white rounded-full shadow-lg transition-transform translate-x-1 data-[state=checked]:translate-x-7" />
                </Switch.Root>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notification Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#C8B6E2]/20 rounded-xl">
              <Bell className="w-6 h-6 text-[#4A5568]" />
            </div>
            <h2 className="text-2xl text-[#4A5568]">Notifications</h2>
          </div>

          <div className="space-y-4">
            {[
              { key: 'dailyReport' as const, label: 'Daily Activity Report', description: 'Get a summary of daily activities' },
              { key: 'milestones' as const, label: 'Learning Milestones', description: 'Celebrate achievements together' },
              { key: 'emotionAlerts' as const, label: 'Emotion Alerts', description: 'Get notified of significant mood changes' },
              { key: 'weeklyInsights' as const, label: 'Weekly Insights', description: 'Receive weekly progress analysis' }
            ].map((notif) => (
              <div key={notif.key} className="flex items-start justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <p className="text-lg text-[#4A5568] mb-1">{notif.label}</p>
                  <p className="text-sm text-[#718096]">{notif.description}</p>
                </div>
                
                <Switch.Root
                  checked={notifications[notif.key]}
                  onCheckedChange={() => toggleNotification(notif.key)}
                  className={`w-14 h-8 rounded-full transition-colors flex-shrink-0 ml-4 ${
                    notifications[notif.key] ? 'bg-[#C8B6E2]' : 'bg-gray-300'
                  }`}
                >
                  <Switch.Thumb className="block w-6 h-6 bg-white rounded-full shadow-lg transition-transform translate-x-1 data-[state=checked]:translate-x-7" />
                </Switch.Root>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/30 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-white mb-2">Privacy & Safety</h3>
              <p className="text-white/90">
                All data is stored securely. Emotion detection and voice recognition happen on-device for maximum privacy. 
                We are committed to protecting your child's information.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-gradient-to-r from-[#B4D4FF] to-[#C8B6E2] hover:from-[#A0C8FF] hover:to-[#B9A5D8] text-white py-5 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-lg"
        >
          Save Changes
        </motion.button>
      </div>
    </div>
  );
}
