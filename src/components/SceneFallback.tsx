import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface SceneFallbackProps {
  selectedSection: string
  onSectionChange: (section: string) => void
}

const SceneFallback: React.FC<SceneFallbackProps> = ({ onSectionChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  // SVG icons from Icons8 (inline SVG for About, Skills, Projects, Contact)
  const sections = [
    {
      name: 'About',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="url(#about-gradient)" stroke="#00fff0" strokeWidth="2" />
          <ellipse cx="24" cy="19" rx="7" ry="7" fill="#fff" fillOpacity="0.95" />
          <rect x="14" y="29" width="20" height="8" rx="4" fill="#fff" fillOpacity="0.7" />
          <defs>
            <radialGradient id="about-gradient" cx="0" cy="0" r="1" gradientTransform="translate(24 24) scale(24)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00fff0" />
              <stop offset="1" stopColor="#232347" />
            </radialGradient>
          </defs>
        </svg>
      ),
      color: 'from-[#00fff0] via-[#00bfff] to-[#00fff0]',
      description: 'Discover my journey and experience',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(0,255,240,0.2) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(0,191,255,0.1) 0%, transparent 60%)'
    },
    {
      name: 'Skills',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="url(#skills-gradient)" stroke="#fffb00" strokeWidth="2" />
          <rect x="16" y="16" width="16" height="16" rx="4" fill="#fff" fillOpacity="0.95" />
          <path d="M24 20v8M20 24h8" stroke="#ffb300" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <radialGradient id="skills-gradient" cx="0" cy="0" r="1" gradientTransform="translate(24 24) scale(24)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fffb00" />
              <stop offset="1" stopColor="#232347" />
            </radialGradient>
          </defs>
        </svg>
      ),
      color: 'from-[#fffb00] via-[#ffb300] to-[#fffb00]',
      description: 'Explore my technical expertise',
      bgPattern: 'radial-gradient(circle at 20% 20%, rgba(255,251,0,0.2) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(255,179,0,0.1) 0%, transparent 60%)'
    },
    {
      name: 'Projects',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="url(#projects-gradient)" stroke="#00c6ff" strokeWidth="2" />
          <rect x="14" y="18" width="20" height="12" rx="4" fill="#fff" fillOpacity="0.95" />
          <rect x="20" y="24" width="8" height="6" rx="2" fill="#0077b6" fillOpacity="0.7" />
          <defs>
            <radialGradient id="projects-gradient" cx="0" cy="0" r="1" gradientTransform="translate(24 24) scale(24)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00c6ff" />
              <stop offset="1" stopColor="#232347" />
            </radialGradient>
          </defs>
        </svg>
      ),
      color: 'from-[#00c6ff] via-[#0077b6] to-[#00c6ff]',
      description: 'View my innovative work',
      bgPattern: 'radial-gradient(circle at 50% 50%, rgba(0,198,255,0.2) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(0,119,182,0.1) 0%, transparent 60%)'
    },
    {
      name: 'Contact',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="url(#contact-gradient)" stroke="#f857a6" strokeWidth="2" />
          <rect x="16" y="20" width="16" height="8" rx="4" fill="#fff" fillOpacity="0.95" />
          <path d="M16 20l8 6 8-6" stroke="#a8326e" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <radialGradient id="contact-gradient" cx="0" cy="0" r="1" gradientTransform="translate(24 24) scale(24)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f857a6" />
              <stop offset="1" stopColor="#232347" />
            </radialGradient>
          </defs>
        </svg>
      ),
      color: 'from-[#f857a6] via-[#a8326e] to-[#f857a6]',
      description: 'Let\'s connect and collaborate',
      bgPattern: 'radial-gradient(circle at 80% 20%, rgba(248,87,166,0.2) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(168,50,110,0.1) 0%, transparent 60%)'
    }
  ]

  // Handle smooth scrolling navigation like Adidas Chile 20
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      if (isScrolling) return
      
      setIsScrolling(true)
      
      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        setCurrentIndex(prev => prev + 1)
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1)
      }
      
      setTimeout(() => setIsScrolling(false), 800)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return
      
      if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        setIsScrolling(true)
        setCurrentIndex(prev => prev + 1)
        setTimeout(() => setIsScrolling(false), 800)
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        setIsScrolling(true)
        setCurrentIndex(prev => prev - 1)
        setTimeout(() => setIsScrolling(false), 800)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, isScrolling, sections.length])

  const handleSectionClick = (sectionName: string) => {
    onSectionChange(sectionName)
  }

  const navigateToIndex = (index: number) => {
    if (isScrolling) return
    setIsScrolling(true)
    setCurrentIndex(index)
    setTimeout(() => setIsScrolling(false), 800)
  }

  return (
    <div className="h-screen overflow-hidden relative bg-gradient-to-br from-[#181818] via-[#232347] to-[#0a0a23]">
      {/* Premium Multi-layered Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep glassy gradient overlays */}
        <motion.div 
          className="absolute w-full h-full"
          style={{
            background: sections[currentIndex].bgPattern + ', linear-gradient(120deg, rgba(0,255,255,0.10) 0%, rgba(255,0,255,0.08) 100%), linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(36,0,54,0.6) 100%)',
            filter: 'blur(3.5px) brightness(1.13)'
          }}
          animate={{ opacity: [0.92, 1, 0.92] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        {/* Animated light sweep for luxury shimmer */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: 'linear-gradient(100deg, transparent 60%, rgba(0,255,255,0.10) 80%, transparent 100%)',
            mixBlendMode: 'screen',
            pointerEvents: 'none'
          }}
          animate={{ x: ["-30vw", "30vw", "-30vw"] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        {/* Subtle vignette for premium focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
        {/* Floating Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full shadow-[0_0_12px_3px_rgba(0,255,255,0.18)]"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Premium Section Row Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center select-none">
        <div className="flex items-center justify-center gap-4 md:gap-10 w-full max-w-3xl mx-auto px-2 py-5 rounded-3xl bg-white/10 backdrop-blur-2xl shadow-[0_8px_48px_0_rgba(0,255,255,0.13),0_1.5px_24px_0_rgba(0,0,0,0.28)] border border-white/20 ring-4 ring-cyan-400/20 ring-inset transition-all duration-700 relative overflow-visible" style={{boxShadow:'0 8px 48px 0 rgba(0,255,255,0.13), 0 1.5px 24px 0 rgba(0,0,0,0.28)'}}>
          {/* Animated border glow sweep */}
          <motion.div
            className="absolute -inset-1 rounded-3xl pointer-events-none"
            style={{background: 'linear-gradient(120deg, rgba(0,255,255,0.18) 0%, rgba(255,0,255,0.12) 100%)', filter: 'blur(8px)', zIndex: 1}}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          {sections.map((section, idx) => (
            <motion.div
              key={section.name}
              className={`relative flex flex-col items-center cursor-pointer select-none px-4 md:px-8 py-3 rounded-2xl bg-white/20 backdrop-blur-[3.5px] border border-cyan-200/20 shadow-[0_0_32px_4px_rgba(0,255,255,0.13)] transition-all duration-300 group hover:ring-2 hover:ring-cyan-400/60 focus:ring-2 focus:ring-cyan-400/80 overflow-visible`}
              onClick={() => handleSectionClick(section.name)}
              tabIndex={0}
              aria-label={`Enter ${section.name}`}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleSectionClick(section.name); }}
              animate={{ scale: currentIndex === idx ? 1.22 : 1 }}
              whileHover={{ scale: 1.22, boxShadow: `0 0 48px 12px ${section.color.split('via-')[1]?.replace(']','') || '#00fff0'}66`, filter: 'brightness(1.18)' }}
              onMouseEnter={() => setCurrentIndex(idx)}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              style={{zIndex: 2}}
            >
              <span className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                {section.icon}
              </span>
            </motion.div>
          ))}
          {/* Animated reflection under the row */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-[-32px] w-[80%] h-8 md:h-12 rounded-b-3xl pointer-events-none"
            style={{background: 'linear-gradient(180deg, rgba(0,255,255,0.13) 0%, transparent 100%)', filter: 'blur(6px)', zIndex: 0}}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
        {/* Section Title and Description for Center */}
        <div className="mt-12 text-center">
          <motion.h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r ${sections[currentIndex].color} bg-clip-text text-transparent drop-shadow-[0_0_48px_rgba(0,255,255,0.22)]`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {sections[currentIndex].name.toUpperCase()}
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-white/90 mb-2 leading-relaxed drop-shadow-[0_0_16px_rgba(0,255,255,0.13)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {sections[currentIndex].description}
          </motion.p>
        </div>
      </div>



      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 z-30">
        <motion.div 
          className={`h-full bg-gradient-to-r ${sections[currentIndex].color}`}
          initial={{ width: '0%' }}
          animate={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>

      {/* Mobile Touch Indicators */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 md:hidden">
        <div className="flex space-x-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SceneFallback
