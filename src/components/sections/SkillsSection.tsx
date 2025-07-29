import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Code, Database, Globe, Server } from 'lucide-react'

interface SkillsSectionProps {
  onBack: () => void
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ onBack }) => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'from-orange-400 via-red-500 to-pink-600',
      bgGradient: 'from-orange-400/20 to-red-500/20',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '🔷' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' }
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-green-400 via-blue-500 to-purple-600',
      bgGradient: 'from-green-400/20 to-blue-500/20',
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Python', level: 82, icon: '🐍' },
        { name: 'Express.js', level: 85, icon: '⚡' },
        { name: 'GraphQL', level: 78, icon: '📊' }
      ]
    },
    {
      icon: Database,
      title: 'Database',
      color: 'from-purple-400 via-pink-500 to-red-600',
      bgGradient: 'from-purple-400/20 to-pink-500/20',
      skills: [
        { name: 'MongoDB', level: 90, icon: '🍃' },
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'Redis', level: 75, icon: '🔴' },
        { name: 'Prisma', level: 80, icon: '💎' }
      ]
    },
    {
      icon: Globe,
      title: 'DevOps',
      color: 'from-yellow-400 via-orange-500 to-red-600',
      bgGradient: 'from-yellow-400/20 to-orange-500/20',
      skills: [
        { name: 'Docker', level: 82, icon: '🐳' },
        { name: 'AWS', level: 78, icon: '☁️' },
        { name: 'CI/CD', level: 80, icon: '🔄' },
        { name: 'Kubernetes', level: 70, icon: '⚙️' }
      ]
    }
  ]

  const additionalSkills = [
    { name: 'Git', icon: '📝', color: 'bg-orange-500' },
    { name: 'Figma', icon: '🎨', color: 'bg-purple-500' },
    { name: 'Jest', icon: '🧪', color: 'bg-green-500' },
    { name: 'Cypress', icon: '🌲', color: 'bg-blue-500' },
    { name: 'Webpack', icon: '📦', color: 'bg-blue-600' },
    { name: 'Vite', icon: '⚡', color: 'bg-yellow-500' },
    { name: 'Sass', icon: '💅', color: 'bg-pink-500' },
    { name: 'Three.js', icon: '🎯', color: 'bg-indigo-500' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-32 right-20 w-40 h-40 bg-white/10 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-16 w-28 h-28 bg-yellow-400/20"
          animate={{ 
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-20 h-20 bg-blue-400/20 rounded-full"
          animate={{ 
            y: [-30, 30, -30],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
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
            initial={{ scale: 0.5, rotateX: -90 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          >
            SKILLS
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
            Crafting digital experiences with cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="relative group"
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Category Card */}
              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-50`} />
                
                {/* Category Header */}
                <div className="relative z-10 flex items-center mb-8">
                  <motion.div 
                    className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mr-6 shadow-lg`}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <category.icon size={32} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                    <p className="text-white/70">Expert Level</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="relative z-10 space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-xl font-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="text-lg text-white/80 font-bold">{skill.level}%</span>
                      </div>
                      
                      {/* Skill Bar */}
                      <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                        <motion.div 
                          className={`h-4 rounded-full bg-gradient-to-r ${category.color} relative`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        >
                          {/* Animated Shine Effect */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: [-100, 200] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.02 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div 
          className="text-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.h3 
            className="text-4xl font-bold text-white mb-12"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Additional Technologies
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {additionalSkills.map((tech, index) => (
              <motion.div 
                key={tech.name}
                className="group relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.15, y: -10 }}
              >
                <div className={`${tech.color} p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-lg`}>
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-white font-semibold text-sm">{tech.name}</div>
                </div>
                
                {/* Ripple Effect on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 inline-block border border-white/20">
            <h4 className="text-xl font-bold text-white mb-4">Proficiency Legend</h4>
            <div className="flex justify-center space-x-8 text-white/90">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>90%+ Expert</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span>80%+ Advanced</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span>70%+ Intermediate</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsSection
