import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
    {
        content: "SoftSell made it incredibly easy to monetize our unused enterprise licenses. The valuation was fair and the payment was processed quickly. Highly recommended!",
        author: "Sarah Chen",
        role: "IT Director",
        company: "TechCorp Solutions",
        rating: 5,
        avatar: "SC" // Initials for avatar placeholder
    },
    {
        content: "We were skeptical at first, but SoftSell's professional approach and secure platform convinced us. We've now used their service multiple times for our excess licenses.",
        author: "Michael Rodriguez",
        role: "Operations Manager",
        company: "DataFlow Systems",
        rating: 4,
        avatar: "MR"
    },
    {
        content: "The fastest way to turn unused software into cash. Their customer support team was exceptional throughout the entire process. Will definitely use again!",
        author: "Priya Patel",
        role: "CFO",
        company: "CloudNova Inc.",
        rating: 5,
        avatar: "PP"
    }
]

const Testimonials = () => {
    return (
        <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 relative overflow-hidden">
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
                        Trusted by Companies Worldwide
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        See what our customers say about their experience with SoftSell
                    </p>
                </motion.div>

                <motion.div
                    className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                            className="group"
                        >
                            <div className="h-full rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-900/10 dark:ring-gray-700/50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                                {/* Rating */}
                                <div className="flex justify-center mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                                        />
                                    ))}
                                </div>

                                <blockquote className="text-gray-900 dark:text-gray-100">
                                    <p className="text-lg leading-7 italic before:content-[&quot;\&quot;] after:content-[&quot;\&quot;]">
                                        {testimonial.content}
                                    </p>
                                </blockquote>

                                <div className="mt-8 flex items-center">
                                    {/* Avatar placeholder */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg mr-4">
                                        {testimonial.avatar}
                                    </div>

                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                                        <div className="mt-1 text-gray-600 dark:text-gray-400 text-sm">
                                            {testimonial.role}, {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};

export default Testimonials;