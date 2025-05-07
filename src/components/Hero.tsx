import { motion } from 'framer-motion'
import { ArrowRightIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'

const Hero = () => {
    return (
        <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-[80vh] w-[80vh] -translate-x-1/2 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl opacity-30 dark:opacity-20" />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-6 pt-8 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2"
                >
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        SS
                    </div>
                    <span className="ml-2 text-xl font-bold text-primary dark:text-white">SoftSell</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4"
                >
                    <a href="#features" className="hidden sm:inline text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
                        Features
                    </a>
                    <a href="#how-it-works" className="hidden sm:inline text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
                        How It Works
                    </a>
                    <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
                        Contact
                    </a>
                    {/* Dark mode toggle would go here */}
                    <div id="dark-mode-toggle-placeholder" className="ml-2"></div>
                </motion.div>
            </div>

            {/* Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-auto w-full px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32 relative z-10"
            >
                <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            <span className="inline-block">Transform Your</span>{' '}
                            <motion.span
                                className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Software Licenses
                            </motion.span>{' '}
                            <span className="inline-block">into Instant Revenue</span>
                        </h1>

                        <motion.p
                            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            SoftSell helps businesses monetize unused software licenses quickly and securely. Get instant valuations and turn your idle assets into cash flow.
                        </motion.p>

                        <motion.div
                            className="mt-10 flex items-center gap-x-6 flex-wrap gap-y-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <a
                                href="#contact"
                                className="group relative rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Sell My Licenses
                                    <ArrowRightIcon className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </a>

                            <a
                                href="#how-it-works"
                                className="group text-sm font-semibold leading-6 text-gray-900 dark:text-white flex items-center"
                            >
                                Learn more
                                <ArrowLongRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Graphic */}
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                    <motion.div
                        className="relative h-80 w-80 mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {/* Floating cards with depth */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-30 rounded-xl"
                            animate={{
                                rotate: [0, 3, -2, 0],
                                y: [0, -5, 5, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        <motion.div
                            className="absolute inset-0 bg-white/90 dark:bg-gray-800 rounded-xl transform rotate-6 shadow-lg"
                            animate={{
                                rotate: [6, 9, 3, 6],
                                y: [0, -8, 8, 0]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />

                        <motion.div
                            className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl transform -rotate-3 shadow-xl flex items-center justify-center"
                            animate={{
                                rotate: [-3, -6, 0, -3],
                                y: [0, -10, 10, 0]
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                        >
                            {/* Animated logo inside card */}
                            <motion.div
                                className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-white font-bold text-4xl shadow-lg"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                SS
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero