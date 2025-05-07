import { motion } from 'framer-motion';
import {
    ShieldCheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserGroupIcon,
    ArrowPathIcon,
    LockClosedIcon,
    ChartBarIcon,
    PhoneArrowUpRightIcon
} from '@heroicons/react/24/outline';

const features = [
    {
        name: 'Secure Transactions',
        description: 'Bank-level security protocols with 256-bit encryption and two-factor authentication for all license transactions. Your data is protected at every step.',
        icon: ShieldCheckIcon,
        color: 'from-blue-500 to-blue-600',
        delay: 0.1
    },
    {
        name: 'Best Market Value',
        description: 'Our AI-powered pricing engine ensures you get the highest market value by analyzing real-time demand across multiple marketplaces.',
        icon: CurrencyDollarIcon,
        color: 'from-green-500 to-green-600',
        delay: 0.2
    },
    {
        name: 'Lightning-Fast Processing',
        description: 'From valuation to payment in under 24 hours. Our automated systems eliminate paperwork and bureaucracy.',
        icon: ClockIcon,
        color: 'from-purple-500 to-purple-600',
        delay: 0.3
    },
    {
        name: 'Dedicated Expert Support',
        description: '24/7 access to our team of licensing specialists who can guide you through complex transactions and bulk sales.',
        icon: UserGroupIcon,
        color: 'from-amber-500 to-amber-600',
        delay: 0.4
    },
    {
        name: 'Money-Back Guarantee',
        description: 'Not satisfied? We offer a 30-day money-back guarantee on all transactions with no questions asked.',
        icon: ArrowPathIcon,
        color: 'from-emerald-500 to-emerald-600',
        delay: 0.5
    },
    {
        name: 'Escrow Protection',
        description: 'All payments are held in secure escrow until you confirm license transfer completion.',
        icon: LockClosedIcon,
        color: 'from-red-500 to-red-600',
        delay: 0.6
    }
]

const WhyChooseUs = () => {
    return (
        <div id="features" className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
                <div className="absolute left-1/4 top-0 h-[50vh] w-[50vh] rounded-full bg-gradient-to-r from-primary to-secondary blur-3xl" />
                <div className="absolute right-1/4 bottom-0 h-[50vh] w-[50vh] rounded-full bg-gradient-to-l from-primary to-secondary blur-3xl" />
            </div>

            <div className="mx-auto w-full px-6 lg:px-8 relative max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Why Choose SoftSell?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        We provide the most secure, efficient, and profitable way to monetize your unused software licenses
                    </p>
                </motion.div>

                <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                    <div className="grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: feature.delay }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="h-full rounded-xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-900/10 dark:ring-gray-700/50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                                    <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                        {feature.description}
                                    </dd>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trust badges */}
                <motion.div
                    className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm">
                        <ShieldCheckIcon className="h-6 w-6 text-green-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">PCI DSS Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm">
                        <LockClosedIcon className="h-6 w-6 text-blue-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">256-bit Encryption</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm">
                        <ChartBarIcon className="h-6 w-6 text-purple-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">5,000+ Transactions</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm">
                        <PhoneArrowUpRightIcon className="h-6 w-6 text-amber-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">24/7 Support</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default WhyChooseUs