import React from 'react'
import { ClipboardDocumentIcon, CurrencyDollarIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'

const steps = [
    {
        name: 'Upload License',
        description: 'Share your software license details through our secure platform.',
        icon: ClipboardDocumentIcon,
    },
    {
        name: 'Get Valuation',
        description: 'Receive an instant market-based valuation for your licenses.',
        icon: DocumentCheckIcon,
    },
    {
        name: 'Get Paid',
        description: 'Accept the offer and receive payment within 24 hours.',
        icon: CurrencyDollarIcon,
    },
]

const HowItWorks = () => {
    return (
        <div id="how-it-works" className="bg-white py-24 sm:py-32">
            <div className="mx-auto w-full px-6 lg:px-8">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How It Works</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Turn your unused software licenses into cash in three simple steps
                    </p>
                </div>
                <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {steps.map((step) => (
                            <div key={step.name} className="flex flex-col items-center">
                                <div className="rounded-lg bg-gray-50 p-6 ring-1 ring-gray-900/10">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                            <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {step.name}
                                    </dt>
                                    <dd className="mt-4 text-base leading-7 text-gray-600">{step.description}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks 