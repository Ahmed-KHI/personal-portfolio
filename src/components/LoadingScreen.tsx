import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = [
    'Initializing 3D Environment...',
    'Loading Portfolio Sections...',
    'Preparing Interactive Experience...',
    'Almost Ready...'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5
        
        // Change text based on progress
        if (newProgress > 25 && currentText === 0) setCurrentText(1)
        if (newProgress > 50 && currentText === 1) setCurrentText(2)
        if (newProgress > 75 && currentText === 2) setCurrentText(3)
        
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 1000)
          return 100
        }
        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete, currentText])

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/10"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            animate={{ 
              rotate: [0, 120, 240, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          
          {/* Floating Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-lg mx-auto px-8">
          {/* Logo/Brand Animation */}
          <motion.div 
            className="mb-12"
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-2xl flex items-center justify-center"
              animate={{ 
                rotateY: [0, 360],
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                  '0 0 40px rgba(168, 85, 247, 0.7)',
                  '0 0 20px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{ 
                rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              <span className="text-2xl font-bold text-white">P</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              PORTFOLIO
            </motion.h1>
            
            <motion.p 
              className="text-blue-200 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Interactive 3D Experience
            </motion.p>
          </motion.div>

          {/* Loading Progress */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Progress Bar */}
            <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Animated Glow */}
              <motion.div 
                className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-80, 320] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '80px' }}
              />
            </div>
            
            {/* Progress Percentage */}
            <motion.div 
              className="mt-4 text-white font-semibold text-xl"
              key={Math.floor(progress)}
              initial={{ scale: 1.2, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {Math.floor(progress)}%
            </motion.div>
          </motion.div>

          {/* Loading Text */}
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentText}
              className="text-blue-200 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {loadingTexts[currentText]}
            </motion.p>
          </AnimatePresence>

          {/* Animated Dots */}
          <motion.div 
            className="flex justify-center space-x-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Corner Decorations */}
        <motion.div 
          className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-blue-400/50"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div 
          className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-purple-400/50"
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div 
          className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-cyan-400/50"
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-pink-400/50"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen
