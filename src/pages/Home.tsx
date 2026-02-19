import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import DayCounter from '../components/DayCounter';
import { CONFIG } from '../data';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <h1 className="text-5xl md:text-7xl font-serif text-rose-900 mb-4 tracking-tight">
          Our Love Story
        </h1>
        <p className="text-xl md:text-2xl text-rose-700 font-light italic max-w-2xl mx-auto">
          "Yêu không phải là nhìn về nhau, mà là cùng nhau nhìn về một hướng."
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-12"
      >
        <DayCounter />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link 
          to="/timeline"
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-full overflow-hidden shadow-lg hover:shadow-rose-300/50 transition-all duration-300 hover:-translate-y-1"
        >
          <span className="relative z-10 font-medium text-lg">Xem hành trình của chúng mình</span>
          <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        {[
          { title: "Kỷ niệm", desc: "Lưu giữ những khoảnh khắc đẹp", icon: "📸" },
          { title: "Những lá thư", desc: "Lời yêu thương gửi trao", icon: "💌" },
          { title: "Tương lai", desc: "Cùng nhau viết tiếp câu chuyện", icon: "✨" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + idx * 0.2 }}
            className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-rose-100 hover:border-rose-300 transition-colors"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-serif text-rose-800 mb-1">{item.title}</h3>
            <p className="text-sm text-rose-600/80">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
