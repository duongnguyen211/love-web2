import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INITIAL_LETTERS } from '../data';
import { PenTool, Calendar } from 'lucide-react';

const Letters = () => {
  const [letters, setLetters] = useState(INITIAL_LETTERS);
  const [newLetter, setNewLetter] = useState({ title: '', content: '' });
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('love_letters');
    if (saved) {
      setLetters(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('love_letters', JSON.stringify(letters));
  }, [letters]);

  const handlePost = () => {
    if (!newLetter.title || !newLetter.content) return;
    const letter = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      ...newLetter
    };
    setLetters([letter, ...letters]);
    setNewLetter({ title: '', content: '' });
    setIsWriting(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-rose-900 mb-4">Nhật ký yêu thương</h2>
        <p className="text-rose-600">Nơi gửi gắm những lời chưa nói</p>
      </div>

      <div className="mb-8 text-center">
        <button
          onClick={() => setIsWriting(!isWriting)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors shadow-md"
        >
          <PenTool size={18} />
          {isWriting ? 'Đóng sổ' : 'Viết thư mới'}
        </button>
      </div>

      {isWriting && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#fff9f0] p-8 rounded-lg shadow-lg border border-rose-100 mb-12 relative overflow-hidden"
          style={{ backgroundImage: 'linear-gradient(#e5e5e5 1px, transparent 1px)', backgroundSize: '100% 2rem', lineHeight: '2rem' }}
        >
          <div className="absolute top-0 left-0 w-full h-8 bg-rose-100/50 border-b border-rose-200" />
          <input
            type="text"
            placeholder="Tiêu đề lá thư..."
            value={newLetter.title}
            onChange={e => setNewLetter({...newLetter, title: e.target.value})}
            className="w-full bg-transparent border-b-2 border-rose-200 focus:border-rose-400 outline-none text-xl font-serif text-rose-900 mb-4 mt-4"
          />
          <textarea
            placeholder="Viết gì đó cho người ấy..."
            value={newLetter.content}
            onChange={e => setNewLetter({...newLetter, content: e.target.value})}
            className="w-full bg-transparent border-none outline-none text-slate-700 font-handwriting text-xl leading-8 min-h-[200px] resize-none"
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={handlePost}
              className="px-6 py-2 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition-colors font-sans"
            >
              Gửi thư
            </button>
          </div>
        </motion.div>
      )}

      <div className="space-y-8">
        {letters.map((letter, index) => (
          <motion.div
            key={letter.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-rose-50 hover:shadow-md transition-shadow relative"
          >
            {/* Paper clip effect */}
            <div className="absolute -top-3 left-8 w-4 h-8 bg-rose-200 rounded-full opacity-50" />
            
            <div className="flex justify-between items-center mb-4 border-b border-rose-50 pb-4">
              <h3 className="text-2xl font-serif text-rose-800">{letter.title}</h3>
              <div className="flex items-center gap-2 text-rose-400 text-sm">
                <Calendar size={14} />
                {letter.date}
              </div>
            </div>
            <div className="prose prose-rose max-w-none">
              <p className="text-slate-600 whitespace-pre-line font-sans leading-relaxed">
                {letter.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Letters;
