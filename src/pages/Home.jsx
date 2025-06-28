import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsArrowDown } from 'react-icons/bs';

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
            <a
              href="https://youtube.com/yourchannel"
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
              href="#projects"
              className="px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
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
    </div>
  );
};

export default Home;