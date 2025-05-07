import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className="relative bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-6 pt-8 lg:px-8">
                {/* Logo Placeholder */}
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">SS</div>
                    <span className="ml-2 text-xl font-bold text-primary dark:text-white">SoftSell</span>
                </div>
                {/* Dark mode toggle will go here */}
                <div id="dark-mode-toggle-placeholder"></div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-auto w-full px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32"
            >
                <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                    <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        Transform Your Software Licenses into Instant Revenue
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        SoftSell helps businesses monetize unused software licenses quickly and securely. Get instant valuations and turn your idle assets into cash flow.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="#contact"
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Sell My Licenses
                            <ArrowRightIcon className="ml-2 -mr-0.5 h-4 w-4 inline-block" />
                        </a>
                        <a href="#how-it-works" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                    <div className="relative h-80 w-80 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-30 rounded-xl"></div>
                        <div className="absolute inset-0 bg-white/90 dark:bg-gray-800 rounded-xl transform rotate-6"></div>
                        <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl transform -rotate-3 shadow-xl"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero 