
export default function Contact() {
    return (

        <div className="my-20">
            <div className="mb-10 px-5 md:text-center">
                <h2 className="text-base text-gray-700 font-semibold tracking-wide uppercase">যোগাযোগ করুন</h2>
                <p className="mt-2 primary text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                    জানাতে পারেন যেকোনো প্রশ্ন অথবা উপদেশ
                </p>
            </div>
            <div className="mt-10 sm:mt-0 md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">আপনার মেসেজটি পাঠান</h3>
                        <p className="mt-1 text-sm text-gray-600">আপনার যেকোনো উপদেশ কিংবা অভিযোগ সবসময়ই মূল্যবান আমাদের কাছে</p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow-md overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                        Country / Region
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    >
                                        <option>Bangladesh</option>
                                        <option>Saudi Arabia</option>
                                        <option>Dubai</option>
                                        <option>Oman</option>
                                        <option>Quet</option>
                                        <option>India</option>
                                        <option>Pakistan</option>
                                    </select>
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                        Your Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        name="your-message"
                                        id="your-message"
                                        autoComplete="your-message"
                                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white primary-bg hover:primary-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
