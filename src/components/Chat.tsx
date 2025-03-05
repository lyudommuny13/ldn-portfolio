import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null); // State to track errors

  // Expanded auto-reply logic for a more realistic chat assistant
  const handleAutoReply = (userMessage: string) => {
    let botResponse = '';
    const lowerMessage = userMessage.toLowerCase().trim();

    // Greetings and politeness
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      botResponse = 'Hello! How can I assist you today?';
    } else if (lowerMessage.includes('good morning') || lowerMessage.includes('good afternoon')) {
      botResponse = `Good ${lowerMessage.includes('morning') ? 'morning' : 'afternoon'}! How can I help you?`;
    } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('see you')) {
      botResponse = 'Goodbye! If you have more questions, feel free to chat again anytime.';

    // Help and assistance
    } else if (lowerMessage.includes('help') || lowerMessage.includes('assist') || lowerMessage.includes('support')) {
      botResponse = 'I’m here to help! What specific issue or question do you need assistance with?';
    } else if (lowerMessage.includes('problem') || lowerMessage.includes('issue')) {
      botResponse = 'I’m sorry to hear you’re having an issue. Can you describe it in more detail so I can assist?';

    // General inquiries
    } else if (lowerMessage.includes('who are you') || lowerMessage.includes('what are you')) {
      botResponse = 'I’m a friendly chat assistant here to help you with any questions or tasks. What would you like to know?';
    } else if (lowerMessage.includes('time') || lowerMessage.includes('date')) {
      const now = new Date();
      botResponse = `The current date and time is ${now.toLocaleString()}. How can I assist you further?`;
    } else if (lowerMessage.includes('weather')) {
      botResponse = 'I’d love to check the weather for you, but I’d need to know your location. Could you share it?';

    // Technical or product-related queries
    } else if (lowerMessage.includes('product') || lowerMessage.includes('service')) {
      botResponse = 'Could you specify which product or service you’re inquiring about? I’ll provide more details!';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      botResponse = 'Prices vary depending on the product or service. Could you specify what you’re interested in?';

    // Feedback and politeness
    } else if (lowerMessage.includes('thank you') || lowerMessage.includes('thanks')) {
      botResponse = 'You’re welcome! If you have more questions, feel free to ask.';
    } else if (lowerMessage.includes('sorry') || lowerMessage.includes('apologize')) {
      botResponse = 'No need to apologize! I’m here to help. What can I do for you?';

    // Default response for unrecognized input
    } else {
      botResponse = 'Interesting! I’m not sure I understand. Could you rephrase or ask something specific? If you need help, feel free to describe your request.';
    }

    return botResponse;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: input }]);
    setError(null); // Clear any previous errors

    // Simulate bot response with a small delay
    setTimeout(() => {
      const botReply = handleAutoReply(input);
      setMessages((prev) => [...prev, { role: 'bot', content: botReply }]);
    }, 500);

    setInput(''); // Clear input field
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Clear messages and error when the chat window is closed or reopened
  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setError(null);
    }
  }, [isOpen]);

  return (
    <ChatContainer>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
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
                <h2 className="text-lg font-semibold">Chat</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    aria-label="Toggle dark mode"
                    className={`p-2 rounded-full ${
                      isDarkMode ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    {isDarkMode ? '☀️' : '🌙'}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close chat"
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
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
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

              {/* Message Input and Error Display */}
              <div className="p-4 border-t border-gray-700">
                {error && (
                  <p className="text-red-500 text-sm mb-2">
                    Error: {error}
                  </p>
                )}
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                    className={`flex-1 p-2 rounded-lg ${
                      isDarkMode 
                        ? 'bg-gray-800 text-white placeholder-gray-400' 
                        : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
                      !input.trim() 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-blue-600'
                    }`}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ChatContainer>
  );
}