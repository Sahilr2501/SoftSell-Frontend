import React, { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const EXAMPLES = [
    'How do I sell my license?',
    'How long does payment take?',
    'Is my data secure?',
];

const MOCK_RESPONSES: Record<string, string> = {
    'how do i sell my license?':
        'Just click "Sell My Licenses" and fill out the form. Our team will guide you through the process!',
    'how long does payment take?':
        'Once you accept our offer, payment is processed within 24 hours.',
    'is my data secure?':
        'Absolutely! We use bank-level security and encrypted data transfer for all transactions.',
};

function getMockLLMResponse(input: string) {
    const key = input.trim().toLowerCase();
    return (
        MOCK_RESPONSES[key] ||
        "I'm sorry, I don't have an answer for that yet. Please contact our team for more help!"
    );
}

const ChatWidget = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hi! I'm SoftSell's AI assistant. How can I help you today?" },
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, open]);

    const sendMessage = (text: string) => {
        if (!text.trim()) return;
        setMessages((msgs) => [...msgs, { sender: 'user', text }]);
        setTimeout(() => {
            setMessages((msgs) => [
                ...msgs,
                { sender: 'bot', text: getMockLLMResponse(text) },
            ]);
        }, 600);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
        setInput('');
    };

    return (
        <>
            {/* Floating Chat Button */}
            {!open && (
                <button
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white shadow-lg hover:bg-secondary focus:outline-none"
                    onClick={() => setOpen(true)}
                    aria-label="Open chat"
                >
                    <ChatBubbleLeftRightIcon className="h-7 w-7" />
                </button>
            )}
            {/* Chat Window */}
            {open && (
                <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[90vw] bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2">
                            <ChatBubbleLeftRightIcon className="h-5 w-5 text-primary" />
                            <span className="font-semibold text-gray-900 dark:text-white">SoftSell Chat</span>
                        </div>
                        <button onClick={() => setOpen(false)} aria-label="Close chat">
                            <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-primary" />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50 dark:bg-gray-800" style={{ minHeight: 200, maxHeight: 320 }}>
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`rounded-lg px-3 py-2 text-sm max-w-[80%] ${msg.sender === 'user'
                                        ? 'bg-primary text-white'
                                        : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <input
                                type="text"
                                className="flex-1 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Type your question..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="rounded-md bg-primary p-2 text-white hover:bg-secondary focus:outline-none"
                                aria-label="Send"
                            >
                                <PaperAirplaneIcon className="h-5 w-5" />
                            </button>
                        </form>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {EXAMPLES.map((ex) => (
                                <button
                                    key={ex}
                                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full px-3 py-1 text-xs hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition"
                                    onClick={() => sendMessage(ex)}
                                    type="button"
                                >
                                    {ex}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget; 