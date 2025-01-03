import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlobalStyle />

      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="text-2xl font-bold text-gray-900">
              Lyudommuny
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
              <div className="flex items-center space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-gray-900">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="flex flex-col space-y-4 px-2 pt-2 pb-3">
                <a href="#about" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>About</a>
                <a href="#skills" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Skills</a>
                <a href="#projects" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Contact</a>
                <div className="flex space-x-4 py-2">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-gray-900">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
