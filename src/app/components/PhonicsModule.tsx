import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Volume2, Mic, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import * as Progress from '@radix-ui/react-progress';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function PhonicsModule() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState('');

  const currentLetter = alphabet[currentIndex];
  const progress = ((currentIndex + 1) / alphabet.length) * 100;

  const playSound = () => {
    setFeedback(`Playing sound for letter ${currentLetter}`);
    setTimeout(() => setFeedback(''), 2000);
  };

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setFeedback('Listening...');
      
      setTimeout(() => {
        setIsRecording(false);
        setFeedback('Great job! You said it perfectly! 🌟');
        setTimeout(() => setFeedback(''), 3000);
      }, 2000);
    }
  };

  const nextLetter = () => {
    if (currentIndex < alphabet.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFeedback('');
    }
  };

  const prevLetter = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFeedback('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-[#F5F0FF] p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/child-dashboard')}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-[#4A5568]" />
          </button>
          <h1 className="text-3xl text-[#4A5568]">Phonics Learning</h1>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg text-[#718096]">Your Progress</p>
            <p className="text-lg text-[#718096]">{currentIndex + 1} / {alphabet.length}</p>
          </div>
          <Progress.Root
            className="relative overflow-hidden bg-white rounded-full w-full h-4 shadow-inner"
            value={progress}
          >
            <Progress.Indicator
              className="bg-gradient-to-r from-[#B4D4FF] to-[#9BC5FF] w-full h-full transition-transform duration-500 ease-out rounded-full"
              style={{ transform: `translateX(-${100 - progress}%)` }}
            />
          </Progress.Root>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto">
        {/* Letter Card */}
        <motion.div
          key={currentLetter}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl p-12 mb-8 text-center"
        >
          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#B4D4FF] to-[#C8B6E2] rounded-3xl flex items-center justify-center mb-8 shadow-lg">
            <span className="text-9xl text-white">{currentLetter}</span>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={prevLetter}
              disabled={currentIndex === 0}
              className={`p-4 rounded-full shadow-lg transition-all ${
                currentIndex === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-[#FFD4B4] hover:bg-[#FFC89B] text-white'
              }`}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextLetter}
              disabled={currentIndex === alphabet.length - 1}
              className={`p-4 rounded-full shadow-lg transition-all ${
                currentIndex === alphabet.length - 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-[#FFD4B4] hover:bg-[#FFC89B] text-white'
              }`}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={playSound}
              className="flex items-center justify-center gap-3 bg-[#B4D4FF] hover:bg-[#A0C8FF] text-white py-5 px-10 rounded-3xl shadow-lg hover:shadow-xl transition-all text-lg"
            >
              <Volume2 className="w-7 h-7" />
              <span>Play Sound</span>
            </button>

            <button
              onClick={toggleRecording}
              className={`flex items-center justify-center gap-3 py-5 px-10 rounded-3xl shadow-lg hover:shadow-xl transition-all text-lg ${
                isRecording
                  ? 'bg-red-400 hover:bg-red-500 text-white animate-pulse'
                  : 'bg-[#FFB4D4] hover:bg-[#FF9BC5] text-white'
              }`}
            >
              <Mic className="w-7 h-7" />
              <span>{isRecording ? 'Listening...' : 'Try It'}</span>
            </button>
          </div>
        </motion.div>

        {/* Feedback Area */}
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 rounded-3xl p-6 text-center shadow-lg"
          >
            <p className="text-xl text-[#4A5568]">{feedback}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
