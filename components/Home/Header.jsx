
export default function Header() {

    return (
        <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>



                    <main className="mt-12 md:mt-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="tracking-tight font-extrabold text-gray-500">
                                <span className="block mb-2 text-xl sm:text-2xl">আসসালামু আলাইকুম !</span>
                                <span className="block text-xl sm:text-3xl text-primary xl:inline">দারুল ইসলাম ফাউন্ডেশনে আপনাকে স্বাগত</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                দারুল ইসলাম একটি অলাভজনক অরগানাইজেশন যার মূল লক্ষ্য হলো পবিত্র কুরআন ও সহীহ হাদীসের আলোকে ইসলামের আলো চারিদিকে ছড়িয়ে দেয়া। বিভিন্ন প্রজেক্ট বাস্তবায়ন করার মাধ্যমে দারুল ইসলাম তার লক্ষ্য ও উদ্দেশ্যে এগিয়ে যাচ্ছে।
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow-md">
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary md:py-4 md:text-lg md:px-10"
                                    >
                                        প্রজেক্টসমূহ
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondary primary-superlite-bg hover:bg-primary hover:text-white md:py-4 md:text-lg md:px-10"
                                    >
                                        আরো জানুন
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="w-full object-cover lg:w-full lg:h-full"
                    src='https://www.darulislam.foundation/images/darulislamBanner.jpg'
                    alt="home banner"
                />
            </div>
        </div>
    )
}
