import React from 'react'

const testimonials = [
    {
        content: "SoftSell made it incredibly easy to monetize our unused enterprise licenses. The valuation was fair and the payment was processed quickly. Highly recommended!",
        author: "Sarah Chen",
        role: "IT Director",
        company: "TechCorp Solutions"
    },
    {
        content: "We were skeptical at first, but SoftSell's professional approach and secure platform convinced us. We've now used their service multiple times for our excess licenses.",
        author: "Michael Rodriguez",
        role: "Operations Manager",
        company: "DataFlow Systems"
    }
]

const Testimonials = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto w-full px-6 lg:px-8">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Trusted by Companies Worldwide
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        See what our customers say about their experience with SoftSell
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-center lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.author}
                            className="rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-900/10"
                        >
                            <blockquote className="text-gray-900">
                                <p className="text-lg leading-6">{testimonial.content}</p>
                            </blockquote>
                            <div className="mt-6">
                                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                <div className="mt-1 text-gray-600">
                                    {testimonial.role} • {testimonial.company}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials 