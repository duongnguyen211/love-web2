import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Calendar, Image, BookOpen, Home } from 'lucide-react';
import HeartRain from './HeartRain';
import MusicPlayer from './MusicPlayer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/timeline', icon: Calendar, label: 'Hành trình' },
    { path: '/gallery', icon: Image, label: 'Ảnh' },
    { path: '/letters', icon: BookOpen, label: 'Thư' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-100 font-sans text-slate-800 overflow-x-hidden">
      <HeartRain />
      <MusicPlayer />
      
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-40 border-b border-rose-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-serif text-2xl text-rose-600 font-bold flex items-center gap-2">
              <Heart className="fill-rose-500 text-rose-500 animate-pulse" size={24} />
              Our Love Story
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-rose-100 text-rose-600 font-medium' 
                        : 'text-slate-500 hover:text-rose-500 hover:bg-rose-50'
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-rose-100 z-40 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center w-full h-full ${
                  isActive ? 'text-rose-500' : 'text-slate-400'
                }`}
              >
                <item.icon size={24} className={isActive ? 'fill-rose-100' : ''} />
                <span className="text-[10px] mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <main className="pt-20 pb-24 md:pb-10 px-4 max-w-5xl mx-auto relative z-10 min-h-[calc(100vh-80px)]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
