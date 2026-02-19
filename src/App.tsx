import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Heart, Lock } from 'lucide-react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Gallery from './pages/Gallery';
import Letters from './pages/Letters';
import { CONFIG } from './data';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('is_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CONFIG.password) {
      setIsAuthenticated(true);
      localStorage.setItem('is_authenticated', 'true');
      setError('');
    } else {
      setError('Mật khẩu không đúng, hãy thử lại nhé!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-rose-100">
          <div className="flex justify-center mb-6">
            <div className="bg-rose-100 p-4 rounded-full">
              <Heart className="text-rose-500 w-12 h-12 animate-pulse" fill="#f43f5e" />
            </div>
          </div>
          <h1 className="text-3xl font-serif text-rose-900 mb-2">Our Love Story</h1>
          <p className="text-rose-600 mb-8">Nhập mật khẩu để mở khóa trái tim</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-300" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 bg-rose-50/30"
                placeholder="Mật khẩu..."
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-rose-500 text-white rounded-lg font-medium hover:bg-rose-600 transition-colors shadow-md hover:shadow-lg"
            >
              Mở khóa
            </button>
          </form>
          <p className="mt-6 text-xs text-slate-400">Gợi ý: love</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/letters" element={<Letters />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
