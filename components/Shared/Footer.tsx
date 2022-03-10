
export default function Footer() {
    return <footer className="primary-bg pt-10 sm:mt-10 pt-10">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-between">
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                <div className="text-md uppercase text-gray-200 font-medium mb-6">
                    শুরু করুন
                </div>

                <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    আমাদের সম্পর্কে
                </a>
                <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    সাইট ম্যাপ
                </a>
                <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    যোগাযোগ
                </a>
                <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    প্রজেক্টসমূহ
                </a>
                <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    সাহায্য
                </a>
                <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    আগত প্রজেক্টসমূহ
                </a>
            </div>

            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                <div className="text-md uppercase text-gray-200 font-medium mb-6">
                    জরুরী লিংকসমূহ
                </div>

                <a href="https://apnardeenijiggasa.com" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    আপনার দ্বীনি জিজ্ঞাসা
                </a>
                <a href="https://darussalaf.foundation" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    দারুস সালাফ
                </a>
                <a href="https://islamhouse.com/bn" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Islam House
                </a>
                <a href="https://www.hadithbd.com/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Bangla Hadith
                </a>
                <a href="http://ihadis.com/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Al Hadith
                </a>
            </div>

            <div className="p-5 w-1/2 sm:w-auto md:w-3/12">
                <div className="text-md uppercase text-gray-200 font-medium mb-6">
                    সামাজিক
                </div>

                <a href="https://www.facebook.com/darussalaf.foundation/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Facebook Page
                </a>
                <a href="https://github.com/rabius-sunny" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Github
                </a>
                <a href="https://linkedin.com/in/rabius-sunny" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    LinkedIn
                </a>
                <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    YouTube
                </a>
            </div>
        </div>

        <div className="pt-2">
            <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-300 text-sm 
            flex-col md:flex-row max-w-6xl">
                <div className="mt-2">
                    © Copyright 2019-2021. || Darul Islam Foundation. No Right Reserved.
                </div>

                <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                    <a href="#" className="w-6 mx-1">
                        <i className="uil uil-facebook-f"></i>
                    </a>
                    <a href="#" className="w-6 mx-1">
                        <i className="uil uil-twitter-alt"></i>
                    </a>
                    <a href="#" className="w-6 mx-1">
                        <i className="uil uil-youtube"></i>
                    </a>
                    <a href="#" className="w-6 mx-1">
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="#" className="w-6 mx-1">
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
}
