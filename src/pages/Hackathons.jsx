import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaUsers, FaCalendarAlt, FaCode, FaMedal } from 'react-icons/fa';

// Hackathon data - replace with your actual hackathons
const hackathons = [
  {
    id: 1,
    name: "VDIT Haliyal Hackathon",
    date: "December 2023",
    description: "Won 1st place for building an AI-based UPI fraud detection system with my team.",
    project: "FraudShield - AI fraud detection platform with 99.7% accuracy",
    team: [
      { name: "Rohan Pawar", role: "Team Lead & Backend Developer" },
      { name: "Person 2", role: "Frontend Developer" },
      { name: "Person 3", role: "AI/ML Engineer" }
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
    name: "National Level Hackathon XYZ",
    date: "October 2023",
    description: "Developed a sustainable energy solution using IoT and data analytics.",
    project: "EcoPower - IoT-based energy monitoring system",
    team: [
      { name: "Rohan Pawar", role: "Full Stack Developer" },
      { name: "Person 4", role: "Hardware Engineer" }
    ],
    awards: [
      { title: "Top 5 Finalist", icon: <FaMedal className="text-gray-500" /> }
    ],
    technologies: ["Node.js", "React", "MongoDB", "IoT"],
    result: "Selected as top 5 finalist among 50+ teams"
  },
  {
    id: 3,
    name: "TechFest Hackathon 2023",
    date: "August 2023",
    description: "Created an educational platform with personalized learning paths using AI.",
    project: "LearnAI - Adaptive learning platform",
    team: [
      { name: "Rohan Pawar", role: "Backend Developer" },
      { name: "Person 5", role: "UI/UX Designer" },
      { name: "Person 6", role: "Frontend Developer" }
    ],
    awards: [
      { title: "Best Educational Tech", icon: <FaCode className="text-blue-500" /> }
    ],
    technologies: ["Python", "Flask", "React", "Machine Learning"],
    result: "Won Best Educational Tech award"
  }
];

const Hackathons = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ y: -20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Hackathon Journey</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ y: -20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Showcasing my hackathon experiences, team collaborations, and achievements.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-600 transform -translate-x-1/2"></div>

          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 * index }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-4 rounded-full w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg flex items-center justify-center ${index % 2 === 0 ? 'md:right-0 left-2 transform md:translate-x-1/2' : 'md:left-0 left-2 transform md:-translate-x-1/2'}`}>
                <FaCalendarAlt className="text-white text-xs" />
              </div>

              {/* Content container */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 ${index % 2 === 0 ? 'md:mr-6 ml-10' : 'md:ml-6 ml-10'}`}>
                {/* Header */}
                <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {hackathon.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                      <FaCalendarAlt className="mr-1" />
                      {hackathon.date}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {hackathon.description}
                  </p>

                  {/* Project */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <FaCode className="mr-2 text-purple-500" />
                      Project:
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 pl-6">
                      {hackathon.project}
                    </p>
                  </div>

                  {/* Team */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <FaUsers className="mr-2 text-blue-500" />
                      Team:
                    </h4>
                    <ul className="space-y-2 pl-6">
                      {hackathon.team.map((member, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">
                          <span className="font-medium">{member.name}</span> - {member.role}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2 pl-2">
                      {hackathon.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Awards & Result */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Awards:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {hackathon.awards.map((award, i) => (
                            <div key={i} className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                              <span className="mr-2">{award.icon}</span>
                              <span className="text-sm text-gray-800 dark:text-gray-200">{award.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-0">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-medium">
                          <FaTrophy className="mr-2" />
                          {hackathon.result}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hackathons;