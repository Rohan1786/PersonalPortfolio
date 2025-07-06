import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaLaptopCode, FaChartLine, FaUsers, FaLightbulb, FaTrophy } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true // Changed to true for better performance
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Experience data
  const experiences = [
    {
      id: 1,
      role: "Backend Data & API Intern",
      company: "Vanloka (Startup)",
      duration: "2025",
      description: [
        "Developed 15+ secure REST APIs for customer/transaction management",
        "Implemented JWT token authentication for 1000+ users",
        "Optimized database queries resulting in 60% faster data retrieval",
        "Collaborated using Agile methodology to deliver features on schedule"
      ],
      skills: ["Nodejs", "REST APIs", "JWT", "Agile", "Mongodb","React","Swagger API"],
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />
    },
    {
      id: 2,
      role: "Web Design Intern",
      company: "Eyesec Cyber Security Solutions Pvt. Ltd.",
      duration: "2023 - 2024",
      description: [
        "Designed UI components using HTML, CSS, and JavaScript",
        "Prototyped backend functionalities for portfolio systems",
        "Collaborated with security team to implement secure design patterns"
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Figma"],
      icon: <FaBriefcase className="text-green-500 text-2xl" />
    },
    {
      id: 3,
      role: "MERN Stack Intern",
      company: "Softmusk Info Tech",
      duration: "2024",
      description: [
        "Implemented full-stack solutions using MongoDB, Express, React, and Node.js",
        "Built reusable components and integrated secure user authentication",
        "Optimized application performance by 30% through code refactoring"
      ],
      skills: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js"],
      icon: <FaChartLine className="text-purple-500 text-2xl" />
    }
  ];

  // Milestones data
  const milestones = [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "Won 1st place at VDIT Haliyal Hackathon for building an AI-based UPI fraud detection system.",
      icon: <FaTrophy className="text-blue-500 dark:text-cyan-400 text-4xl mb-4" />
    },
    {
      id: 2,
      title: "Performance Optimization",
      description: "Optimized database queries resulting in 60% faster data retrieval at Vanloka.",
      icon: <FaChartLine className="text-blue-500 dark:text-cyan-400 text-4xl mb-4" />
    },
    {
      id: 3,
      title: "Team Leadership",
      description: "Led multiple hackathon teams to success while mentoring junior developers.",
      icon: <FaUsers className="text-blue-500 dark:text-cyan-400 text-4xl mb-4" />
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full"
          />
        </div>
      ) : (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Page Header */}
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Professional Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A timeline of my work experiences, roles, and key contributions.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline connector */}
                {index !== experiences.length - 1 && (
                  <motion.div
                    className="absolute left-6 top-8 h-full w-0.5 bg-blue-400 dark:bg-cyan-500 transform -translate-x-1/2"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  />
                )}

                <div className="relative flex items-start group">
                  {/* Icon */}
                  <motion.div
                    className="absolute left-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md border-2 border-blue-400 dark:border-cyan-500 group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-colors z-10"
                    variants={iconVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="ml-16">
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Header */}
                      <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {exp.role}
                            </h3>
                            <p className="text-blue-600 dark:text-cyan-400 font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <motion.span 
                            className="inline-flex items-center px-3 py-1 mt-2 sm:mt-0 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.duration}
                          </motion.span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-5">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <FaLightbulb className="mr-2 text-yellow-500" />
                          Key Contributions:
                        </h4>
                        <ul className="space-y-2 pl-6">
                          {exp.description.map((item, i) => (
                            <motion.li 
                              key={i}
                              className="text-gray-700 dark:text-gray-300 relative pl-4"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i + 0.2 * index + 0.5 }}
                            >
                              <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-400 dark:bg-cyan-500"></span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>

                        {/* Skills */}
                        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <FaUsers className="mr-2 text-blue-500" />
                            Skills Applied:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <motion.span
                                key={i}
                                className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ 
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20,
                                  delay: 0.05 * i + 0.2 * index + 0.5
                                }}
                                whileHover={{ scale: 1.1 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Milestones Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Milestones</span>
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * index + 1 }}
                  whileHover={{ y: -5 }}
                >
                  {milestone.icon}
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Experience;