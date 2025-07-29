import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Volume2, VolumeX, Send, Sparkles, Bot, Brain, Mic } from 'lucide-react'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const RobotAssistant: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm your AI guide. Ask me anything about this portfolio!",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(true)
  const [inputText, setInputText] = useState('')
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([])
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0)

  // Handle viewport height changes on mobile (keyboard overlay)
  useEffect(() => {
    const handleResize = () => {
      if (isInputFocused && window.innerHeight < 500) {
        // Keyboard is likely open on mobile
        document.documentElement.style.setProperty('--chat-bottom', '1rem')
        document.documentElement.style.setProperty('--chat-max-height', '40vh')
      } else {
        document.documentElement.style.setProperty('--chat-bottom', '1rem')
        document.documentElement.style.setProperty('--chat-max-height', '85vh')
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial call

    return () => window.removeEventListener('resize', handleResize)
  }, [isInputFocused])

  // Load available sophisticated voices
  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices()
      
      // Filter for sophisticated male voices
      const sophisticatedVoices = voices.filter(voice => {
        const name = voice.name.toLowerCase()
        const lang = voice.lang.toLowerCase()
        
        return (
          // Prefer male voices
          (name.includes('male') || 
           name.includes('david') || 
           name.includes('mark') || 
           name.includes('james') || 
           name.includes('daniel') ||
           name.includes('alex') ||
           name.includes('george') ||
           name.includes('ralph')) &&
          // English language variants
          (lang.startsWith('en-') || lang === 'en')
        )
      })
      
      // If no specific male voices, get all English voices
      const fallbackVoices = sophisticatedVoices.length > 0 ? sophisticatedVoices : 
        voices.filter(voice => voice.lang.startsWith('en'))
      
      setAvailableVoices(fallbackVoices.length > 0 ? fallbackVoices : voices)
      
      console.log(`🎙️ Found ${fallbackVoices.length} sophisticated voices:`, 
        fallbackVoices.map(v => `${v.name} (${v.lang})`))
    }

    // Load voices immediately if available
    loadVoices()
    
    // Also listen for voices changed event (some browsers load voices asynchronously)
    speechSynthesis.addEventListener('voiceschanged', loadVoices)
    
    return () => speechSynthesis.removeEventListener('voiceschanged', loadVoices)
  }, [])

  const quickActions = [
    { icon: "👨‍💻", label: "About", action: () => handleQuickMessage("Tell me about the developer") },
    { icon: "🚀", label: "Projects", action: () => handleQuickMessage("Show me the projects") },
    { icon: "⚡", label: "Skills", action: () => handleQuickMessage("What are the technical skills?") },
    { icon: "🎙️", label: "Voice", action: () => handleQuickMessage("Test my sophisticated voice with a demonstration") }
  ]

  const handleQuickMessage = (message: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isBot: false,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(message),
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
      
      if (isSpeaking) {
        speakMessage(botResponse.text)
      }
    }, 1200)
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return
    
    handleQuickMessage(inputText)
    setInputText('')
  }

  const getBotResponse = (message: string): string => {
    const responses: { [key: string]: string } = {
      "Tell me about the developer": "🎯 Passionate full-stack developer with expertise in React, TypeScript & modern web tech. I create interactive experiences with clean, efficient code!",
      "Show me the projects": "🚀 Check out amazing projects: e-learning platform, restaurant site, real estate app & more. Each showcases unique technical solutions!",
      "What are the technical skills?": "⚡ Tech stack: React, TypeScript, Node.js, Python, MongoDB, PostgreSQL, Tailwind CSS + cloud platforms & DevOps tools!",
      "How can I get in touch?": "📬 Reach out via contact form, LinkedIn, or GitHub. Always open to discussing opportunities & collaborations!",
      "Test my sophisticated voice with a demonstration": "🎙️ Greetings! I am your sophisticated AI assistant, speaking with enhanced vocal clarity and refined articulation. My voice features carefully tuned pitch, rate, and intonation for the most pleasant conversational experience. How do you find my distinguished accent?"
    }
    
    return responses[message] || "🤔 Interesting question! Explore the portfolio sections or ask about specific projects, skills, or experience."
  }

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(text.replace(/[🎯🚀⚡📬🤔👋👨‍💻📞]/g, ''))
      
      // Enhanced voice settings for sophisticated male voice
      utterance.rate = 0.85        // Slightly slower for sophistication
      utterance.pitch = 0.8        // Lower pitch for masculine tone
      utterance.volume = 0.9       // Clear but not overwhelming
      
      // Use selected sophisticated voice
      if (availableVoices.length > 0 && availableVoices[selectedVoiceIndex]) {
        utterance.voice = availableVoices[selectedVoiceIndex]
        console.log(`🎙️ Using sophisticated voice: ${utterance.voice.name} (${utterance.voice.lang})`)
      } else {
        // Fallback to auto-detection if no voices loaded yet
        const voices = speechSynthesis.getVoices()
        const sophisticatedVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('david') ||
          voice.name.toLowerCase().includes('alex') ||
          voice.name.toLowerCase().includes('daniel') ||
          (voice.name.toLowerCase().includes('male') && voice.lang.startsWith('en'))
        ) || voices.find(voice => voice.lang.startsWith('en-gb')) || voices[0]
        
        if (sophisticatedVoice) {
          utterance.voice = sophisticatedVoice
          console.log(`🎙️ Using fallback voice: ${sophisticatedVoice.name}`)
        }
      }
      
      // Add sophisticated pauses and emphasis
      utterance.text = utterance.text
        .replace(/\./g, '. ')        // Slight pause after periods
        .replace(/!/g, '! ')         // Emphasis on exclamations
        .replace(/\?/g, '? ')        // Question intonation
      
      // Speak with error handling
      utterance.onerror = (event) => {
        console.warn('Speech synthesis error:', event.error)
      }
      
      utterance.onend = () => {
        console.log('🎙️ AI Assistant finished speaking')
      }
      
      speechSynthesis.speak(utterance)
    }
  }

  useEffect(() => {
    if (isExpanded && messages.length === 1) {
      setTimeout(() => setIsTyping(false), 500)
    }
  }, [isExpanded])

  return (
    <AnimatePresence>
      <div className="fixed bottom-4 right-4 z-50">
        {!isExpanded ? (
          // Revolutionary Compact Floating Button
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className="relative w-14 h-14 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-xl border border-white/30 overflow-hidden group backdrop-blur-sm"
          >
            {/* Animated Glow */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-sm"
            />
            
            {/* AI Brain Icon with Neural Network Effect */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Brain size={22} className="text-white drop-shadow-lg" />
              </motion.div>
            </div>

            {/* Pulse Ring */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 border-2 border-white/40 rounded-full"
            />

            {/* Sparkle Effect */}
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1 right-1"
            >
              <Sparkles size={8} className="text-yellow-300" />
            </motion.div>
          </motion.button>
        ) : (
          // Ultra-Compact Modern Chat Interface
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className={`w-72 max-h-[85vh] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col ${
              isInputFocused ? 'mobile-keyboard-active' : ''
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              position: 'fixed',
              bottom: 'var(--chat-bottom, 1rem)',
              right: '1rem',
              maxHeight: 'var(--chat-max-height, 85vh)',
              height: 'auto',
              transition: 'all 0.3s ease-in-out',
              zIndex: 50
            }}
          >
            {/* Compact Header */}
            <div className="bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90 p-3 flex items-center justify-between backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <Bot size={12} className="text-white" />
                </motion.div>
                <div>
                  <h3 className="text-sm font-semibold text-white">AI Guide</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <p className="text-xs text-white/80">
                      {isTyping ? 'Thinking...' : 'Ready'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSpeaking(!isSpeaking)}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  title={isSpeaking ? 'Mute voice' : 'Enable voice'}
                >
                  {isSpeaking ? <Volume2 size={12} className="text-white" /> : <VolumeX size={12} className="text-white" />}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (availableVoices.length > 0) {
                      const nextIndex = (selectedVoiceIndex + 1) % availableVoices.length
                      setSelectedVoiceIndex(nextIndex)
                      const voice = availableVoices[nextIndex]
                      console.log(`🎙️ Switched to voice: ${voice.name} (${voice.lang})`)
                      
                      // Test the new voice
                      if (isSpeaking) {
                        speakMessage("Hello! This is my new sophisticated voice.")
                      }
                    }
                  }}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  title="Change voice accent"
                >
                  <Mic size={12} className="text-white" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsExpanded(false)}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={12} className="text-white" />
                </motion.button>
              </div>
            </div>

            {/* Compact Message Area */}
            <div className="flex-1 p-3 overflow-y-auto min-h-0 space-y-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20"
                 style={{ 
                   maxHeight: isInputFocused ? 'calc(var(--chat-max-height, 85vh) - 8rem)' : 'calc(var(--chat-max-height, 85vh) - 6rem)',
                   minHeight: '8rem'
                 }}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] px-3 py-2 rounded-xl text-xs ${
                    message.isBot 
                      ? 'bg-white/20 text-white backdrop-blur-sm border border-white/10' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  }`}>
                    <p>{message.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex gap-1"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Ultra-Compact Quick Actions */}
            <div className="flex-shrink-0 p-3 border-t border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-4 gap-1 mb-2">
                {quickActions.map((action) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={action.action}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/10 group"
                  >
                    <div className="text-sm">{action.icon}</div>
                    <div className="text-xs text-white/80 group-hover:text-white transition-colors mt-0.5">
                      {action.label}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Compact Input */}
              <div className="flex gap-2">
                <input
                  id="ai-assistant-input"
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-xs backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Send size={12} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  )
}

export default RobotAssistant
