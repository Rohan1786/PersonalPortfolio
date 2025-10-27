import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const [isClosing, setIsClosing] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const timeoutRef = useRef(null);

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
    { href: 'https://github.com', icon: FaGithub, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'mailto:contact@example.com', icon: FaEnvelope, label: 'Email' }
  ];

  // Enhanced scroll handler with throttle
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    setScrolled(isScrolled);
    
    // Auto-close mobile menu when scrolling significantly
    if (isScrolled && isOpen && window.scrollY > 100) {
      closeMobileMenu();
    }
  }, [isOpen]);

  // Close mobile menu with animation
  const closeMobileMenu = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setActiveDropdown(null);
    }, 300);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) {
      closeMobileMenu();
    }
  }, [location, closeMobileMenu, isOpen]);

  // Enhanced scroll effect with cleanup
  useEffect(() => {
    const throttledScroll = () => {
      if (timeoutRef.current) return;
      timeoutRef.current = setTimeout(() => {
        handleScroll();
        timeoutRef.current = null;
      }, 10);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Enhanced click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
        if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
          closeMobileMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, closeMobileMenu]);

  // Keyboard navigation handler
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        if (isOpen) {
          closeMobileMenu();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeMobileMenu]);

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
      height: 0,
      scale: 0.95,
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.08
      }
    }
  };

  const mobileItemVariants = {
    closed: { 
      x: -25, 
      opacity: 0,
      scale: 0.9
    },
    open: { 
      x: 0, 
      opacity: 1,
      scale: 1,
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
      y: -15,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut",
        staggerChildren: 0.05
      }
    }
  };

  const dropdownItemVariants = {
    closed: { x: -10, opacity: 0 },
    open: { x: 0, opacity: 1 }
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/60 dark:border-gray-700/60' 
          : 'py-4 bg-transparent'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 500, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              aria-label="Homepage"
            >
              <div className="relative">
                <motion.div
                  className="w-3 h-3 bg-cyan-500 rounded-full group-hover:bg-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 w-3 h-3 bg-cyan-500 rounded-full opacity-50"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                Rohan Pawar
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
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
                        className={`flex items-center px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group ${
                          isActiveLink(link)
                            ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 shadow-sm'
                            : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800/80'
                        }`}
                        aria-expanded={activeDropdown === link.path}
                        aria-haspopup="true"
                      >
                        <IconComponent className="w-4 h-4 mr-2 flex-shrink-0" />
                        {link.name}
                        <motion.div
                          animate={{ rotate: activeDropdown === link.path ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <FaChevronDown className="w-3 h-3 ml-2 transition-transform group-hover:translate-y-0.5" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.path && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="absolute top-full left-0 mt-3 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-xl"
                            role="menu"
                          >
                            {link.submenu.map((subItem) => {
                              const SubIcon = subItem.icon;
                              return (
                                <motion.div
                                  key={subItem.path}
                                  variants={dropdownItemVariants}
                                >
                                  <Link
                                    to={subItem.path}
                                    className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 border-b border-gray-100 dark:border-gray-700 last:border-b-0 group"
                                    role="menuitem"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <SubIcon className="w-4 h-4 mr-3 text-cyan-500 group-hover:scale-110 transition-transform" />
                                    {subItem.name}
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative flex items-center px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group ${
                        isActiveLink(link)
                          ? 'text-cyan-600 dark:text-cyan-400'
                          : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800/80'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2 flex-shrink-0" />
                      {link.name}
                      {isActiveLink(link) && (
                        <motion.div
                          className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-cyan-500 rounded-full"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                      )}
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
                  className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
            
            {/* Enhanced Theme Toggle */}
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -180, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  {theme === 'dark' ? (
                    <FaSun className="w-5 h-5" />
                  ) : (
                    <FaMoon className="w-5 h-5" />
                  )}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="lg:hidden flex items-center space-x-2"
            variants={itemVariants}
          >
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-1 mr-2">
              {socialLinks.slice(0, 2).map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 rounded-lg transition-colors"
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={() => isOpen ? closeMobileMenu() : setIsOpen(true)}
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {(isOpen || isClosing) && (
          <motion.div 
            ref={mobileMenuRef}
            variants={mobileMenuVariants}
            initial="closed"
            animate={isClosing ? "closed" : "open"}
            exit="closed"
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl rounded-3xl mx-4 mt-2 overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
            style={{ originY: 0 }}
          >
            <div className="py-4">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.path}
                    variants={mobileItemVariants}
                    className="border-b border-gray-100/50 dark:border-gray-700/50 last:border-b-0"
                  >
                    {link.submenu ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.path ? null : link.path)}
                          className={`flex items-center justify-between w-full px-6 py-4 text-left font-semibold transition-all duration-300 ${
                            isActiveLink(link)
                              ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80'
                          }`}
                          aria-expanded={activeDropdown === link.path}
                        >
                          <div className="flex items-center">
                            <IconComponent className="w-4 h-4 mr-3 flex-shrink-0" />
                            {link.name}
                          </div>
                          <motion.div
                            animate={{ rotate: activeDropdown === link.path ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaChevronDown className="w-4 h-4 text-gray-400" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === link.path && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-gray-50/50 dark:bg-gray-800/50 overflow-hidden"
                            >
                              {link.submenu.map((subItem) => {
                                const SubIcon = subItem.icon;
                                return (
                                  <Link
                                    key={subItem.path}
                                    to={subItem.path}
                                    onClick={closeMobileMenu}
                                    className="flex items-center px-10 py-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 border-t border-gray-100 dark:border-gray-700"
                                  >
                                    <SubIcon className="w-3.5 h-3.5 mr-3 text-cyan-500" />
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
                        onClick={closeMobileMenu}
                        className={`flex items-center px-6 py-4 font-semibold transition-all duration-300 ${
                          isActiveLink(link)
                            ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 mr-3 flex-shrink-0" />
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
              
              {/* Mobile Theme Toggle */}
              <motion.div
                variants={mobileItemVariants}
                className="px-6 py-4 border-t border-gray-100/50 dark:border-gray-700/50"
              >
                <button
                  onClick={toggleTheme}
                  className="flex items-center w-full text-left font-semibold text-gray-700 dark:text-gray-300 py-2 transition-colors"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;