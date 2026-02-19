import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react';
import TimelineItem from '../components/TimelineItem';
import { INITIAL_TIMELINE } from '../data';

const Timeline = () => {
  const [events, setEvents] = useState(INITIAL_TIMELINE);
  const [isEditing, setIsEditing] = useState(false);
  const [newEvent, setNewEvent] = useState({ date: '', title: '', description: '', image: '' });

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('timeline_events');
    if (saved) {
      setEvents(JSON.parse(saved));
    }
  }, []);

  // Save to local storage whenever events change
  useEffect(() => {
    localStorage.setItem('timeline_events', JSON.stringify(events));
  }, [events]);

  const handleAddEvent = () => {
    if (!newEvent.date || !newEvent.title) return;
    const event = {
      id: Date.now(),
      ...newEvent
    };
    setEvents([event, ...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    setNewEvent({ date: '', title: '', description: '', image: '' });
    setIsEditing(false);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Bạn có chắc muốn xóa kỷ niệm này?')) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-rose-900 mb-4">Hành trình yêu thương</h2>
        <p className="text-rose-600">Mỗi cột mốc là một trang sách đẹp trong câu chuyện của chúng ta</p>
      </div>

      <div className="mb-8 flex justify-center">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-600 rounded-full hover:bg-rose-200 transition-colors text-sm font-medium"
        >
          {isEditing ? <X size={16} /> : <Plus size={16} />}
          {isEditing ? 'Hủy' : 'Thêm kỷ niệm mới'}
        </button>
      </div>

      {isEditing && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-rose-200 mb-12 overflow-hidden"
        >
          <h3 className="text-lg font-bold text-rose-800 mb-4">Thêm cột mốc mới</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="date"
              value={newEvent.date}
              onChange={e => setNewEvent({...newEvent, date: e.target.value})}
              className="p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <input
              type="text"
              placeholder="Tiêu đề sự kiện"
              value={newEvent.title}
              onChange={e => setNewEvent({...newEvent, title: e.target.value})}
              className="p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>
          <textarea
            placeholder="Mô tả ngắn..."
            value={newEvent.description}
            onChange={e => setNewEvent({...newEvent, description: e.target.value})}
            className="w-full p-3 border border-rose-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-rose-400 h-24"
          />
          <input
            type="text"
            placeholder="Link ảnh (URL)"
            value={newEvent.image}
            onChange={e => setNewEvent({...newEvent, image: e.target.value})}
            className="w-full p-3 border border-rose-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          <button
            onClick={handleAddEvent}
            className="w-full py-3 bg-rose-500 text-white rounded-lg font-medium hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
          >
            <Save size={18} /> Lưu kỷ niệm
          </button>
        </motion.div>
      )}

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-rose-200 transform -translate-x-1/2 z-0" />

        {events.map((event, index) => (
          <div key={event.id} className="relative group">
            <TimelineItem event={event} index={index} />
            {/* Delete Button (Hidden by default, visible on hover if needed, or add a dedicated edit mode) */}
            <button
              onClick={() => handleDelete(event.id)}
              className="absolute top-4 right-4 md:right-auto md:left-1/2 md:-ml-16 md:top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full shadow-md text-rose-400 hover:text-red-500 z-30"
              title="Xóa"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
