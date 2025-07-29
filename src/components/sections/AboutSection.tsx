import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, User, Award, Calendar, MapPin, Download, ExternalLink } from 'lucide-react'

interface AboutSectionProps {
  onBack: () => void
}

const AboutSection: React.FC<AboutSectionProps> = ({ onBack }) => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+', color: 'from-blue-400 to-cyan-500' },
    { icon: Calendar, label: 'Projects Completed', value: '50+', color: 'from-purple-400 to-pink-500' },
    { icon: User, label: 'Happy Clients', value: '100+', color: 'from-green-400 to-blue-500' },
    { icon: MapPin, label: 'Countries Served', value: '10+', color: 'from-yellow-400 to-orange-500' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400/20 rounded-full"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-10 w-16 h-16 bg-pink-400/20 transform rotate-45"
          animate={{ 
            rotate: [45, 225, 45]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </motion.button>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-bold text-white mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          >
            ABOUT
          </motion.h1>
          <motion.div 
            className="w-32 h-2 bg-white mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.p 
            className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Passionate developer crafting digital experiences with modern technologies
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Profile Side */}
          <motion.div 
            className="relative"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Profile Card */}
              <motion.div 
                className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  {/* Avatar Placeholder */}
                  <div className="w-64 h-64 mx-auto mb-8 relative">
                    <motion.div 
                      className="w-full h-full bg-gradient-to-br from-white/30 to-white/10 rounded-3xl flex items-center justify-center border border-white/30"
                      animate={{ 
                        boxShadow: [
                          '0 0 20px rgba(255,255,255,0.2)',
                          '0 0 40px rgba(0,212,255,0.4)',
                          '0 0 20px rgba(255,255,255,0.2)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <User size={80} className="text-white/80" />
                    </motion.div>
                    
                    {/* Floating Status */}
                    <motion.div 
                      className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold"
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      AVAILABLE
                    </motion.div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">Full Stack Developer</h3>
                    <p className="text-white/80 text-lg">React • TypeScript • Node.js</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-full"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-12 h-12 bg-pink-400 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {/* Bio Card */}
            <motion.div 
              className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">My Story</h3>
              <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                <p>
                  🚀 <strong>Innovative Problem Solver</strong> - I transform complex challenges into elegant digital solutions using cutting-edge technologies.
                </p>
                <p>
                  💡 <strong>Creative Technologist</strong> - Passionate about building interactive experiences that make a real difference in people's lives.
                </p>
                <p>
                  🌟 <strong>Continuous Learner</strong> - Always exploring new frameworks and methodologies to stay at the forefront of web development.
                </p>
              </div>
            </motion.div>

            {/* Skills Preview */}
            <motion.div 
              className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Frontend', 'Backend', 'DevOps', 'Design'].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    className="bg-white/20 rounded-xl p-4 text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                  >
                    <span className="text-white font-semibold">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex space-x-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.button 
                className="flex-1 py-4 px-6 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.button>
              <motion.button 
                className="flex-1 py-4 px-6 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                <span>Portfolio</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="relative group"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.6 + index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className={`bg-gradient-to-br ${stat.color} p-8 rounded-3xl text-center border border-white/20 shadow-2xl`}>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="mb-4"
                >
                  <stat.icon size={48} className="text-white mx-auto" />
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/90 font-medium">{stat.label}</div>
                
                {/* Hover Glow */}
                <motion.div 
                  className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSection
