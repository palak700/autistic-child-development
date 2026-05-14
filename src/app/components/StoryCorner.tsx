import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Lightbulb } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: 'Sharing with Friends',
    preview: 'Learn about the joy of sharing toys and making friends happy.',
    content: 'Maya had a beautiful red ball. Her friend Ravi wanted to play with it too. Maya remembered how good it felt when someone shared with her. She smiled and said, "Let\'s play together!" They had so much fun!',
    lesson: 'Sharing makes everyone happy, including you!',
    emotion: 'Happiness',
    color: 'from-[#FFD4B4] to-[#FFC89B]'
  },
  {
    id: 2,
    title: 'When I Feel Sad',
    preview: 'It\'s okay to feel sad sometimes. Let\'s learn what helps.',
    content: 'Sometimes Aarav felt sad, and that was okay. When he felt sad, he would talk to his mom, draw pictures, or hug his favorite teddy bear. He learned that feelings come and go, like clouds in the sky.',
    lesson: 'All feelings are okay. Talking about them helps us feel better.',
    emotion: 'Understanding',
    color: 'from-[#B4D4FF] to-[#9BC5FF]'
  },
  {
    id: 3,
    title: 'Taking Turns',
    preview: 'Everyone gets a chance when we take turns.',
    content: 'At the playground, Priya wanted to go on the swing. But someone else was using it. She waited patiently, counting the clouds. When it was her turn, she felt proud of herself for waiting. Taking turns is fair and kind!',
    lesson: 'Patience and taking turns shows respect for others.',
    emotion: 'Pride',
    color: 'from-[#C8B6E2] to-[#B9A5D8]'
  },
  {
    id: 4,
    title: 'Asking for Help',
    preview: 'It\'s brave to ask for help when you need it.',
    content: 'Rohan couldn\'t reach the book on the high shelf. At first, he felt frustrated. Then he remembered it\'s okay to ask for help. He asked his teacher, who was happy to help him. Asking for help is smart and brave!',
    lesson: 'Asking for help shows strength, not weakness.',
    emotion: 'Courage',
    color: 'from-[#FFB4D4] to-[#FF9BC5]'
  }
];

export function StoryCorner() {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const currentStory = selectedStory !== null ? stories.find(s => s.id === selectedStory) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-[#F0F9FF] p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              if (currentStory) {
                setSelectedStory(null);
              } else {
                navigate('/child-dashboard');
              }
            }}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-[#4A5568]" />
          </button>
          <h1 className="text-3xl text-[#4A5568]">Story Corner</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {!currentStory ? (
          /* Story List */
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg text-[#718096] mb-8 text-center"
            >
              Choose a story to read about feelings and friendships
            </motion.p>

            {stories.map((story, index) => (
              <motion.button
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedStory(story.id)}
                className={`w-full bg-gradient-to-br ${story.color} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-left hover:scale-105`}
              >
                <div className="flex items-start gap-6">
                  <div className="p-5 bg-white/30 rounded-2xl">
                    <BookOpen className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl text-white mb-3">{story.title}</h2>
                    <p className="text-lg text-white/90 mb-3">{story.preview}</p>
                    <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                      {story.emotion}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          /* Story Reader */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Story Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1637195141628-f0f75585a07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBzdG9yeSUyMGJvb2t8ZW58MXx8fHwxNzcwNjU2MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Story illustration"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Story Content */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl text-[#4A5568] mb-6">{currentStory.title}</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-xl text-[#4A5568] leading-relaxed">
                  {currentStory.content}
                </p>
              </div>

              {/* Lesson Takeaway */}
              <div className={`bg-gradient-to-br ${currentStory.color} p-6 rounded-2xl`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/30 rounded-xl">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">What We Learned</h3>
                    <p className="text-lg text-white/95">{currentStory.lesson}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Stories Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="w-full bg-[#B4D4FF] hover:bg-[#A0C8FF] text-white py-5 px-8 rounded-3xl shadow-lg hover:shadow-xl transition-all text-lg"
            >
              Read Another Story
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
