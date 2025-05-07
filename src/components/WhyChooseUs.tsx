import React from 'react'
import { ShieldCheckIcon, BanknotesIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Secure Transactions',
        description: 'Bank-level security protocols and encrypted data transfer for all license transactions.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Best Market Value',
        description: 'Get the highest market value for your licenses with our competitive pricing model.',
        icon: BanknotesIcon,
    },
    {
        name: 'Fast Processing',
        description: 'Complete transactions within 24 hours with instant valuations and quick payments.',
        icon: ClockIcon,
    },
    {
        name: 'Expert Support',
        description: 'Dedicated team of licensing experts to guide you through the process.',
        icon: UserGroupIcon,
    },
]

const WhyChooseUs = () => {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto w-full px-6 lg:px-8">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why Choose SoftSell?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We provide the most secure and efficient way to monetize your software licenses
                    </p>
                </div>
                <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs 