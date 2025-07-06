import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tab } from '@headlessui/react';
import Tilt from 'react-parallax-tilt';
import { 
  FaJava,
  FaReact,
  FaDatabase,
  FaCode,
  FaAward,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaSearch,
  FaFilter,
  FaTimes,
  FaNodeJs,

  FaLaptopCode,
  FaServer,
  FaRobot,
  FaProjectDiagram,
  FaShieldAlt,
  FaCertificate

}from 'react-icons/fa';
import { SiJavascript, SiPostman, SiMongodb, SiNodedotjs } from 'react-icons/si';

// Color themes for each certificate card
const cardThemes = [
  {
    bg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    text: 'text-blue-100',
    border: 'border-blue-400'
  },
  {
    bg: 'bg-gradient-to-br from-purple-500 to-pink-600',
    text: 'text-purple-100',
    border: 'border-purple-400'
  },
  {
    bg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    text: 'text-emerald-100',
    border: 'border-emerald-400'
  },
  {
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    text: 'text-amber-100',
    border: 'border-amber-400'
  }
];

// Certificate data


const certificates = [
  {
    id: 1,
    title: "Top DBMS Interview Questions",
    issuer: "CodeChef",
    date: "March 22, 2025",
    category: "Database",
    icon: <FaDatabase className="text-blue-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/dbms.png",
    skills: ["SQL", "NoSQL", "Database Design"],
    featured: true
  },
  {
    id: 2,
    title: "React Interview Questions",
    issuer: "CodeChef",
    date: "March 8, 2025",
    category: "Frontend",
    icon: <FaReact className="text-blue-300 text-3xl" />,
    link: "#",
    image: "/assets/certificates/react.png",
    skills: ["React", "JavaScript", "Hooks"],
    featured: true
  },
  {
    id: 3,
    title: "TCS NQT Practice Problems",
    issuer: "CodeChef",
    date: "November 1, 2024",
    category: "DSA",
    icon: <FaCode className="text-green-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/tcs.png",
    skills: ["Algorithms", "Problem Solving", "Data Structures"]
  },
  {
    id: 4,
    title: "Java Interview Questions",
    issuer: "CodeChef",
    date: "October 24, 2024",
    category: "Backend",
    icon: <FaJava className="text-red-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/java.png",
    skills: ["Java", "OOP", "Spring Boot"]
  },
  {
    id: 5,
    title: "Top SQL Interview Questions",
    issuer: "CodeChef",
    date: "October 12, 2024",
    category: "Database",
    icon: <FaDatabase className="text-blue-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/sql.png",
    skills: ["SQL", "Query Optimization", "Indexing"]
  },
  {
    id: 6,
    title: "GirlScript Summer of Code",
    issuer: "GirlScript Foundation",
    date: "2024",
    category: "Open Source",
    icon: <FaAward className="text-purple-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/gsoc.png",
    skills: ["Git", "Collaboration", "Open Source"],
    featured: true
  },
  {
    id: 7,
    title: "Postman API Fundamentals",
    issuer: "Postman",
    date: "2024",
    category: "API Development",
    icon: <SiPostman className="text-orange-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/postman.png",
    skills: ["API Development", "Request Handling", "Testing"]
  },
  {
    id: 8,
    title: "Hackathon Winner",
    issuer: "VDIT Haliyal",
    date: "December 2023",
    category: "Hackathons",
    icon: <FaProjectDiagram className="text-yellow-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/hackathon-cert.jpg",
    skills: ["Teamwork", "Problem Solving", "Innovation"]
  },
  {
    id: 9,
    title: "GeeksForGeeks Certification",
    issuer: "GeeksForGeeks",
    date: "2025",
    category: "Coding Challenge",
    icon: <FaCode className="text-green-500 text-3xl" />,
    link: "#",
    image: "/assets/certificates/gfg.png",
    skills: ["Problem Solving", "Algorithms", "Data Structures"],
    featured: true
  },
  {
    id: 10,
    title: "B.E. Computer Science",
    issuer: "S.G. Balekundri Institute",
    date: "2025",
    category: "Education",
    icon: <FaGraduationCap className="text-indigo-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/degree-cert.jpg",
    skills: ["Computer Science", "Software Engineering", "AI/ML"],
    featured: true
  },
  {
    id: 11,
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2023",
    category: "Web Development",
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/freeRes.png",
    skills: ["HTML", "CSS", "Responsive Design"],
    featured: true
  },
  {
    id: 12,
    title: "Javascript Algorithms and Data Structures",
    issuer: "FreecodeCamp",
    date: "2023",
    category: "Web Development",
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/javascript.png",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
    featured: true
  },
  {
    id: 13,
    title: "Mongodb & Nodejs Certification",
    issuer: "MongoDB University",
    date: "2023",
    category: "Backend Development",
    icon: <SiMongodb className="text-green-500 text-3xl" />,
    link: "#",
    image: "/assets/certificates/mongo.png",
    skills: ["MongoDB", "Node.js", "Backend"],
    featured: true
  },
  {
    id: 14,
    title: "Hack2Intern",
    issuer: "TechVerti",
    date: "2025",
    category: "Hackathons",
    icon: <FaProjectDiagram className="text-purple-400 text-3xl" />,
    link: "#",
    image: "/assets/hackathons/techVerti.png",
    skills: ["React", "Generative AI", "Tailwind CSS"],
    featured: true
  },
  {
    id: 15,
    title: "Epicthon",
    issuer: "SGI",
    date: "2023",
    category: "Hackathons",
    icon: <FaProjectDiagram className="text-blue-400 text-3xl" />,
    link: "#",
    image: "/assets/hackathons/Epicthon.png",
    skills: ["Android", "Java", "Firebase"],
    featured: true
  },
  {
    id: 16,
    title: "Microsoft AI Challenge",
    issuer: "Microsoft",
    date: "2023",
    category: "AI Challenge",
    icon: <FaRobot className="text-red-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/microsoft.png",
    skills: ["AI", "NLP", "Generative AI"],
    featured: true
  },
  {
    id: 17,
    title: "FreecodeCamp Frontend Libraries",
    issuer: "FreecodeCamp",
    date: "2023",
    category: "Web Development",
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/freeLib.png",
    skills: ["React", "Bootstrap", "jQuery"],
    featured: true
  }
];

// Get all unique categories
const categories = ['All', ...new Set(certificates.map(cert => cert.category))];

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  // Check if mobile
  useState(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredCerts = certificates.filter(cert => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Certifications</span>
          </h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Validations of my expertise through recognized certifications and achievements
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

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className={`${isMobile ? (isFilterOpen ? 'fixed inset-0 z-10 bg-black/30 backdrop-blur-sm' : 'hidden') : 'mb-12'}`}
        >
          <div className={`${isMobile ? 'absolute bottom-0 left-0 right-0 bg-gray-800 rounded-t-3xl p-6 shadow-2xl' : 'max-w-4xl mx-auto'}`}>
            {isMobile && (
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Filter Certificates</h3>
                <button onClick={toggleFilter} className="p-2 text-gray-400">
                  <FaTimes />
                </button>
              </div>
            )}
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search certificates..."
                  className="pl-10 pr-4 py-2 w-full bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Tab.Group>
                <Tab.List className={`flex flex-wrap gap-2 p-1 ${isMobile ? 'justify-center' : 'justify-center'} bg-gray-700 rounded-xl`}>
                  {categories.map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) => 
                        `px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                          selected
                            ? 'bg-gray-900 shadow-md text-cyan-400'
                            : 'text-gray-300 hover:bg-gray-600'
                        }`
                      }
                      onClick={() => {
                        setSelectedCategory(category);
                        if (isMobile) setIsFilterOpen(false);
                      }}
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
              </Tab.Group>
            </div>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {filteredCerts.map((cert, index) => {
              const theme = cardThemes[index % cardThemes.length];
              
              return (
                <motion.div
                  key={cert.id}
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
                      className={`h-full ${theme.bg} rounded-xl shadow-xl overflow-hidden cursor-pointer group relative border-t-2 ${theme.border}`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openModal(cert)}
                    >
                      {/* Featured Badge */}
                      {cert.featured && (
                        <div className="absolute top-3 left-3 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                          Featured
                        </div>
                      )}

                      {/* Certificate Image */}
                      <div className="relative h-48 sm:h-52 overflow-hidden">
                        <motion.img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-white font-medium text-sm">View Details →</span>
                        </div>
                      </div>

                      {/* Certificate Content */}
                      <div className="p-4 sm:p-5">
                        <div className="flex items-start mb-3">
                          <div className="mr-3">
                            {cert.icon}
                          </div>
                          <div>
                            <h3 className={`text-lg sm:text-xl font-bold ${theme.text} mb-1 sm:mb-2 line-clamp-2`}>
                              {cert.title}
                            </h3>
                            <p className={`${theme.text} opacity-90 text-sm sm:text-base`}>
                              {cert.issuer}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <span className={`${theme.text} opacity-90 text-sm`}>
                            {cert.date}
                          </span>
                          <span className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full">
                            {cert.category}
                          </span>
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
        {filteredCerts.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 rounded-full mb-4">
              <FaSearch className="text-cyan-400 text-2xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-purple-200 mb-2">
              No certificates found
            </h3>
            <p className="text-purple-300/80">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
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
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
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
                      {selectedCert.title}
                    </h2>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
                      {selectedCert.tags && selectedCert.tags.map(tag => (
                        <motion.span
                          key={tag}
                          className="px-2 py-1 text-xs sm:text-sm font-medium bg-cyan-600 text-white rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      <motion.span
                        className="px-2 py-1 text-xs sm:text-sm font-medium bg-purple-600 text-white rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {selectedCert.category}
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {selectedCert.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {selectedCert.issuer}
                      </h3>
                      <p className="text-gray-400">
                        Issued: {selectedCert.date}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 sm:mb-6">
                    {selectedCert.description}
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                    Skills Validated
                  </h3>
                  <motion.div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {selectedCert.skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 text-sm sm:text-base transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View Certificate
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

export default Certificates;