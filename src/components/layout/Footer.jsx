import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 space-x-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://instagram.com/hustlewithrohan108"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://youtube.com/@VinkiRohanVlog"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              <FaYoutube className="h-6 w-6" />
            </motion.a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} Rohan Pawar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;