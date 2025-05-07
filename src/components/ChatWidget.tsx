import React, { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, ChatBubbleLeftRightIcon, XMarkIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const EXAMPLES = [
    'How do I sell my license?',
    'How long does payment take?',
    'Is my data secure?',
    'What types of licenses do you accept?'
];

const MOCK_RESPONSES: Record<string, string> = {
    'how do i sell my license?':
        'Selling your license is easy! Just click "Sell My Licenses" in our navigation or contact form. You\'ll need to provide some basic information about your license, and our team will guide you through the verification and valuation process.',
    'how long does payment take?':
        'Once you accept our offer, payment is typically processed within 24 hours. We offer multiple payment methods including bank transfer, PayPal, and wire transfer for your convenience.',
    'is my data secure?':
        'Absolutely! We use bank-level 256-bit encryption for all data transfers and store your information securely. Our platform is PCI DSS compliant and undergoes regular security audits.',
    'what types of licenses do you accept?':
        'We accept most major software licenses including enterprise solutions, cloud services, development tools, and security software. If you\'re unsure about your specific license, feel free to ask!',
    'default':
        "I'm sorry, I don't have an answer for that yet. Our customer support team would be happy to help - you can reach them at support@softsell.com or through our contact form."
};

function getMockLLMResponse(input: string) {
    const key = input.trim().toLowerCase();
    return MOCK_RESPONSES[key] || MOCK_RESPONSES['default'];
}

const ChatWidget = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            sender: 'bot',
            text: "Hi there! 👋 I'm SoftSell's AI assistant. How can I help you today?",
            timestamp: new Date()
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const sendMessage = (text: string) => {
        if (!text.trim()) return;

        const userMessage = {
            sender: 'user',
            text,
            timestamp: new Date()
        };
        setMessages(msgs => [...msgs, userMessage]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const botMessage = {
                sender: 'bot',
                text: getMockLLMResponse(text),
                timestamp: new Date()
            };
            setMessages(msgs => [...msgs, botMessage]);
            setIsTyping(false);
        }, 800 + Math.random() * 800); // Simulate variable response time
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <>
            {/* Floating Chat Button */}
            <AnimatePresence>
                {!open && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-xl hover:shadow-2xl focus:outline-none"
                        onClick={() => setOpen(true)}
                        aria-label="Open chat"
                    >
                        <ChatBubbleLeftRightIcon className="h-7 w-7" />
                        <motion.span
                            className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-xs"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            {messages.length}
                        </motion.span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary to-secondary">
                            <div className="flex items-center gap-2">
                                <ChatBubbleLeftRightIcon className="h-5 w-5 text-white" />
                                <span className="font-semibold text-white">SoftSell Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        setMessages([{
                                            sender: 'bot',
                                            text: "Hi there! 👋 I'm SoftSell's AI assistant. How can I help you today?",
                                            timestamp: new Date()
                                        }]);
                                    }}
                                    className="p-1 text-white/80 hover:text-white"
                                    aria-label="Reset chat"
                                >
                                    <ArrowPathIcon className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-1 text-white/80 hover:text-white"
                                    aria-label="Close chat"
                                >
                                    <XMarkIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div
                            className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50 dark:bg-gray-800"
                            style={{ minHeight: '300px', maxHeight: '60vh' }}
                        >
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className="max-w-[85%]">
                                        <div
                                            className={`rounded-xl px-4 py-3 text-sm ${msg.sender === 'user'
                                                ? 'bg-gradient-to-br from-primary to-secondary text-white rounded-br-none'
                                                : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-bl-none'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                        <div className={`text-xs mt-1 opacity-60 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                            {formatTime(msg.timestamp)}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white dark:bg-gray-700 rounded-xl rounded-bl-none px-4 py-3 text-sm border border-gray-200 dark:border-gray-600">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                            <form onSubmit={handleSubmit} className="mb-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 pr-12 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Type your message..."
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        autoFocus
                                        aria-label="Type your message"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim()}
                                        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full ${input.trim() ? 'bg-primary text-white' : 'text-gray-400'}`}
                                        aria-label="Send message"
                                    >
                                        <PaperAirplaneIcon className="h-5 w-5" />
                                    </button>
                                </div>
                            </form>

                            <div className="flex flex-wrap gap-2">
                                {EXAMPLES.map((ex) => (
                                    <motion.button
                                        key={ex}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full px-3 py-1.5 text-xs hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition"
                                        onClick={() => sendMessage(ex)}
                                        type="button"
                                    >
                                        {ex}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;