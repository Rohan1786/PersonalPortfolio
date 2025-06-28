import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Reveal } from 'react-awesome-reveal';
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaCode,
  FaFire,
  FaChartLine,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaBrain,
  FaDatabase,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

// Education data
const education = [
  {
    id: 1,
    degree: "B.E. in Computer Science & Engineering",
    institution: "S.G. Balekundri Institute of Technology, Belgaum",
    year: "2021 - 2025",
    score: "CGPA: 8.78/10",
    highlights: [
      "Specialized in AI and Backend Systems",
      "200+ day DSA streak on LeetCode/GFG",
      "Participated in 4 national hackathons"
    ]
  },
  {
    id: 2,
    degree: "Pre-University Course (PUC)",
    institution: "Jyoti PU College, Belgaum",
    year: "2021",
    score: "Percentage: 91%",
    highlights: [
      "Focus on Computer Science and Mathematics",
      "Developed foundational programming skills"
    ]
  }
];

// Skills data - categorized
const skills = {
  languages: ["Java", "Python", "JavaScript"],
  frontend: ["HTML5", "CSS3", "React", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "Flask", "Spring Boot"],
  databases: ["MongoDB", "Firebase", "MySQL", "NoSQL"],
  ai_ml: ["TensorFlow", "OpenCV", "Scikit-learn", "Gemini AI"],
  tools: ["Git", "GitHub", "Postman", "VS Code", "Docker"]
};

const About = () => {
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
        className="max-w-6xl mx-auto"
      >
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ y: -20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Me</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ y: -20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            My educational background, skills, and coding journey.
          </motion.p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Education</span> Timeline
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-indigo-400 to-purple-500 md:left-1/2 transform md:-translate-x-1/2"></div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index }}
                className={`relative mb-8 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-4 rounded-full w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg flex items-center justify-center ${index % 2 === 0 ? 'left-0 md:left-auto md:right-0 transform md:translate-x-1/2' : 'left-0 md:left-0 transform md:-translate-x-1/2'}`}>
                  <FaGraduationCap className="text-white text-sm" />
                </div>

                {/* Content */}
                <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 mt-2 sm:mt-0">
                        {edu.year}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <FaUniversity className="mr-2" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300 font-medium mb-4">
                      {edu.score}
                    </div>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          className="text-gray-700 dark:text-gray-300 relative pl-6"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ delay: 0.1 * i + 0.2 * index }}
                        >
                          <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-indigo-500"></span>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Skills</span> & Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Languages */}
            <Reveal triggerOnce cascade damping={0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 mr-4">
                    <FaCode className="text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Frontend */}
            <Reveal triggerOnce cascade damping={0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 mr-4">
                    <FaMobileAlt className="text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Frontend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Backend */}
            <Reveal triggerOnce cascade damping={0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mr-4">
                    <FaServer className="text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Backend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Databases */}
            <Reveal triggerOnce cascade damping={0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 mr-4">
                    <FaDatabase className="text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Databases</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* AI/ML */}
            <Reveal triggerOnce cascade damping={0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 mr-4">
                    <FaBrain className="text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">AI/ML</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.ai_ml.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Tools */}
            <Reveal triggerOnce cascade damping={0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 mr-4">
                    <FaLaptopCode className="text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Coding Journey */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Coding Journey</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* DSA Streak */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-lg border border-indigo-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 mr-4">
                    <FaFire className="text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">DSA Streak</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Achieved a 200+ day streak solving problems on:
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <SiLeetcode className="text-orange-500 text-xl mr-2" />
                    <span className="font-medium">LeetCode</span>
                  </div>
                  <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <SiGeeksforgeeks className="text-green-500 text-xl mr-2" />
                    <span className="font-medium">GeeksforGeeks</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : {}}
                      transition={{ duration: 1.5, delay: 0.4 }}
                    />
                  </div>
                  <p className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                    200+ days and counting
                  </p>
                </div>
              </motion.div>

              {/* Content Creation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-lg border border-purple-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 mr-4">
                    <FaChartLine className="text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Content Creation</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Sharing knowledge and experiences through:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <FaInstagram className="text-pink-500 text-xl mr-2" />
                    <span className="font-medium">Instagram (@hustlewithrohan108)</span>
                  </div>
                  <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <FaYoutube className="text-red-500 text-xl mr-2" />
                    <span className="font-medium">YouTube (@VinkiRohanVlog)</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-600"
                      initial={{ width: 0 }}
                      animate={inView ? { width: "80%" } : {}}
                      transition={{ duration: 1.5, delay: 0.6 }}
                    />
                  </div>
                  <p className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Growing community of developers
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;