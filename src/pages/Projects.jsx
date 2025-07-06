import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaTimes, FaStar, FaCodeBranch } from 'react-icons/fa';
import { Tab } from '@headlessui/react';

// Color themes for each project card
const cardThemes = [
  {
    bg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    text: 'text-purple-100',
    button: 'bg-purple-700 hover:bg-purple-600'
  },
  {
    bg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    text: 'text-cyan-100',
    button: 'bg-cyan-700 hover:bg-cyan-600'
  },
  {
    bg: 'bg-gradient-to-br from-pink-500 to-rose-600',
    text: 'text-pink-100',
    button: 'bg-pink-700 hover:bg-pink-600'
  },
  {
    bg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    text: 'text-emerald-100',
    button: 'bg-emerald-700 hover:bg-emerald-600'
  }
];

// Sample project data
const projects = [
  {
    id: 1,
    title: "FraudShield AI",
    description: "Real-time fraud detection for UPI transactions with 99.7% accuracy using TensorFlow.js",
    tags: ["AI", "React", "Node.js", "MongoDB", "AWS"],
    github: "https://github.com/Rohan1786/FraudShieldAI",
    demo: "https://fraudshieldai.netlify.app/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: [
      "AI-powered transaction analysis",
      "Real-time alerts",
      "Dashboard analytics",
      "JWT authentication"
    ],
    stats: {
      stars: 128,
      forks: 34
    }
  },
  {
    id: 2,
    title: "SecureQR Scanner",
    description: "QR code scanner with OpenCV to detect malicious URLs (85% success rate)",
    tags: ["Python", "OpenCV", "Streamlit", "Firebase"],
    github: "https://github.com/Rohan1786/Fraud-Detector",
    demo: "https://github.com/Rohan1786/Fraud-Detector",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    features: [
      "URL threat detection",
      "History logging",
      "User reporting system",
      "Dark mode"
    ],
    stats: {
      stars: 89,
      forks: 21
    }
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Interactive dashboard that transforms natural language into visual charts",
    tags: ["React", "Firebase", "Gemini AI", "Chart.js"],
    github: "https://github.com/Rohan1786/Hack2InternPS08",
    demo: "https://hack2-intern-ps-08-git-main-rohan1786s-projects.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    features: [
      "Natural language processing",
      "Custom chart generation",
      "Data export",
      "Team collaboration"
    ],
    stats: {
      stars: 156,
      forks: 42
    }
  },
  {
    id: 4,
    title: "Code Fusion",
    description: "Comprehensive full-stack application with all domain knowledge integrated",
    tags: ["MERN", "JavaScript", "Express", "MongoDB"],
    github: "",
    demo: "https://github.com/Rohan1786/MyIDE_CODE_FUSION",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: [
      "User authentication",
      "Real-time updates",
      "Admin dashboard",
      "Responsive design"
    ],
    stats: {
      stars: 72,
      forks: 18
    }
  },
  {
    id: 5,
    title: "Coming soon",
    description: "Upating two more projects soon",
    tags: [],
    github: "",
    demo: "",
    image: "",
    features: [
      "Project 1: ",
    
    ],
    stats: {
      stars: 72,
      forks: 18
    }
  },
  {
    id: 6,
    title: "Coming soon",
    description: "Upating two more projects soon",
    tags: [],
    github: "",
    demo: "",
    image: "",
    features: [
      "Project 1: ",
    ],
    stats: {
      stars: 72,
      forks: 18
    }
  }
];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  const filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedTag));

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  const closeModal = () => setActiveProject(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Page Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Interactive showcase of my work. Click any project to explore details.
          </p>
        </motion.div>

        {/* Mobile Filter Button */}
        {isMobile && (
          <motion.button
            onClick={toggleFilter}
            className="fixed bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg shadow-cyan-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isFilterOpen ? <FaTimes /> : <FaFilter />}
            <span className="font-medium">Filters</span>
          </motion.button>
        )}

        {/* Filter Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className={`${isMobile ? (isFilterOpen ? 'fixed inset-0 z-10 bg-black/30 backdrop-blur-sm' : 'hidden') : 'mb-12'}`}
        >
          <div className={`${isMobile ? 'absolute bottom-0 left-0 right-0 bg-gray-800 rounded-t-3xl p-6 shadow-2xl' : 'max-w-2xl mx-auto'}`}>
            {isMobile && (
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Filter Projects</h3>
                <button onClick={toggleFilter} className="p-2 text-gray-400">
                  <FaTimes />
                </button>
              </div>
            )}
            
            <Tab.Group>
              <Tab.List className={`flex flex-wrap gap-2 p-1 ${isMobile ? 'justify-center' : 'justify-center'} bg-gray-700 rounded-xl`}>
                {allTags.map((tag) => (
                  <Tab
                    key={tag}
                    className={({ selected }) => 
                      `px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                        selected
                          ? 'bg-gray-900 shadow-md text-cyan-400'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`
                    }
                    onClick={() => {
                      setSelectedTag(tag);
                      if (isMobile) setIsFilterOpen(false);
                    }}
                  >
                    {tag}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const theme = cardThemes[index % cardThemes.length];
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={item}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  <Tilt 
                    tiltEnable={!isMobile}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    scale={1.03}
                    transitionSpeed={800}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    glareColor="#ffffff"
                    glarePosition="all"
                    className="h-full"
                  >
                    <motion.div 
                      className={`h-full ${theme.bg} rounded-xl shadow-xl overflow-hidden cursor-pointer group relative`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveProject(project)}
                    >
                      {/* Floating Stats */}
                      <div className="absolute top-3 right-3 flex gap-2">
                        <motion.div 
                          className="flex items-center px-2 py-1 bg-black/20 backdrop-blur-sm rounded-full text-white text-xs"
                          whileHover={{ scale: 1.1 }}
                        >
                          <FaStar className="mr-1 text-yellow-300" />
                          <span>{project.stats.stars}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center px-2 py-1 bg-black/20 backdrop-blur-sm rounded-full text-white text-xs"
                          whileHover={{ scale: 1.1 }}
                        >
                          <FaCodeBranch className="mr-1" />
                          <span>{project.stats.forks}</span>
                        </motion.div>
                      </div>

                      {/* Project Image */}
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-white font-medium text-sm">View Details →</span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-4 sm:p-5">
                        <h3 className={`text-lg sm:text-xl font-bold ${theme.text} mb-1 sm:mb-2`}>
                          {project.title}
                        </h3>
                        <p className={`${theme.text} opacity-90 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2`}>
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5">
                          {project.tags.map(tag => (
                            <motion.span
                              key={tag}
                              className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full"
                              whileHover={{ scale: 1.05 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 sm:gap-3">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center px-3 sm:px-4 py-1 sm:py-2 ${theme.button} text-white rounded-lg text-sm sm:text-base transition-colors`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub className="mr-1 sm:mr-2" />
                            Code
                          </motion.a>
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 text-sm sm:text-base transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaExternalLinkAlt className="mr-1 sm:mr-2" />
                            Demo
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </Tilt>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg sm:text-xl font-medium text-purple-200">
              Coming soon
            </h3>
          </motion.div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div 
                className="relative w-full max-w-2xl lg:max-w-4xl bg-gray-800 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={closeModal}
                    className="absolute top-3 right-3 p-2 bg-gray-700/80 rounded-full text-white hover:bg-gray-600 transition-colors"
                  >
                    <FaTimes />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      {activeProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
                      {activeProject.tags.map(tag => (
                        <motion.span
                          key={tag}
                          className="px-2 py-1 text-xs sm:text-sm font-medium bg-cyan-600 text-white rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-grow">
                  <p className="text-gray-300 mb-4 sm:mb-6">
                    {activeProject.description}
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                    Key Features
                  </h3>
                  <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {activeProject.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start bg-gray-700/50 p-2 sm:p-3 rounded-lg"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5 mr-2 text-cyan-400">
                          ✓
                        </span>
                        <span className="text-gray-300 text-sm sm:text-base">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 text-sm sm:text-base transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="mr-2" />
                      View Code
                    </motion.a>
                    <motion.a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 text-sm sm:text-base transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;