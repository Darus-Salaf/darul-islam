
export default function Blog() {
    return (
        <>
            {/* <div className="min-h-screen bg-green-600 flex justify-center items-center py-20"> */}
                <div className="container mx-auto px-12 mt-16 py-20 bg-green-100 rounded-xl">
                    <h1 className="text-4xl text-center text-green-600 uppercase font-bold from-current mb-8">ব্লগ থেকে পড়ুন</h1>

                    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">

                        <div className="bg-white rounded-t-2xl">
                            <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                                <div>
                                    <img className="w-full rounded-t-2xl" src="https://i.ibb.co/Xzgt22R/blog.jpg" />
                                    <div className="px-4 py-2">
                                        <h1 className="text-xl text-gray-600 font-bold">চ্যালেঞ্জসমূহ যা আমরা সম্মূখীন হচ্ছি</h1>
                                        <div className="flex space-x-2 mt-2">
                                        </div>
                                        <p className="text-sm tracking-normal">This is the blog portion of Darus Salaf. After publishing the site totally, you can find the latest blogs, news and work-updates here.</p>
                                        <button className="mt-12 w-full text-center bg-green-600 text-white py-2 rounded-lg">আরো পড়ুন</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-t-2xl">
                            <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                                <div>
                                    <img className="w-full rounded-t-2xl" src="https://i.ibb.co/Xzgt22R/blog.jpg" />
                                    <div className="px-4 py-2">
                                        <h1 className="text-xl text-gray-600 font-bold">ঘুরে আসুন নতুন এই প্রজেক্ট এ</h1>
                                        <div className="flex space-x-2 mt-2">
                                        </div>
                                        <p className="text-sm tracking-normal">This is the blog portion of Darus Salaf. After publishing the site totally, you can find the latest blogs, news and work-updates here.</p>
                                        <button className="mt-12 w-full text-center bg-green-600 text-white py-2 rounded-lg">আরো পড়ুন</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-t-2xl">
                            <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                                <div>
                                    <img className="w-full rounded-t-2xl" src="https://i.ibb.co/Xzgt22R/blog.jpg" />
                                    <div className="px-4 py-2">
                                        <h1 className="text-xl text-gray-600 font-bold">নওমুসলিমদের নিয়ে পরিকল্পনা</h1>
                                        <div className="flex space-x-2 mt-2">
                                        </div>
                                        <p className="text-sm tracking-normal">This is the blog portion of Darus Salaf. After publishing the site totally, you can find the latest blogs, news and work-updates here.</p>
                                        <button className="mt-12 w-full text-center bg-green-600 text-white py-2 rounded-lg">আরো পড়ুন</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}
