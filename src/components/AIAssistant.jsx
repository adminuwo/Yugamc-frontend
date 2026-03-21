import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, X, Send, MessageSquare } from 'lucide-react';
import { useLenis } from 'lenis/react';
import yugLogo from '../assets/yug logo.webp';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'model', parts: [{ text: 'Hello! I am your YUG AMC luxury concierge. How can I assist you with your property investment journey today?' }] }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const lenis = useLenis();

  // Scroll Lock
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = 'auto';
      if (lenis) lenis.start();
    }
  }, [isOpen, lenis]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = { role: 'user', parts: [{ text: message }] };
    setChatHistory(prev => [...prev, userMessage]);
    const currentInput = message;
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: currentInput,
          history: chatHistory.length > 1 ? chatHistory : [] 
        })
      });

      const data = await response.json();
      if (response.ok && data.response) {
        setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: data.response }] }]);
      } else {
        const errorMsg = data.details || data.error || 'Unknown error';
        setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: `Error: ${errorMsg}` }] }]);
      }
    } catch (err) {
      setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: "Error: Could not connect to the backend server." }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestion = (q) => {
    setMessage(q);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-[100px] right-6 z-[9999] group">
        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-text font-sans text-[11px] tracking-wider uppercase whitespace-nowrap shadow-xl border border-secondary rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Chat with YUG AMC Assistant
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleOpen}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: [0, -8, 0] 
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            },
            scale: { duration: 0.5 },
            opacity: { duration: 0.5 }
          }}
          whileHover={{ scale: 1.1, backgroundColor: "#F9F9F9" }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 md:w-16 md:h-16 bg-white border border-[#EDEDED] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-colors"
        >
          {/* Pulsing Glow Effect */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-accent rounded-full -z-10"
          />

          {/* Rotating Sparkle Decoration */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 p-3"
          >
            <div className="absolute top-1 left-1 opacity-40">
              <Sparkles size={12} className="text-accent" />
            </div>
          </motion.div>

          {isOpen ? (
            <X size={24} className="text-accent" />
          ) : (
            <Sparkles size={28} className="text-accent" />
          )}
        </motion.button>
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleOpen}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[9999]"
            />
            
            <motion.div
            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
            className="fixed top-1/2 left-1/2 w-[calc(100vw-32px)] md:w-[50%] h-[85vh] bg-white z-[10000] shadow-[0_20px_60px_rgba(0,0,0,0.2)] rounded-[2.5rem] overflow-hidden flex flex-col border border-secondary"
          >
            {/* Panel Header */}
            <div className="p-6 bg-primary border-b border-secondary flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link to="/admin/login" onClick={toggleOpen} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-secondary hover:border-accent group transition-all overflow-hidden p-1.5">
                  <img src={yugLogo} alt="YUG AMC" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                </Link>
                <div>
                  <h3 className="font-serif text-text text-lg">YUG AMC Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-text/40 tracking-widest uppercase font-bold">Online Now</span>
                  </div>
                </div>
              </div>
              <button onClick={toggleOpen} className="p-2 hover:bg-secondary rounded-full transition-colors">
                <X size={20} className="text-text/60" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 flex flex-col" data-lenis-prevent="true">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 shrink-0 bg-white rounded-full flex items-center justify-center border border-secondary overflow-hidden ${msg.role === 'user' ? 'bg-accent/10 border-none' : 'p-1'}`}>
                     {msg.role === 'model' ? <img src={yugLogo} alt="YUG" className="w-full h-full object-contain" /> : <MessageSquare size={14} className="text-accent" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed max-w-[85%] font-sans whitespace-pre-wrap ${msg.role === 'user' ? 'bg-accent text-white rounded-tr-none' : 'bg-primary/50 text-text/80 rounded-tl-none'}`}>
                    {msg.role === 'model' ? (
                      <span dangerouslySetInnerHTML={{ __html: msg.parts[0].text }} />
                    ) : (
                      msg.parts[0].text
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 shrink-0 bg-white border border-secondary rounded-full flex items-center justify-center p-1 overflow-hidden">
                     <img src={yugLogo} alt="YUG" className="w-full h-full object-contain" />
                  </div>
                  <div className="bg-primary/50 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col gap-2 mt-auto">
                 <span className="text-[9px] text-text/30 tracking-widest uppercase font-bold pl-1">Suggested Inquiries</span>
                 <div className="flex flex-wrap gap-2">
                    {[
                      "Current Projects",
                      "Book a Site Visit",
                      "Investment Benefits",
                      "Contact Sales"
                    ].map(q => (
                      <button 
                        key={q} 
                        onClick={() => handleSuggestion(q)}
                        className="text-[11px] px-3 py-2 bg-secondary/50 border border-secondary rounded-lg text-text/60 hover:border-accent hover:text-accent transition-all"
                      >
                        {q}
                      </button>
                    ))}
                 </div>
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-6 border-t border-secondary bg-white">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full bg-primary/30 border border-secondary rounded-2xl py-4 pl-6 pr-14 outline-none focus:ring-1 focus:ring-accent transition-all text-sm font-sans"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={isLoading || !message.trim()}
                  className="absolute right-2 p-3 bg-accent text-white rounded-xl shadow-lg shadow-accent/20 hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[9px] text-center text-text/30 mt-4 tracking-widest uppercase">
                Premium Real Estate Assistance • Jabalpur
              </p>
            </form>
          </motion.div>
        </>
      )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
