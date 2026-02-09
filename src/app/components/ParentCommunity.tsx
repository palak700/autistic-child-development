import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle, Heart, Share2, Shield, Send, FileText } from 'lucide-react';

const communityPosts = [
  {
    id: 1,
    author: 'Priya M.',
    avatar: '👩',
    time: '2 hours ago',
    content: 'My daughter has made so much progress with the Phonics module! She now recognizes all the vowels and is so excited to learn more. Thank you for creating such a wonderful platform! 🌟',
    likes: 24,
    replies: 5,
    tags: ['Success Story', 'Phonics']
  },
  {
    id: 2,
    author: 'Raj K.',
    avatar: '👨',
    time: '5 hours ago',
    content: 'Does anyone have tips on helping children transition from the Calm Zone back to regular activities? My son loves it so much he doesn\'t want to leave! 😊',
    likes: 12,
    replies: 8,
    tags: ['Question', 'Calm Zone']
  },
  {
    id: 3,
    author: 'Anjali S.',
    avatar: '👩',
    time: '1 day ago',
    content: 'The emotion tracker has been a game-changer for us. It\'s helping my child understand and express feelings better. Highly recommend spending time with this module together!',
    likes: 31,
    replies: 12,
    tags: ['Tip', 'Emotions']
  },
  {
    id: 4,
    author: 'Dev P.',
    avatar: '👨',
    time: '2 days ago',
    content: 'Resource share: I created a printable activity sheet that complements the Story Corner module. Would love to share it with the community. How can I upload it?',
    likes: 18,
    replies: 6,
    tags: ['Resource', 'Story Corner']
  }
];

const resources = [
  { title: 'Understanding Sensory Needs', type: 'Article', author: 'Dr. Maya Singh' },
  { title: 'Supporting Emotional Regulation', type: 'Guide', author: 'CalmConnect Team' },
  { title: 'Parent Support Webinar', type: 'Video', author: 'Community' },
  { title: 'Daily Routine Templates', type: 'Download', author: 'Anjali S.' }
];

export function ParentCommunity() {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState('');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F9FC] to-[#FFF5F7] p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/parent-dashboard')}
            className="p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-[#4A5568]" />
          </button>
          <div className="flex-1">
            <h1 className="text-3xl text-[#4A5568]">Parent Community</h1>
            <p className="text-lg text-[#718096]">Connect, share, and support each other</p>
          </div>
        </div>

        {/* Safety Notice */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#C8E6C9] to-[#A5D6A7] rounded-2xl p-4 flex items-center gap-3"
        >
          <Shield className="w-6 h-6 text-white flex-shrink-0" />
          <p className="text-white text-sm">
            This is a safe, moderated space. AI toxicity filtering is enabled to ensure respectful conversations.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-xl text-[#4A5568] mb-4">Share with the community</h2>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Share your experiences, ask questions, or offer support..."
              className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#B4D4FF] transition-all"
              rows={4}
            />
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-[#718096]">
                Be kind, supportive, and respectful
              </p>
              <button className="bg-gradient-to-r from-[#B4D4FF] to-[#C8B6E2] hover:from-[#A0C8FF] hover:to-[#B9A5D8] text-white py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                <Send className="w-5 h-5" />
                <span>Post</span>
              </button>
            </div>
          </motion.div>

          {/* Community Posts */}
          {communityPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Post Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B4D4FF] to-[#C8B6E2] rounded-full flex items-center justify-center text-2xl">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-[#4A5568]">{post.author}</h3>
                    <p className="text-sm text-[#718096]">{post.time}</p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-[#E8F4F8] text-[#4A5568] px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-[#4A5568] mb-4 leading-relaxed">{post.content}</p>

              {/* Post Actions */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-2 transition-colors ${
                    likedPosts.includes(post.id) ? 'text-[#FF9BC5]' : 'text-[#718096] hover:text-[#FF9BC5]'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                  <span className="text-sm">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                </button>
                
                <button className="flex items-center gap-2 text-[#718096] hover:text-[#4A5568] transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{post.replies} replies</span>
                </button>
                
                <button className="flex items-center gap-2 text-[#718096] hover:text-[#4A5568] transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-[#FFD4B4] to-[#FFC89B] rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl text-white mb-4">Community</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/90">Members</span>
                <span className="text-2xl text-white">2,347</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">Posts Today</span>
                <span className="text-2xl text-white">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">Active Now</span>
                <span className="text-2xl text-white">156</span>
              </div>
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#4A5568]" />
              <h3 className="text-xl text-[#4A5568]">Shared Resources</h3>
            </div>
            
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 rounded-xl hover:bg-[#E8F4F8] transition-colors"
                >
                  <p className="text-[#4A5568] mb-1">{resource.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-[#B4D4FF]/20 text-[#4A5568] px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    <span className="text-xs text-[#718096]">by {resource.author}</span>
                  </div>
                </button>
              ))}
            </div>

            <button className="w-full mt-4 bg-[#E8F4F8] hover:bg-[#D4E8F0] text-[#4A5568] py-3 rounded-xl transition-colors">
              View All Resources
            </button>
          </motion.div>

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#C8B6E2] to-[#B9A5D8] rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl text-white mb-4">Community Guidelines</h3>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>✓ Be respectful and supportive</li>
              <li>✓ Share experiences, not medical advice</li>
              <li>✓ Protect privacy - no personal details</li>
              <li>✓ Report inappropriate content</li>
              <li>✓ Celebrate each other's wins</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
