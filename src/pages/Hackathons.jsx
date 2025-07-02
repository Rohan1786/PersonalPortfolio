import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaUsers, FaCalendarAlt, FaCode, FaMedal, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

// Hackathon data
const hackathons = [
  {
    id: 1,
    name: "VDIT Haliyal Hackathon",
    date: "Feb 2025",
    description: "Won 1st place for building an AI-based UPI fraud detection system with my team.",
    project: "File Scanner & QR Code detection platform with 99.7% accuracy",
    team: [
      { name: "Rohan Pawar", role: "Team Lead & Full Stack Developer" },
      { name: "Pranjal", role: "Frontend Developer" },
      { name: "Ranjeeta", role: "UI/UX Developer" },
      { name: "Shruti", role: "Git Managing And Bug Fixer" },
    ],
    awards: [
      { title: "1st Place", icon: <FaTrophy className="text-yellow-500" /> },
      { title: "Best AI Implementation", icon: <FaCode className="text-blue-500" /> }
    ],
    technologies: ["Python", "OpenCV", "Streamlit", "Gemini AI"],
    result: "Won 1st place among 25+ teams"
  },
  {
    id: 2,
    name: "Hack2Intern 2024",
    date: "October 2024",
    description: "Developed Ai Visualization Pie Chart application for data predications",
    project: "AI Visualization Pie Chart",
    team: [
      { name: "Rohan Pawar", role: "Full Stack Developer" },
    ],
    awards: [
      { title: "Top 5 Finalist", icon: <FaMedal className="text-gray-500" /> }
    ],
    technologies: ["Node.js", "React", "Firebase"],
    result: "Selected as top for next final round among 10 participants"
  },
  {
    id: 3,
    name: "Smart India Hackathon 2024",
    date: "December 2024",
    description: "Created an educational platform chatbot using AI to assist students with their queries.",
    project: "LearnAI - Adaptive learning platform",
    team: [
      { name: "Rohan Pawar", role: "Backend Developer" },
      { name: "Abhay", role: "UI/UX Designer" },
      { name: "Rohit", role: "Frontend Developer" },
      { name: "Nilesh", role: "NLP Developer" },
      { name: "Keerthi", role: "Git Managing" },
    ],
    awards: [
      { title: "Best Educational Tech", icon: <FaCode className="text-blue-500" /> }
    ],
    technologies: ["Python", "Flask", "Node.js", "Machine Learning"],
    result: "In college top 10 teams with first place in college level"
  },
  {
    id: 4,
    name: "Epicthon 2024(Hackathon)",
    date: "December 2023",
    description: "Created vendor management app",
    project: "Vendor Management App",
    team: [
      { name: "Rohan Pawar", role: "Frontend Developer" },
      { name: "Samarth U K", role: "Bug Fixer" },
      { name: "Sameer Nadaf", role: "Backend Developer" },
      { name: "Sameer Nadaf", role: "UI Developer" },
    ],
    awards: [
      { title: "Best Educational Tech", icon: <FaCode className="text-blue-500" /> }
    ],
    technologies: ["Java", "Android Studio", "Firebase"],
    result: "Learn how to work in team and how to manage time",
  }
];

const HackathonCard = ({ hackathon, index, isExpanded, toggleExpand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative mb-8 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
    >
      {/* Timeline dot */}
      <motion.div 
        className={`absolute top-6 rounded-full w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg flex items-center justify-center z-10 ${index % 2 === 0 ? 'md:right-0 left-2 transform md:translate-x-1/2' : 'md:left-0 left-2 transform md:-translate-x-1/2'}`}
        whileHover={{ scale: 1.2 }}
      >
        <FaCalendarAlt className="text-white text-xs" />
      </motion.div>

      {/* Content container */}
      <motion.div
        className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-6 ml-10' : 'md:ml-6 ml-10'} ${isExpanded ? 'ring-2 ring-purple-500' : ''}`}
        whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      >
        {/* Header */}
        <motion.div 
          className="p-5 border-b border-gray-200 dark:border-gray-700 cursor-pointer"
          onClick={toggleExpand}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {hackathon.name}
            </h3>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
              <FaCalendarAlt className="mr-1" />
              {hackathon.date}
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <motion.button
              className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Body */}
              <div className="p-5">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {hackathon.description}
                </p>

                {/* Project */}
                <motion.div 
                  className="mb-4"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <FaCode className="mr-2 text-purple-500" />
                    Project:
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 pl-6">
                    {hackathon.project}
                  </p>
                </motion.div>

                {/* Team */}
                <motion.div 
                  className="mb-4"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <FaUsers className="mr-2 text-blue-500" />
                    Team:
                  </h4>
                  <ul className="space-y-2 pl-6">
                    {hackathon.team.map((member, i) => (
                      <motion.li 
                        key={i} 
                        className="text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="font-medium">{member.name}</span> - {member.role}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies */}
                <motion.div 
                  className="mb-4"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2 pl-2">
                    {hackathon.technologies.map((tech, i) => (
                      <motion.span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.05 * i }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Awards & Result */}
                <motion.div 
                  className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Awards:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {hackathon.awards.map((award, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="mr-2">{award.icon}</span>
                            <span className="text-sm text-gray-800 dark:text-gray-200">{award.title}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0">
                      <motion.div 
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaTrophy className="mr-2" />
                        {hackathon.result}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Hackathons = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Hackathon Journey</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          >
            Showcasing my hackathon experiences, team collaborations, and achievements.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-600 transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {hackathons.map((hackathon, index) => (
            <HackathonCard 
              key={hackathon.id}
              hackathon={hackathon}
              index={index}
              isExpanded={expandedCard === hackathon.id}
              toggleExpand={() => toggleCard(hackathon.id)}
            />
          ))}
        </div>

        {/* Floating action button */}
        <motion.div
          className="fixed bottom-8 right-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button 
            className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FaTrophy className="text-xl" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hackathons;