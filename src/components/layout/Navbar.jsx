import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { 
  FaMoon, 
  FaSun, 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUser,
  FaCode,
  FaBriefcase,
  FaTrophy,
  FaCertificate,
  FaPhone
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Enhanced navigation links with icons
  const navLinks = [
    { 
      path: '/', 
      name: 'Home',
      icon: FaUser
    },
    { 
      path: '/about', 
      name: 'About',
      icon: FaUser
    },
    { 
      path: '/projects', 
      name: 'Projects',
      icon: FaCode,
      submenu: [
        { path: '/projects', name: 'Web Development', icon: FaCode },
        { path: '/projects', name: 'AI/ML Projects', icon: FaCode },
        { path: '/projects', name: 'UI/UX Design', icon: FaCode }
      ]
    },
    { 
      path: '/experience', 
      name: 'Experience',
      icon: FaBriefcase
    },
    { 
      path: '/hackathons', 
      name: 'Hackathons',
      icon: FaTrophy
    },
    { 
      path: '/certificates', 
      name: 'Certificates',
      icon: FaCertificate
    },
    { 
      path: '/contact', 
      name: 'Contact',
      icon: FaPhone
    }
  ];

  // Social links
  const socialLinks = [
    { href: 'https://github.com/Rohan1786', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/rohan-pawar-59621525a/', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'mailto:vinkirohan02@gmail.com', icon: FaEnvelope, label: 'Email' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
        if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Animation variants
  const containerVariants = {
    hidden: { 
      y: -100, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 25,
        when: "beforeChildren",
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: -25, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.08
      }
    }
  };

  const mobileItemVariants = {
    closed: { 
      x: -20, 
      opacity: 0 
    },
    open: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Check if link is active
  const isActiveLink = (link) => {
    if (link.path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(link.path);
  };

  return (
    <motion.nav 
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'py-4 bg-transparent'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              aria-label="Homepage"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Rohan Pawar
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <motion.div
                  key={link.path}
                  variants={itemVariants}
                  className="relative"
                  onHoverStart={() => setActiveDropdown(link.path)}
                  onHoverEnd={() => setActiveDropdown(null)}
                >
                  {link.submenu ? (
                    <>
                      <button
                        className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                          isActiveLink(link)
                            ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                        aria-expanded={activeDropdown === link.path}
                      >
                        <IconComponent className="w-4 h-4 mr-2" />
                        {link.name}
                        <motion.div
                          animate={{ rotate: activeDropdown === link.path ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaChevronDown className="w-3 h-3 ml-1" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.path && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                          >
                            {link.submenu.map((subItem) => {
                              const SubIcon = subItem.icon;
                              return (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <SubIcon className="w-4 h-4 mr-3" />
                                  {subItem.name}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActiveLink(link)
                          ? 'text-cyan-600 dark:text-cyan-400'
                          : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              );
            })}
            
            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-1 ml-2"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
            
            {/* Theme Toggle */}
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'dark' ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile menu button - Visible only on mobile */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-1">
              {socialLinks.slice(0, 2).map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors"
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <FaTimes className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <FaBars className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            ref={mobileMenuRef}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.path}
                    variants={mobileItemVariants}
                  >
                    {link.submenu ? (
                      <div className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.path ? null : link.path)}
                          className={`flex items-center justify-between w-full px-4 py-3 text-left font-medium rounded-lg transition-colors ${
                            isActiveLink(link)
                              ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <div className="flex items-center">
                            <IconComponent className="w-4 h-4 mr-3" />
                            {link.name}
                          </div>
                          <motion.div
                            animate={{ rotate: activeDropdown === link.path ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === link.path && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              className="ml-6 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
                            >
                              {link.submenu.map((subItem) => {
                                const SubIcon = subItem.icon;
                                return (
                                  <Link
                                    key={subItem.path}
                                    to={subItem.path}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors border-t border-gray-100 dark:border-gray-700 first:border-t-0"
                                  >
                                    <SubIcon className="w-4 h-4 mr-3" />
                                    {subItem.name}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-3 font-medium rounded-lg transition-colors ${
                          isActiveLink(link)
                            ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 mr-3" />
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
              
              {/* Mobile Theme Toggle */}
              <motion.div
                variants={mobileItemVariants}
                className="pt-2 border-t border-gray-100 dark:border-gray-800"
              >
                <button
                  onClick={toggleTheme}
                  className="flex items-center w-full px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {theme === 'dark' ? (
                    <>
                      <FaSun className="w-5 h-5 mr-3 text-yellow-500" />
                      Switch to Light Mode
                    </>
                  ) : (
                    <>
                      <FaMoon className="w-5 h-5 mr-3 text-indigo-500" />
                      Switch to Dark Mode
                    </>
                  )}
                </button>
              </motion.div>

              {/* Mobile Social Links Full */}
              <motion.div
                variants={mobileItemVariants}
                className="flex justify-center space-x-4 pt-3 pb-2 border-t border-gray-100 dark:border-gray-800"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    aria-label={social.label}
                    onClick={() => setIsOpen(false)}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;