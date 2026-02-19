import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

interface TimelineItemProps {
  event: {
    id: number;
    date: string;
    title: string;
    description: string;
    image?: string;
  };
  index: number;
}

const TimelineItem = ({ event, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row items-center gap-8 mb-16 relative ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Date Badge (Center Line) */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-rose-500 rounded-full border-4 border-white shadow-lg z-20 flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-rose-50 group">
          <div className={`flex items-center gap-2 text-rose-400 text-sm font-medium mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            <Calendar size={14} />
            {event.date}
          </div>
          <h3 className="text-xl font-serif text-slate-800 mb-3 group-hover:text-rose-600 transition-colors">
            {event.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {event.description}
          </p>
          {event.image && (
            <div className="rounded-xl overflow-hidden h-48 w-full relative">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Empty space for the other side */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};

export default TimelineItem;
