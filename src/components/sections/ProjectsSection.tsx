import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Star, Eye, GitBranch } from 'lucide-react'

interface ProjectsSectionProps {
  onBack: () => void
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onBack }) => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'E-Learning Platform',
      category: 'web',
      description: 'Modern learning platform with video streaming, quizzes, and progress tracking. Built with real-time collaboration features.',
      longDescription: 'A comprehensive educational platform featuring live streaming, interactive quizzes, student progress analytics, and real-time collaboration tools. Supports multiple learning formats including video courses, live sessions, and downloadable resources.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
      demoUrl: '#',
      githubUrl: '#',
      color: 'from-blue-400 to-purple-600',
      stats: { stars: 45, views: 1200, forks: 12 },
      featured: true
    },
    {
      id: 2,
      title: 'Restaurant Mobile App',
      category: 'mobile',
      description: 'Food delivery app with real-time tracking and payment integration. Features restaurant discovery and order management.',
      longDescription: 'Complete food delivery solution with restaurant discovery, menu browsing, real-time order tracking, multiple payment methods, and customer reviews system.',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps'],
      demoUrl: '#',
      githubUrl: '#',
      color: 'from-green-400 to-blue-500',
      stats: { stars: 67, views: 2100, forks: 23 },
      featured: true
    },
    {
      id: 3,
      title: 'Real Estate Dashboard',
      category: 'web',
      description: 'Property management system with analytics and CRM features. Includes virtual tours and market analysis.',
      longDescription: 'Comprehensive real estate management platform with property listings, virtual tour integration, market analytics, lead management, and automated reporting.',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Chart.js', 'Mapbox'],
      demoUrl: '#',
      githubUrl: '#',
      color: 'from-yellow-400 to-red-500',
      stats: { stars: 89, views: 3400, forks: 34 },
      featured: true
    },
    {
      id: 4,
      title: 'Task Management Tool',
      category: 'web',
      description: 'Collaborative workspace with kanban boards and team chat. Features project timeline and resource allocation.',
      longDescription: 'Advanced project management tool with kanban boards, team collaboration, time tracking, resource allocation, and detailed project analytics.',
      technologies: ['Vue.js', 'Express.js', 'MySQL', 'Redis'],
      demoUrl: '#',
      githubUrl: '#',
      color: 'from-purple-400 to-pink-600',
      stats: { stars: 52, views: 1800, forks: 18 },
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      category: 'mobile',
      description: 'Health monitoring app with workout plans and nutrition tracking. Includes social features and challenges.',
      longDescription: 'Comprehensive fitness application with workout tracking, nutrition planning, social challenges, and health analytics integration.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'HealthKit'],
      demoUrl: '#',
      githubUrl: '#',
      color: 'from-orange-400 to-red-500',
      stats: { stars: 73, views: 2600, forks: 29 },
      featured: false
    },
    {
      id: 6,
      title: 'AI Chat Interface',
      category: 'ai',
      description: 'Intelligent chatbot with natural language processing capabilities. Features context awareness and learning.',
      longDescription: 'Advanced AI chatbot with natural language understanding, context awareness, machine learning capabilities, and multi-language support.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'OpenAI'],
      demoUrl: '#',
      githubUrl: '#',
      color: 'from-cyan-400 to-blue-600',
      stats: { stars: 128, views: 5200, forks: 45 },
      featured: true
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects', icon: '🚀' },
    { key: 'web', label: 'Web Apps', icon: '🌐' },
    { key: 'mobile', label: 'Mobile Apps', icon: '📱' },
    { key: 'ai', label: 'AI Projects', icon: '🤖' }
  ]

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-32 w-64 h-64 bg-white/5 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 left-20 w-48 h-48 bg-yellow-400/10 rounded-full"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-400/10"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{ 
            rotate: [0, 120, 240, 360],
            scale: [1, 1.1, 1]
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4 lg:mb-6"
            initial={{ scale: 0.5, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          >
            PROJECTS
          </motion.h1>
          <motion.div 
            className="w-24 lg:w-32 h-1 lg:h-2 bg-white mx-auto rounded-full mb-6 lg:mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.p 
            className="text-lg lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Showcasing innovative solutions and creative implementations
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex justify-center mb-12 lg:mb-16 px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white/15 backdrop-blur-xl rounded-full p-1 lg:p-2 border border-white/20 shadow-2xl w-full max-w-2xl">
            <div className="grid grid-cols-2 lg:flex lg:space-x-2 gap-1 lg:gap-0">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`relative px-3 lg:px-6 py-2 lg:py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-1 lg:space-x-2 text-sm lg:text-base ${
                    selectedFilter === filter.key
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-base lg:text-lg">{filter.icon}</span>
                  <span className="hidden sm:inline lg:inline">{filter.label}</span>
                  <span className="sm:hidden lg:hidden">{filter.label.split(' ')[0]}</span>
                  {selectedFilter === filter.key && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-white rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedFilter}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="group relative"
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="bg-white/15 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 h-full shadow-2xl relative">
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div 
                      className="absolute top-4 right-4 z-20 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1"
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      <Star size={14} />
                      <span>Featured</span>
                    </motion.div>
                  )}

                  {/* Project Header/Image */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Project Icon/Title Display */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <motion.div 
                        className="text-5xl font-bold text-white/90 mb-2"
                        animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </motion.div>
                      <div className="text-white/70 text-sm uppercase tracking-wider">
                        {project.category}
                      </div>
                    </div>

                    {/* Hover Overlay with Actions */}
                    <motion.div 
                      className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.a 
                        href={project.demoUrl}
                        className="p-3 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a 
                        href={project.githubUrl}
                        className="p-3 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 lg:p-6 flex-1 flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/80 mb-4 leading-relaxed flex-1 text-sm lg:text-base">
                      {hoveredProject === project.id ? project.longDescription : project.description}
                    </p>
                    
                    {/* Project Stats */}
                    <div className="flex justify-between items-center mb-4 text-xs lg:text-sm text-white/70">
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="lg:w-4 lg:h-4" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={12} className="lg:w-4 lg:h-4" />
                        <span>{project.stats.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch size={12} className="lg:w-4 lg:h-4" />
                        <span>{project.stats.forks}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 lg:gap-2 mb-4 lg:mb-6">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span 
                          key={tech}
                          className="px-2 lg:px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full text-xs lg:text-sm text-white border border-white/30"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 lg:px-3 py-1 bg-white/10 backdrop-blur-lg rounded-full text-xs lg:text-sm text-white/60 border border-white/20">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                      <motion.a 
                        href={project.demoUrl}
                        className="flex-1 py-2 lg:py-3 bg-white text-center text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-sm lg:text-base"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={14} className="lg:w-4 lg:h-4" />
                        <span>Demo</span>
                      </motion.a>
                      <motion.a 
                        href={project.githubUrl}
                        className="flex-1 py-2 lg:py-3 border-2 border-white text-center text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 text-sm lg:text-base"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={14} className="lg:w-4 lg:h-4" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Projects Summary */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 border border-white/20 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Project Statistics</h3>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">{projects.length}</div>
                <div className="text-white/80">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  {projects.filter(p => p.featured).length}
                </div>
                <div className="text-white/80">Featured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  {projects.reduce((sum, p) => sum + p.stats.stars, 0)}
                </div>
                <div className="text-white/80">Total Stars</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsSection
