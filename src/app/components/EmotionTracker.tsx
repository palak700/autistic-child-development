import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Camera, Smile, Frown, Meh, Heart } from 'lucide-react';

const emotions = [
  { id: 'happy', label: 'Happy', icon: '😊', color: 'bg-[#FFD4B4]' },
  { id: 'sad', label: 'Sad', icon: '😢', color: 'bg-[#B4D4FF]' },
  { id: 'calm', label: 'Calm', icon: '😌', color: 'bg-[#C8E6C9]' },
  { id: 'angry', label: 'Angry', icon: '😠', color: 'bg-[#FFB4B4]' },
  { id: 'excited', label: 'Excited', icon: '🤩', color: 'bg-[#FFE4B4]' },
  { id: 'worried', label: 'Worried', icon: '😰', color: 'bg-[#D4C5F9]' }
];

export function EmotionTracker() {
  const navigate = useNavigate();
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [detectedEmotion, setDetectedEmotion] = useState<string | null>(null);

  const handleScan = () => {
    setIsScanning(true);
    setDetectedEmotion(null);
    
    // Simulate emotion detection
    setTimeout(() => {
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
      setDetectedEmotion(randomEmotion.id);
      setIsScanning(false);
    }, 2000);
  };

  const selectedEmotionData = emotions.find(e => e.id === selectedEmotion);
  const detectedEmotionData = emotions.find(e => e.id === detectedEmotion);

  const getFeedbackMessage = (emotionId: string) => {
    const messages: Record<string, string> = {
      happy: "That's wonderful! Your happiness is beautiful! 🌟",
      sad: "It's okay to feel sad sometimes. You're not alone, and this feeling will pass. 💙",
      calm: "Being calm is a superpower! You're doing great! 🌊",
      angry: "Feeling angry is normal. Take deep breaths. You're safe here. 🌈",
      excited: "Your excitement is contagious! Enjoy this feeling! ✨",
      worried: "It's brave to notice when you're worried. Let's take it one step at a time. 🌸"
    };
    return messages[emotionId] || "Thank you for sharing how you feel!";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-[#E8F4F8] p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/child-dashboard')}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-[#4A5568]" />
          </button>
          <h1 className="text-3xl text-[#4A5568]">How Are You Feeling?</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Emotion Detection Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <h2 className="text-2xl text-[#4A5568] mb-6 text-center">Let's Check Your Emotion</h2>
          
          {/* Camera Placeholder */}
          <div className="relative mb-6">
            <div className={`aspect-video rounded-2xl overflow-hidden ${
              isScanning ? 'bg-gradient-to-br from-[#B4D4FF] to-[#C8B6E2] animate-pulse' : 'bg-gradient-to-br from-gray-100 to-gray-200'
            } flex items-center justify-center`}>
              {detectedEmotionData ? (
                <div className="text-center">
                  <div className="text-8xl mb-4">{detectedEmotionData.icon}</div>
                  <p className="text-2xl text-[#4A5568]">{detectedEmotionData.label}</p>
                </div>
              ) : (
                <div className="text-center">
                  <Camera className={`w-20 h-20 mx-auto mb-4 ${isScanning ? 'text-white' : 'text-gray-400'}`} />
                  <p className="text-lg text-gray-500">
                    {isScanning ? 'Detecting your emotion...' : 'Camera view will appear here'}
                  </p>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleScan}
            disabled={isScanning}
            className={`w-full py-5 px-8 rounded-3xl text-lg shadow-lg transition-all ${
              isScanning
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#B4D4FF] hover:bg-[#A0C8FF] text-white hover:shadow-xl'
            }`}
          >
            {isScanning ? 'Scanning...' : 'Scan My Emotion'}
          </button>

          {detectedEmotionData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 p-6 bg-gradient-to-br from-[#FFD4B4] to-[#FFC89B] rounded-2xl"
            >
              <p className="text-lg text-white text-center">
                {getFeedbackMessage(detectedEmotionData.id)}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Manual Selection Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <h2 className="text-2xl text-[#4A5568] mb-6 text-center">Or Pick How You Feel</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {emotions.map((emotion, index) => (
              <motion.button
                key={emotion.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedEmotion(emotion.id)}
                className={`${emotion.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
                  selectedEmotion === emotion.id ? 'ring-4 ring-[#4A5568]' : ''
                }`}
              >
                <div className="text-5xl mb-3">{emotion.icon}</div>
                <p className="text-lg text-[#4A5568]">{emotion.label}</p>
              </motion.button>
            ))}
          </div>

          {selectedEmotionData && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-gradient-to-br from-[#C8B6E2] to-[#B9A5D8] rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <Heart className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="text-lg text-white">
                  {getFeedbackMessage(selectedEmotionData.id)}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Reassurance Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/70 rounded-3xl p-6 text-center"
        >
          <p className="text-lg text-[#718096]">
            Remember: All feelings are okay. You are safe, loved, and doing great! 💜
          </p>
        </motion.div>
      </div>
    </div>
  );
}
