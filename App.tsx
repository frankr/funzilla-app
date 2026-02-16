import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Interests from './pages/Interests';
import ProfileSetup from './pages/ProfileSetup';
import Home from './pages/Home';
import SearchMap from './pages/SearchMap';
import ActivityDetail from './pages/ActivityDetail';
import BottomNav from './components/BottomNav';

const AppContent: React.FC = () => {
  const location = useLocation();
  
  // Hide bottom nav on onboarding screens and detail screen
  const hideNav = ['/', '/interests', '/setup', '/detail'].includes(location.pathname);

  return (
    <div className="relative mx-auto flex h-full min-h-screen w-full max-w-md flex-col overflow-hidden bg-background-light shadow-2xl sm:my-8 sm:min-h-[850px] sm:max-h-[900px] sm:rounded-3xl sm:border border-slate-100">
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/setup" element={<ProfileSetup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/map" element={<SearchMap />} />
          <Route path="/detail" element={<ActivityDetail />} />
        </Routes>
      </div>
      {!hideNav && <BottomNav />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;