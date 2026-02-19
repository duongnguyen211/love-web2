import React, { useState, useEffect } from 'react';
import { differenceInDays, parseISO } from 'date-fns';
import { CONFIG } from '../data';
import { Heart } from 'lucide-react';

const DayCounter = () => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const start = parseISO(CONFIG.startDate);
    const today = new Date();
    setDays(differenceInDays(today, start));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 max-w-md mx-auto mt-10">
      <div className="relative">
        <Heart className="text-rose-500 w-24 h-24 animate-pulse" fill="#f43f5e" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-xl">{days}</span>
        </div>
      </div>
      <h2 className="mt-4 text-2xl font-serif text-rose-800">Ngày bên nhau</h2>
      <p className="text-rose-600 font-sans mt-2">Mỗi ngày đều là một món quà</p>
    </div>
  );
};

export default DayCounter;
