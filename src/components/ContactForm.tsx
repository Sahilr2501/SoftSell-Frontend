import React, { useState } from 'react'

const LICENSE_TYPES = [
    'Enterprise Software',
    'Cloud Services',
    'Development Tools',
    'Security Software',
    'Database Licenses',
    'Other'
]

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
    })

    const validateForm = () => {
        let isValid = true
        const newErrors = {
            name: '',
            email: '',
            company: '',
            licenseType: '',
            message: ''
        }

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
            isValid = false
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
            isValid = false
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format'
            isValid = false
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company is required'
            isValid = false
        }

        if (!formData.licenseType) {
            newErrors.licenseType = 'Please select a license type'
            isValid = false
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formData)
            alert('Thank you for your interest! We will contact you shortly.')
            setFormData({
                name: '',
                email: '',
                company: '',
                licenseType: '',
                message: ''
            })
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div id="contact" className="bg-primary/5 py-24 sm:py-32">
            <div className="mx-auto w-full px-6 lg:px-8">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Get Started Today
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Fill out the form below and we'll get back to you within 24 hours
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-primary/10 text-gray-900 shadow-sm ring-1 ring-inset ring-primary/30 placeholder:text-primary/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-primary/10 text-gray-900 shadow-sm ring-1 ring-inset ring-primary/30 placeholder:text-primary/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                Company
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-primary/10 text-gray-900 shadow-sm ring-1 ring-inset ring-primary/30 placeholder:text-primary/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                                {errors.company && <p className="mt-2 text-sm text-red-600">{errors.company}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="licenseType" className="block text-sm font-semibold leading-6 text-gray-900">
                                License Type
                            </label>
                            <div className="mt-2.5">
                                <select
                                    name="licenseType"
                                    id="licenseType"
                                    value={formData.licenseType}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-primary/10 text-gray-900 shadow-sm ring-1 ring-inset ring-primary/30 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                >
                                    <option value="">Select a license type</option>
                                    {LICENSE_TYPES.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {errors.licenseType && <p className="mt-2 text-sm text-red-600">{errors.licenseType}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-primary/10 text-gray-900 shadow-sm ring-1 ring-inset ring-primary/30 placeholder:text-primary/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Get Started
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm 