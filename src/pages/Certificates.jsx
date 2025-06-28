import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tab } from '@headlessui/react';
import { 
  FaJava,
  FaReact,
  FaDatabase,
  FaCode,
  FaAward,
  FaGraduationCap
} from 'react-icons/fa';

// Certificate data - replace with your actual certificates
const certificates = [
  {
    id: 1,
    title: "Top DBMS Interview Questions",
    issuer: "CodeChef",
    date: "March 22, 2025",
    category: "Database",
    icon: <FaDatabase className="text-blue-500 text-3xl" />,
    link: "#",
    image: "/assets/certificates/dbms-cert.jpg"
  },
  {
    id: 2,
    title: "React Interview Questions",
    issuer: "CodeChef",
    date: "March 8, 2025",
    category: "Frontend",
    icon: <FaReact className="text-blue-400 text-3xl" />,
    link: "#",
    image: "/assets/certificates/react-cert.jpg"
  },
  {
    id: 3,
    title: "TCS NQT Practice Problems",
    issuer: "CodeChef",
    date: "November 1, 2024",
    category: "DSA",
    icon: <FaCode className="text-green-500 text-3xl" />,
    link: "#",
    image: "/assets/certificates/tcs-cert.jpg"
  },
  {
    id: 4,
    title: "Java Interview Questions",
    issuer: "CodeChef",
    date: "October 24, 2024",
    category: "Backend",
    icon: <FaJava className="text-red-500 text-3xl" />,
    link: "#",
    image: "/assets/certificates/java-cert.jpg"
  },
  {
    id: 5,
    title: "Top SQL Interview Questions",
    issuer: "CodeChef",
    date: "October 12, 2024",
    category: "Database",
    icon: <FaDatabase className="text-blue-500 text-3xl" />,
    link: "#",
    image: "/assets/certificates/sql-cert.jpg"
  },
  {
    id: 6,
    title: "GirlScript Summer of Code",
    issuer: "GirlScript Foundation",
    date: "2024",
    category: "Open Source",
    icon: <FaAward className="text-purple-500 text-3xl" />,
    link: "#",
    image: "/assets/certificates/gsoc-cert.jpg"
  },
  {
    id: 7,
    title: "Hackathon Winner",
    issuer: "VDIT Haliyal",
    date: "December 2023",
    category: "Achievement",
    icon: <FaAward className="text-yellow-500 text-3xl" />,
    link: "#",
    image: "/assets/certificates/hackathon-cert.jpg"
  },
  {
    id: 8,
    title: "B.E. Computer Science",
    issuer: "S.G. Balekundri Institute",
    date: "2025",
    category: "Education",
    icon: <FaGraduationCap className="text-indigo-500 text-3xl" />,
    link: "#",
    image: "/assets/certificates/degree-cert.jpg"
  }
];

// Get all unique categories
const categories = ['All', ...new Set(certificates.map(cert => cert.category))];

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const filteredCerts = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

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
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ y: -20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Certifications</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ y: -20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Here's a collection of my certifications and achievements that validate my skills and knowledge.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Tab.Group>
            <Tab.List className="flex flex-wrap justify-center gap-2 p-1 bg-gray-200 dark:bg-gray-800 rounded-xl max-w-2xl mx-auto">
              {categories.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) => 
                    `px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                      selected
                        ? 'bg-white dark:bg-gray-900 shadow-md text-amber-600 dark:text-amber-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700">
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden group">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:underline"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-5">
                  <div className="flex items-start mb-3">
                    <div className="mr-4">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {cert.date}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400">
              No certificates found in this category.
            </h3>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Certificates;