import React, { useState } from 'react';
import { ArrowPathIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const LICENSE_TYPES = [
    'Enterprise Software',
    'Cloud Services',
    'Development Tools',
    'Security Software',
    'Database Licenses',
    'Other'
];

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        company: false,
        licenseType: false,
        message: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'name':
                return value.trim() ? '' : 'Name is required';
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
                return '';
            case 'company':
                return value.trim() ? '' : 'Company is required';
            case 'licenseType':
                return value ? '' : 'Please select a license type';
            case 'message':
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 20) return 'Message should be at least 20 characters';
                return '';
            default:
                return '';
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, formData[name as keyof typeof formData]) }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (touched[name as keyof typeof touched]) {
            setErrors(prev => ({
                ...prev,
                [name]: validateField(name, value)
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Mark all fields as touched
        setTouched({
            name: true,
            email: true,
            company: true,
            licenseType: true,
            message: true
        });

        // Validate all fields
        const formErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            company: validateField('company', formData.company),
            licenseType: validateField('licenseType', formData.licenseType),
            message: validateField('message', formData.message)
        };

        setErrors(formErrors);

        // Check if form is valid
        if (Object.values(formErrors).some(error => error)) return;

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Form submitted:', formData);
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                company: '',
                licenseType: '',
                message: ''
            });

            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Ready to Monetize Your Licenses?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Get a free valuation and discover how much your unused software licenses are worth.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                    <div className="p-8 sm:p-10">
                        {submitSuccess ? (
                            <div className="text-center py-8">
                                <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
                                <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                                    Thank You!
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">
                                    We've received your inquiry and will contact you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitSuccess(false)}
                                    className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                >
                                    Submit Another Inquiry
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`block w-full rounded-md border-0 py-3 px-4 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm ${errors.name ? 'ring-red-500 pr-10' :
                                                        touched.name && !errors.name ? 'ring-green-500 pr-10' : ''
                                                    }`}
                                                placeholder="John Doe"
                                            />
                                            {touched.name && !errors.name && (
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                                </div>
                                            )}
                                            {errors.name && (
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    <XCircleIcon className="h-5 w-5 text-red-500" />
                                                </div>
                                            )}
                                        </div>
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`block w-full rounded-md border-0 py-3 px-4 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm ${errors.email ? 'ring-red-500 pr-10' :
                                                        touched.email && !errors.email ? 'ring-green-500 pr-10' : ''
                                                    }`}
                                                placeholder="you@company.com"
                                            />
                                            {touched.email && !errors.email && (
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                                </div>
                                            )}
                                            {errors.email && (
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    <XCircleIcon className="h-5 w-5 text-red-500" />
                                                </div>
                                            )}
                                        </div>
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Company <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`block w-full rounded-md border-0 py-3 px-4 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm ${errors.company ? 'ring-red-500 pr-10' :
                                                        touched.company && !errors.company ? 'ring-green-500 pr-10' : ''
                                                    }`}
                                                placeholder="Your Company"
                                            />
                                            {touched.company && !errors.company && (
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                                </div>
                                            )}
                                            {errors.company && (
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    <XCircleIcon className="h-5 w-5 text-red-500" />
                                                </div>
                                            )}
                                        </div>
                                        {errors.company && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.company}
                                            </p>
                                        )}
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            License Type <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="licenseType"
                                                id="licenseType"
                                                value={formData.licenseType}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`block w-full rounded-md border-0 py-3 px-4 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm ${errors.licenseType ? 'ring-red-500 pr-10' :
                                                        touched.licenseType && !errors.licenseType ? 'ring-green-500 pr-10' : ''
                                                    }`}
                                            >
                                                <option value="">Select license type</option>
                                                {LICENSE_TYPES.map(type => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                            {touched.licenseType && !errors.licenseType && (
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                                </div>
                                            )}
                                            {errors.licenseType && (
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    <XCircleIcon className="h-5 w-5 text-red-500" />
                                                </div>
                                            )}
                                        </div>
                                        {errors.licenseType && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.licenseType}
                                            </p>
                                        )}
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Tell Us About Your Licenses <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`block w-full rounded-md border-0 py-3 px-4 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm ${errors.message ? 'ring-red-500' :
                                                        touched.message && !errors.message ? 'ring-green-500' : ''
                                                    }`}
                                                placeholder="Include software names, quantities, and any other relevant details..."
                                            />
                                        </div>
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.message}
                                            </p>
                                        )}
                                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-right">
                                            {formData.message.length}/500 characters
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        We'll never share your information. Read our{' '}
                                        <a href="#" className="font-medium text-primary hover:text-primary-dark">
                                            Privacy Policy
                                        </a>.
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-75 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <ArrowPathIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                                                Processing...
                                            </>
                                        ) : (
                                            'Get Valuation Now'
                                        )}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;