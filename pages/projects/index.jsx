import Head from "next/head";
import Link from "next/link";

export default function Projects() {

  return <>

    <Head>
      <title>প্রজেক্টসমূহ | দারুল ইসলাম ফাউন্ডেশন</title>
    </Head>

    <h1 className="primary-dark-bg text-center text-3xl sm:text-5xl text-white font-bold py-10">Projects</h1>
    <div className="container border-x-8 border-b-8 rounded-b-md py-8" style={{ borderColor: '#7c4f1d' }}>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 shadow-lg rounded-t-xl hover:bg-slate-200" style={{overflow: 'hidden'}}>
          <Link href='/projects/book-giveway-ramadan'>
            <a>
              <img src="/projects/images/book_banner.jpg" alt="project thumbnail" />
              <div className="p-4">
                <h1 className="text-center pt-4 text-3xl">বই বিতরণ কর্মসূচী</h1> <hr className="mb-4" />
                <p className="text-lg">
                  তিনটি মূল্যবান বই নিয়ে এই রমাদানে এলো এক বিশাল বই বিতরণ প্রজেক্ট।
                </p>
              </div>
            </a></Link>
        </div>
      </div>
    </div>
  </>
}
