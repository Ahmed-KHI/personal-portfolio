import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import Scene3D from './components/Scene3D'
import SceneFallback from './components/SceneFallback'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import RobotAssistant from './components/RobotAssistant'
import LoadingScreen from './components/LoadingScreen'

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [showRobot, setShowRobot] = useState(false)

  useEffect(() => {
    // Let LoadingScreen handle its own completion timing
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setShowRobot(true)
  }

  const handleSectionChange = (section: string) => {
    setSelectedSection(section)
    setShowRobot(false)
  }

  const handleBackToHome = () => {
    setSelectedSection('')
    setShowRobot(true)
  }

  const renderSection = () => {
    switch (selectedSection) {
      case 'About':
        return <AboutSection onBack={handleBackToHome} />
      case 'Skills':
        return <SkillsSection onBack={handleBackToHome} />
      case 'Projects':
        return <ProjectsSection onBack={handleBackToHome} />
      case 'Contact':
        return <ContactSection onBack={handleBackToHome} />
      default:
        return null
    }
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {selectedSection ? (
          <motion.div
            key={selectedSection}
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              rotateY: { duration: 1 }
            }}
            className="relative min-h-screen"
          >
            {renderSection()}
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen"
          >
            <SceneFallback 
              selectedSection={selectedSection} 
              onSectionChange={handleSectionChange} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robot Assistant */}
      <AnimatePresence>
        {showRobot && !selectedSection && (
          <RobotAssistant />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
