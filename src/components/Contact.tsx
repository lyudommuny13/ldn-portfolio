import { Mail, MapPin, Send, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [filledFields, setFilledFields] = useState<{ [key: string]: boolean }>({
    name: false,
    email: false,
    message: false,
  });

  const handleInputChange = (field: string, value: string) => {
    setFilledFields(prev => ({
      ...prev,
      [field]: value.length > 0
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(99, 102, 241) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Get In Touch
            </h2>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative p-8 bg-white rounded-2xl shadow-lg order-2 lg:order-1"
            variants={fadeInUp}
          >
            {/* Animated border gradient */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl -z-10 opacity-20 blur group-hover:opacity-30 transition-opacity" />
            
            <div className="space-y-6">
              {/* Name Input */}
              <motion.div
                className="relative"
                whileTap={{ scale: 0.995 }}
              >
                <motion.label
                  htmlFor="name"
                  className={`absolute left-3 ${
                    focusedField === 'name' || filledFields.name 
                      ? '-top-6 text-sm text-indigo-600' 
                      : 'top-3 text-gray-500'
                  } transition-all duration-200`}
                >
                  Name
                </motion.label>
                <motion.input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full px-3 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:border-indigo-500 focus:ring-0 transition-all duration-200"
                  onFocus={() => setFocusedField('name')}
                  onBlur={(e) => {
                    setFocusedField(null);
                    handleInputChange('name', e.target.value);
                  }}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  whileFocus={{ scale: 1.01 }}
                />
                <Sparkles 
                  className={`absolute right-3 top-3 w-5 h-5 transition-opacity duration-200 ${
                    focusedField === 'name' || filledFields.name 
                      ? 'opacity-100 text-indigo-500' 
                      : 'opacity-0'
                  }`} 
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                className="relative"
                whileTap={{ scale: 0.995 }}
              >
                <motion.label
                  htmlFor="email"
                  className={`absolute left-3 ${
                    focusedField === 'email' || filledFields.email 
                      ? '-top-6 text-sm text-indigo-600' 
                      : 'top-3 text-gray-500'
                  } transition-all duration-200`}
                >
                  Email
                </motion.label>
                <motion.input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full px-3 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:border-indigo-500 focus:ring-0 transition-all duration-200"
                  onFocus={() => setFocusedField('email')}
                  onBlur={(e) => {
                    setFocusedField(null);
                    handleInputChange('email', e.target.value);
                  }}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  whileFocus={{ scale: 1.01 }}
                />
                <Sparkles 
                  className={`absolute right-3 top-3 w-5 h-5 transition-opacity duration-200 ${
                    focusedField === 'email' || filledFields.email 
                      ? 'opacity-100 text-indigo-500' 
                      : 'opacity-0'
                  }`} 
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                className="relative"
                whileTap={{ scale: 0.995 }}
              >
                <motion.label
                  htmlFor="message"
                  className={`absolute left-3 ${
                    focusedField === 'message' || filledFields.message 
                      ? '-top-6 text-sm text-indigo-600' 
                      : 'top-3 text-gray-500'
                  } transition-all duration-200`}
                >
                  Message
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:border-indigo-500 focus:ring-0 transition-all duration-200"
                  onFocus={() => setFocusedField('message')}
                  onBlur={(e) => {
                    setFocusedField(null);
                    handleInputChange('message', e.target.value);
                  }}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  whileFocus={{ scale: 1.01 }}
                />
                <Sparkles 
                  className={`absolute right-3 top-3 w-5 h-5 transition-opacity duration-200 ${
                    focusedField === 'message' || filledFields.message 
                      ? 'opacity-100 text-indigo-500' 
                      : 'opacity-0'
                  }`} 
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200" />
                <div className="relative flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </div>
              </motion.button>
            </div>
          </motion.form>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Let's talk about everything!</h3>
              <p className="text-gray-600">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat.
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200" />
                <div className="relative flex items-center gap-4 p-4 bg-white rounded-xl">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-gray-900 font-medium">okimkhmer@gmail.com</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200" />
                <div className="relative flex items-center gap-4 p-4 bg-white rounded-xl">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-900 font-medium">Phnom Penh, Cambodia</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="relative group mt-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200" />
              <div className="relative p-6 bg-indigo-50 rounded-xl">
                <h4 className="text-lg font-semibold text-indigo-900 mb-2">Office Hours</h4>
                <p className="text-indigo-700">Monday - Friday: 9:00 AM - 6:00 PM (ICT)</p>
                <p className="text-indigo-600 mt-2 text-sm">Response time: Within 24 hours</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}