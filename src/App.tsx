import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import ChatWidget from './components/ChatWidget'

function App() {
    return (
        <div className="min-h-screen w-full bg-white">
            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ContactForm />
            <ChatWidget />
        </div>
    )
}

export default App 