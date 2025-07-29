import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle, ExternalLink, Linkedin, Github, Twitter } from 'lucide-react'

interface ContactSectionProps {
  onBack: () => void
}

const ContactSection: React.FC<ContactSectionProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: 'under-5k',
    timeline: '1-3-months'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: 'under-5k',
        timeline: '1-3-months'
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@yourname.com',
      description: 'Send me an email anytime',
      color: 'from-blue-400 to-cyan-500',
      link: 'mailto:hello@yourname.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call me for urgent matters',
      color: 'from-green-400 to-blue-500',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      description: 'Available for remote work',
      color: 'from-purple-400 to-pink-500',
      link: 'https://maps.google.com'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      title: 'GitHub',
      url: '#',
      color: 'hover:text-gray-400'
    },
    {
      icon: Twitter,
      title: 'Twitter',
      url: '#',
      color: 'hover:text-blue-400'
    }
  ]

  const budgetOptions = [
    { value: 'under-5k', label: 'Under $5K' },
    { value: '5k-15k', label: '$5K - $15K' },
    { value: '15k-30k', label: '$15K - $30K' },
    { value: '30k-plus', label: '$30K+' }
  ]

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3-months', label: '1-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-plus-months', label: '6+ Months' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-16 left-20 w-72 h-72 bg-white/5 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-32 w-56 h-56 bg-yellow-300/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 right-20 w-40 h-40 bg-orange-300/10"
          style={{ clipPath: 'polygon(30% 0%, 0% 50%, 30% 100%, 100% 100%, 70% 50%, 100% 0%)' }}
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 16, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-red-300/10 rounded-full"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 11, repeat: Infinity }}
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
          className="text-center mb-16"
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
            CONTACT
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
            Let's discuss your next project and bring your ideas to life
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      <p className="text-white/80">{item.value}</p>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                    <ExternalLink size={20} className="text-white/40 group-hover:text-white/80 transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h3 className="text-white font-semibold text-lg mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.url}
                      className={`p-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 text-white/80 ${social.color} transition-all`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div 
                className="mt-8 p-6 bg-green-500/20 backdrop-blur-lg rounded-2xl border border-green-400/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-4 h-4 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white font-semibold">Available for new projects</span>
                </div>
                <p className="text-white/80 text-sm mt-2">
                  Currently accepting freelance and contract work
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Send Message</h2>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  className="text-center py-16"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle size={80} className="text-green-400 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-white/80 text-lg">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      className="relative"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="relative">
                        <User size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your Name"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-white/5 rounded-xl pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: focusedField === 'name' ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </motion.div>

                    <motion.div 
                      className="relative"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="relative">
                        <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your Email"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-white/5 rounded-xl pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: focusedField === 'email' ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <motion.div 
                    className="relative"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="relative">
                      <MessageSquare size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Project Subject"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                      />
                      <motion.div 
                        className="absolute inset-0 bg-white/5 rounded-xl pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: focusedField === 'subject' ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.div>

                  {/* Budget and Timeline Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl text-white focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                      >
                        {budgetOptions.map(option => (
                          <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div 
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl text-white focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                      >
                        {timelineOptions.map(option => (
                          <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div 
                    className="relative"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all resize-none"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-white/5 rounded-xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: focusedField === 'message' ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 relative overflow-hidden"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <motion.div 
                            className="w-5 h-5 border-2 border-orange-600 border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending...</span>
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Send size={20} />
                          <span>Send Message</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 border border-white/20 inline-block">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/80 text-lg mb-6 max-w-2xl">
              I'm always excited to work on new challenges and bring innovative ideas to life.
              Let's collaborate and create something amazing together.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button 
                className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
              <motion.button 
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactSection
