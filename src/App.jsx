import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import LoadingScreen from './components/common/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Hackathons from './pages/Hackathons';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';  
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route 
                    path="/" 
                    element={
                      <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                      >
                        <Home />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/about" 
                    element={
                      <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                      >
                        <About />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/projects" 
                    element={
                      <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                      >
                        <Projects />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/certificates" 
                    element={
                      <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                      >
                        <Certificates />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/hackathons" 
                    element={
                      <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                      >
                        <Hackathons />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/experience" 
                    element={
                      <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                      >
                        <Experience />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/contact" 
                    element={
                      <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                      >
                        <Contact />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="*" 
                    element={
                      <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                      >
                        <NotFound />
                      </motion.div>
                    } 
                  />
                </Routes>
              </AnimatePresence>
            </main>

            <Footer />
          </div>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;