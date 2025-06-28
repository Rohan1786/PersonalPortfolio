import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaTimes } from 'react-icons/fa';
import { Tab } from '@headlessui/react';

// Sample project data
const projects = [
  {
    id: 1,
    title: "FraudShield AI",
    description: "Real-time fraud detection for UPI transactions with 99.7% accuracy using TensorFlow.js",
    tags: ["AI", "React", "Node.js", "MongoDB", "AWS"],
    github: "#",
    demo: "#",
    image: "/assets/projects/fraudshield.png",
    features: [
      "AI-powered transaction analysis",
      "Real-time alerts",
      "Dashboard analytics",
      "JWT authentication"
    ]
  },
  {
    id: 2,
    title: "SecureQR Scanner",
    description: "QR code scanner with OpenCV to detect malicious URLs (85% success rate)",
    tags: ["Python", "OpenCV", "Streamlit", "Firebase"],
    github: "#",
    demo: "#",
    image: "/assets/projects/secureqr.png",
    features: [
      "URL threat detection",
      "History logging",
      "User reporting system",
      "Dark mode"
    ]
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Interactive dashboard that transforms natural language into visual charts",
    tags: ["React", "Firebase", "Gemini AI", "Chart.js"],
    github: "#",
    demo: "#",
    image: "/assets/projects/ai-dashboard.png",
    features: [
      "Natural language processing",
      "Custom chart generation",
      "Data export",
      "Team collaboration"
    ]
  },
  {
    id: 4,
    title: "Code Fusion",
    description: "Comprehensive full-stack application with all domain knowledge integrated",
    tags: ["MERN", "JavaScript", "Express", "MongoDB"],
    github: "#",
    demo: "#",
    image: "/assets/projects/codefusion.png",
    features: [
      "User authentication",
      "Real-time updates",
      "Admin dashboard",
      "Responsive design"
    ]
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

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
          <div className={`${isMobile ? 'absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-3xl p-6 shadow-2xl' : 'max-w-2xl mx-auto'}`}>
            {isMobile && (
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Filter Projects</h3>
                <button onClick={toggleFilter} className="p-2 text-gray-500 dark:text-gray-400">
                  <FaTimes />
                </button>
              </div>
            )}
            
            <Tab.Group>
              <Tab.List className={`flex flex-wrap gap-2 p-1 ${isMobile ? 'justify-center' : 'justify-center'} bg-gray-200 dark:bg-gray-800 rounded-xl`}>
                {allTags.map((tag) => (
                  <Tab
                    key={tag}
                    className={({ selected }) => 
                      `px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                        selected
                          ? 'bg-white dark:bg-gray-900 shadow-md text-cyan-600 dark:text-cyan-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
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
                    className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden cursor-pointer group"
                    whileHover={{ y: -5 }}
                    onClick={() => setActiveProject(project)}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium">View Details →</span>
                      </div>
                      {/* Tags */}
                      <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                        {project.tags.map(tag => (
                          <span 
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-cyan-600 text-white rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="mr-2" />
                          Code
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          Demo
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400">
              No projects found with the selected filter.
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
                className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  >
                    <FaTimes />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {activeProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {activeProject.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-cyan-600 text-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8 overflow-y-auto flex-grow">
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {activeProject.description}
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {activeProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-2 text-cyan-500">
                          ✓
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
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
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-colors"
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