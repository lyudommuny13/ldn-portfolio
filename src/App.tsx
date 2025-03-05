import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import PageProgress from './components/PageProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chat from './components/Chat';
import Gallery from './components/gallery';

// Add theme object
const theme = {
  // Add your theme properties here
  colors: {
    primary: '#000',
    secondary: '#fff'
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <>
            <PageProgress />
            <CustomCursor />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Gallery />
            <Companies />
            <Contact />
            <Footer />
            <ScrollToTop />
            <Chat />
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
  
}

export default App;