import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeartRain = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setHearts((prev) => [
        ...prev,
        {
          id,
          left: Math.random() * 100,
          duration: Math.random() * 5 + 5,
          delay: Math.random() * 2,
        },
      ]);

      // Cleanup old hearts
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 10000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: '110vh', opacity: [0, 1, 0] }}
          transition={{ duration: heart.duration, delay: heart.delay, ease: "linear" }}
          className="absolute text-pink-200 text-2xl"
          style={{ left: `${heart.left}%` }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
};

export default HeartRain;
