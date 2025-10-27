import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Particles from "react-tsparticles";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaReact, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsArrowDown } from 'react-icons/bs';
import { SiTensorflow, SiMongodb, SiTypescript } from 'react-icons/si';
import { IoMdRocket } from 'react-icons/io';
import { GiArtificialIntelligence } from 'react-icons/gi';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Hackathons from './Hackathons';
import Certificates from './Certificates';
const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Skill data for the rotating cards
  const skills = [
    {
      title: "Frontend",
      icon: <FaReact className="w-12 h-12 text-cyan-400" />,
      items: ["React", "Tailwind", "Framer Motion","CSS"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="w-12 h-12 text-green-500" />,
      items: ["Node.js", "Express", "REST APIs"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "AI/ML",
      icon: <GiArtificialIntelligence className="w-12 h-12 text-purple-500" />,
      items: ["TensorFlow", "GeminiAI", "Computer Vision", "Data Science"],
      color: "from-purple-500 to-fuchsia-600"
    },
    {
      title: "Languages",
      icon: <FaJava className="w-12 h-12 text-red-500" />,
      items: ["Java", "Python", "JavaScript"],
      color: "from-red-500 to-pink-600"
    }
  ];

  // Featured projects
  const featuredProjects = [
    {
      title: "AI Pie Chart Dashboard",
      description: "Generate pie charts from natural language queries",
      tags: ["React", "Node.js", "GeminiAI", "Chart.js"],
      link: "https://hack2-intern-ps-08-git-main-rohan1786s-projects.vercel.app/"
    },
    {
      title: "Cybersecurity Dashboard",
      description: "Real-time threat monitoring and visualization",
      tags: ["GeminiAI", "Tensorflow", "React", "JavaScript"],
      link: "https://fraudshieldai.netlify.app/"
    },
    {
      title: "Code Fusion",
      description: "Practice coding skills in web development",
      tags: ["Javascript", "Mongodb", "React", "Express"],
      link: "https://github.com/Rohan1786/MyIDE_CODE_FUSION"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Rohan's technical depth and problem-solving skills are exceptional. He delivered our project ahead of schedule.",
      author: "Jane Smith, Tech Lead at XYZ Corp"
    },
    {
      quote: "His ability to explain complex concepts simply makes him a great team player and mentor.",
      author: "Mike Johnson, Hackathon Organizer"
    },
    {
      quote: "The AI solution Rohan built increased our operational efficiency by 40%.",
      author: "Sarah Lee, CEO at Startup ABC"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 140,
                  line_linked: {
                    opacity: 1
                  }
                },
                push: {
                  particles_nb: 4
                }
              }
            },
            retina_detect: true
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Greeting Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Rohan Pawar</span>
            </h1>
            <div className="h-16 overflow-hidden">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300"
                animate={{
                  y: [-60, 0, 60, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="block">Software Developer</span>
                <span className="block">Full Stack Engineer</span>
                <span className="block">AI Enthusiast</span>
                <span className="block">Hackathon Winner</span>
              </motion.h2>
            </div>
          </motion.div>

          {/* Short Summary */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto mt-6 text-lg sm:text-xl text-gray-300"
          >
            Passionate about building innovative solutions with Java, MERN stack, and AI integration.
            200+ day DSA streak on LeetCode, cybersecurity enthusiast, and content creator.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center mt-8 space-x-6"
          >
            <a
              href="https://github.com/Rohan1786"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-pawar-59621525a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
            <a
              href="https://www.youtube.com/@VinkiRohanVlog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors duration-300"
              aria-label="YouTube"
            >
              <FaYoutube className="h-8 w-8" />
            </a>
            <a
              href="https://instagram.com/hustlewithrohan108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="h-8 w-8" />
            </a>
            <a
              href="mailto:vinkirohan02@gmail.com"
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              aria-label="Email"
            >
              <HiOutlineMail className="h-8 w-8" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <a
              href="https://github.com/Rohan1786"
              className="px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-pawar-59621525a/"
              className="px-8 py-3 text-lg font-medium rounded-full bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <BsArrowDown className="h-6 w-6 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Additional Sections */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-indigo-900">
        {/* Skills Section */}
        <section className="max-w-7xl mx-auto mb-28">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Technical</span> Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${skill.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-200">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="max-w-7xl mx-auto mb-28">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Featured</span> Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <IoMdRocket className="text-purple-400 mr-2 text-xl" />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200">{tag}</span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="mt-auto inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">People Say</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 relative"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                  <span className="text-lg font-bold">"</span>
                </div>
                <p className="text-gray-300 italic mb-4 pl-4">{testimonial.quote}</p>
                <p className="text-amber-400 font-medium">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <div>
        <About/>
        <Projects/>
        <Experience/>
        <Hackathons/>
        <Certificates/>
        <Contact/>
      </div>
    </div>
  );
};

export default Home;