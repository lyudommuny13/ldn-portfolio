import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from 'ai/react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 51;
  transform: translateZ(10px);
  perspective: 1000px;
`;

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    onError: (err) => {
      console.error('Chat error:', err);
    }
  });

  return (
    <ChatContainer>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`w-14 h-14 rounded-full bg-blue-500 text-white shadow-xl hover:bg-blue-600 
        transition-all duration-200 flex items-center justify-center ${isOpen ? 'hidden' : ''}
        hover:transform hover:scale-105`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 w-96 h-[600px] rounded-lg shadow-2xl overflow-hidden"
          >
            <div className={`h-full flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
              {/* Chat Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold">AI Chat</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-full ${
                      isDarkMode ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    {isDarkMode ? '☀️' : '🌙'}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-800 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className={`flex-1 overflow-y-auto p-4 ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] rounded-lg p-3 ${
                      message.role === 'user' 
                        ? isDarkMode 
                          ? 'bg-blue-600' 
                          : 'bg-blue-500 text-white'
                        : isDarkMode 
                          ? 'bg-gray-700' 
                          : 'bg-gray-200'
                    }`}>
                      <p>{message.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder={isLoading ? "AI is thinking..." : "Type a message..."}
                    disabled={isLoading}
                    className={`flex-1 p-2 rounded-lg ${
                      isDarkMode 
                        ? 'bg-gray-800 text-white placeholder-gray-400' 
                        : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                    } ${isLoading ? 'opacity-50' : ''}`}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
                      isLoading || !input.trim() 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-blue-600'
                    }`}
                  >
                    {isLoading ? 'Sending...' : 'Send'}
                  </button>
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-2">
                    Error: {error.message || 'Something went wrong'}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ChatContainer>
  );
} 