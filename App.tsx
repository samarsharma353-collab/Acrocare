
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Blog } from './components/Blog';
import { About } from './components/About';
import { Login } from './components/Login';
import { ChatBox } from './components/ChatBox';
import { ViewState } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState<ViewState>('dashboard');

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative">
      <Navbar 
        activeView={activeView} 
        onViewChange={setActiveView} 
        onLogout={handleLogout}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-fade-in">
        {activeView === 'dashboard' && <Dashboard />}
        {activeView === 'blog' && <Blog />}
        {activeView === 'about' && <About />}
      </main>

      <ChatBox />

      <footer className="border-t border-zinc-900 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-zinc-600 text-sm tracking-tight">
            © {new Date().getFullYear()} AcroCare. Excellence in Cognitive Longevity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
