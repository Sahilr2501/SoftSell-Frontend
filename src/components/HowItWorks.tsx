import { motion } from 'framer-motion';
import {
    ClipboardDocumentIcon,
    DocumentCheckIcon,
    CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const steps = [
    {
        name: 'Upload License Details',
        description: 'Securely share your software license information through our encrypted platform. We only need basic details to get started.',
        icon: ClipboardDocumentIcon,
        color: 'from-blue-500 to-blue-600',
    },
    {
        name: 'Receive Instant Valuation',
        description: 'Our AI-powered system analyzes market data to provide a fair, competitive offer in minutes, not days.',
        icon: DocumentCheckIcon,
        color: 'from-green-500 to-green-600',
    },
    {
        name: 'Get Paid Quickly',
        description: 'Accept your offer with one click and receive payment via your preferred method within 24 hours.',
        icon: CurrencyDollarIcon,
        color: 'from-purple-500 to-purple-600',
    },
];

const HowItWorks = () => {
    return (
        <div id="how-it-works" className="bg-white dark:bg-gray-900 py-24 sm:py-32 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
                <div className="absolute left-1/4 top-0 h-[50vh] w-[50vh] rounded-full bg-gradient-to-r from-primary to-secondary blur-3xl" />
                <div className="absolute right-1/4 bottom-0 h-[50vh] w-[50vh] rounded-full bg-gradient-to-l from-primary to-secondary blur-3xl" />
            </div>

            <div className="mx-auto w-full px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Turn your unused software licenses into cash in three simple steps
                    </p>
                </motion.div>

                <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center"
                            >
                                <div className="relative w-full h-full group">
                                    {/* Step connector line (hidden on mobile) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute left-full top-1/2 w-16 h-1 -ml-8 -mt-0.5">
                                            <div className="h-full w-full bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-full">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                                    initial={{ scaleX: 0, originX: 0 }}
                                                    whileInView={{ scaleX: 1 }}
                                                    transition={{ delay: 0.8, duration: 0.8 }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Step number */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-white dark:bg-gray-800 border-2 border-primary flex items-center justify-center z-10">
                                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                                    </div>

                                    {/* Step card */}
                                    <div className="rounded-xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-900/10 dark:ring-gray-700/50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 h-full">
                                        <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                                            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${step.color}`}>
                                                <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div>
                                            {step.name}
                                        </dt>
                                        <dd className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                            {step.description}
                                        </dd>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Animated progress indicator (mobile only) */}
                <motion.div
                    className="lg:hidden mt-12 mx-auto max-w-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                        <div className="absolute -bottom-3 left-0 h-3 w-3 rounded-full bg-primary" />
                        <div className="absolute -bottom-3 left-1/2 h-3 w-3 rounded-full bg-primary" />
                        <div className="absolute -bottom-3 right-0 h-3 w-3 rounded-full bg-primary" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HowItWorks;