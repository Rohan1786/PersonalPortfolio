import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
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
  FaYoutube,
  FaAward,
  FaHackerrank,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { IoMdRibbon } from 'react-icons/io';

// Color themes for sections
const sectionThemes = [
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
    ],
    color: "from-purple-500 to-pink-500",
    featured: true
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
    ],
    color: "from-blue-500 to-cyan-500"
  }
];

// Skills data - categorized
const skills = {
  languages: ["Java", "Python", "JavaScript", "TypeScript"],
  frontend: ["HTML5", "CSS3", "React", "Tailwind CSS", "Next.js"],
  backend: ["Node.js", "Express.js", "Flask", "FastAPI"],
  databases: ["MongoDB", "Firebase", "MySQL"],
  ai_ml: ["TensorFlow", "OpenCV", "Scikit-learn", "Gemini AI"],
  tools: ["Git", "GitHub", "Postman", "VS Code", "Docker"]
};

// Achievements data
const achievements = [
  {
    title: "Hackathon Winner",
    description: "1st prize in national-level hackathon",
    icon: <FaAward className="text-3xl text-yellow-400" />,
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    featured: true
  },
  {
    title: "DSA Champion",
    description: "500+ problems solved on coding platforms",
    icon: <FaHackerrank className="text-3xl text-green-400" />,
    color: "bg-gradient-to-br from-green-400 to-green-600"
  },
  {
    title: "Content Creator",
    description: "Tech content on Instagram & YouTube",
    icon: <FaChartLine className="text-3xl text-pink-400" />,
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    featured: true
  }
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

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
        className="max-w-6xl mx-auto"
      >
        {/* Hero Section */}
        <section className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Me</span>
            </h1>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Passionate developer with expertise in full-stack development and AI/ML
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="https://github.com/yourusername" 
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
            >
              <FaGithub className="w-8 h-8 hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourprofile" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin className="w-8 h-8 hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a 
              href="https://instagram.com/hustlewithrohan108" 
              className="text-gray-300 hover:text-pink-400 transition-colors"
              whileHover={{ y: -3 }}
            >
              <FaInstagram className="w-8 h-8 hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a 
              href="mailto:vinkirohan02@gmail.com" 
              className="text-gray-300 hover:text-red-400 transition-colors"
              whileHover={{ y: -3 }}
            >
              <FaMailBulk className="w-8 h-8 hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>
        </section>

        {/* Education Timeline */}
        <section className="mb-20">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Education</span> Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-400 md:left-1/2 transform md:-translate-x-1/2"></div>

            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={item}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`relative mb-12 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-4 rounded-full w-10 h-10 ${edu.color} shadow-lg flex items-center justify-center ${index % 2 === 0 ? 'left-0 md:left-auto md:right-0 transform md:translate-x-1/2' : 'left-0 md:left-0 transform md:-translate-x-1/2'}`}>
                    <FaGraduationCap className="text-white text-lg" />
                  </div>

                  {/* Education Card */}
                  <Tilt
                    tiltEnable={window.innerWidth > 768}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    scale={1.03}
                    transitionSpeed={800}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    glareColor="#ffffff"
                    glarePosition="all"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`h-full bg-gradient-to-br ${edu.color} rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}
                    >
                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-xl font-bold text-white">
                            {edu.degree}
                          </h4>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white mt-2 sm:mt-0">
                            {edu.year}
                          </span>
                        </div>
                        <div className="flex items-center text-blue-100 mb-4">
                          <FaUniversity className="mr-2" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center text-white font-medium mb-4">
                          <IoMdRibbon className="mr-2 text-cyan-300" />
                          {edu.score}
                        </div>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              className="text-blue-100 relative pl-6"
                              initial={{ opacity: 0 }}
                              animate={inView ? { opacity: 1 } : {}}
                              transition={{ delay: 0.1 * i + 0.2 * index }}
                            >
                              <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-cyan-300"></span>
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Skills</span> & Expertise
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Languages */}
            <motion.div 
              variants={item}
              className="h-full"
            >
              <Tilt
                tiltEnable={window.innerWidth > 768}
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
                  whileHover={{ y: -5 }}
                  className="h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-xl p-6 border-t-2 border-blue-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white mr-4">
                      <FaCode className="text-xl" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Languages</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>

            {/* Frontend */}
            <motion.div 
              variants={item}
              className="h-full"
            >
              <Tilt className="h-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-full bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-xl p-6 border-t-2 border-purple-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white mr-4">
                      <FaMobileAlt className="text-xl" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Frontend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>

            {/* Backend */}
            <motion.div 
              variants={item}
              className="h-full"
            >
              <Tilt className="h-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-xl p-6 border-t-2 border-emerald-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white mr-4">
                      <FaServer className="text-xl" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Backend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>

            {/* Databases */}
            <motion.div 
              variants={item}
              className="h-full"
            >
              <Tilt className="h-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-full bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-xl p-6 border-t-2 border-amber-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white mr-4">
                      <FaDatabase className="text-xl" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Databases</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>

            {/* AI/ML */}
            <motion.div 
              variants={item}
              className="h-full"
            >
              <Tilt className="h-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-full bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-xl p-6 border-t-2 border-red-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white mr-4">
                      <FaBrain className="text-xl" />
                    </div>
                    <h4 className="text-lg font-bold text-white">AI/ML</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.ai_ml.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>

            {/* Tools */}
            <motion.div 
              variants={item}
              className="h-full"
            >
              <Tilt className="h-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-xl p-6 border-t-2 border-cyan-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white mr-4">
                      <FaLaptopCode className="text-xl" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          </motion.div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Notable <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Achievements</span>
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={item}
                className="h-full"
              >
                <Tilt className="h-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`h-full ${achievement.color} rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl`}
                  >
                    <div className="p-6">
                      <div className="flex justify-center mb-4">
                        {achievement.icon}
                      </div>
                      <h4 className="text-xl font-bold text-center text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-center text-white/90">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Coding Journey */}
        <section className="mb-20">
          <Tilt className="h-full">
            <motion.div
              whileHover={{ y: -5 }}
              className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6 md:p-8">
                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold text-center text-white mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Coding Journey</span>
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* DSA Streak */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white mr-4">
                        <FaFire className="text-xl" />
                      </div>
                      <h4 className="text-lg font-bold text-white">DSA Streak</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Achieved a 200+ day streak solving problems on:
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center bg-gray-600 px-4 py-2 rounded-full"
                      >
                        <SiLeetcode className="text-orange-400 text-xl mr-2" />
                        <span className="font-medium text-white">LeetCode</span>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center bg-gray-600 px-4 py-2 rounded-full"
                      >
                        <SiGeeksforgeeks className="text-green-400 text-xl mr-2" />
                        <span className="font-medium text-white">GeeksforGeeks</span>
                      </motion.div>
                    </div>
                    <div className="mt-6">
                      <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          initial={{ width: 0 }}
                          animate={inView ? { width: "100%" } : {}}
                          transition={{ duration: 1.5, delay: 0.4 }}
                        />
                      </div>
                      <p className="text-right text-sm text-gray-400 mt-1">
                        200+ days and counting
                      </p>
                    </div>
                  </motion.div>

                  {/* Content Creation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white mr-4">
                        <FaChartLine className="text-xl" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Content Creation</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Sharing knowledge and experiences through:
                    </p>
                    <div className="space-y-3 mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center bg-gray-600 px-4 py-2 rounded-full"
                      >
                        <FaInstagram className="text-pink-400 text-xl mr-2" />
                        <span className="font-medium text-white">Instagram (@hustlewithrohan108)</span>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center bg-gray-600 px-4 py-2 rounded-full"
                      >
                        <FaYoutube className="text-red-400 text-xl mr-2" />
                        <span className="font-medium text-white">YouTube (@VinkiRohanVlog)</span>
                      </motion.div>
                    </div>
                    <div className="mt-6">
                      <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-pink-400 to-purple-500"
                          initial={{ width: 0 }}
                          animate={inView ? { width: "80%" } : {}}
                          transition={{ duration: 1.5, delay: 0.6 }}
                        />
                      </div>
                      <p className="text-right text-sm text-gray-400 mt-1">
                        Growing audience of developers
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Tilt>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <Tilt className="inline-block w-full">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </p>
              <motion.a
                href="mailto:vinkirohan02@gmail.com"
                className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </Tilt>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default About;