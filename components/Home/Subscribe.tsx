
export default function Subscribe() {
    return <section className="w-full py-4 mt-20 bg-indigo-600">
        <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 my-4 lg:grid-cols-3">
                <div className="flex flex-row text-center justify-center text-white my-auto ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white my-auto mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    <h1 className="font-bold text-3xl">Be connected with Us!</h1>
                </div>
                <div className="text-center text-white my-auto">
                    <h2 className="text-xl">Subscribe our newsletter</h2>
                </div>
                <div className="py-2 mx-4 lg:py-10">
                    <div>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="email"
                                name="email"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="enter your email"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <button className="py-1 flex pr-2 font-bold text-indigo-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white my-auto mr-2" fill="none" viewBox="0 0 24 24" stroke="#4F46E5">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
