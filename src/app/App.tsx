import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomeLogin } from './components/WelcomeLogin';
import { ChildDashboard } from './components/ChildDashboard';
import { PhonicsModule } from './components/PhonicsModule';
import { StoryCorner } from './components/StoryCorner';
import { EmotionTracker } from './components/EmotionTracker';
import { CalmZone } from './components/CalmZone';
import { ParentDashboard } from './components/ParentDashboard';
import { ParentalControls } from './components/ParentalControls';
import { ParentCommunity } from './components/ParentCommunity';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeLogin />} />
        <Route path="/child-dashboard" element={<ChildDashboard />} />
        <Route path="/phonics" element={<PhonicsModule />} />
        <Route path="/story" element={<StoryCorner />} />
        <Route path="/emotion" element={<EmotionTracker />} />
        <Route path="/calm" element={<CalmZone />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/parental-controls" element={<ParentalControls />} />
        <Route path="/parent-community" element={<ParentCommunity />} />
      </Routes>
    </Router>
  );
}
