import Head from "next/head"
import { useState, useEffect } from 'react'
import BookDialog from "../../components/projects/BookDialog"

export default function Book_Giveway() {

  const [th, setTh] = useState([])
  const [al, setAl] = useState([])
  const [mn, setMn] = useState([])
  const [get, setGet] = useState(false)

  useEffect(() => {
    fetch('https://darulislam.foundation/datacenter/api/bookgiveway')
      .then(res => res.json())
      .then(data => {
        setTh(data.tawheed)
        setAl(data.albani)
        setMn(data.manhaj)
      })
      .catch(err => console.log(err.message))
  }, [])
  useEffect(() => {
    setGet(localStorage.getItem('get'))
  }, [])

  const books = [
    {
      name: 'আক্বীদাতুত তাওহীদ',
      thumb: '/projects/images/akidatut_tawheed.jpg',
      date: '20/04/22',
      bookid: 1,
      stock: 100,
      length: th.length
    },
    {
      name: 'ফাতাওয়ায়ে আলবানী',
      thumb: '/projects/images/fatawaye_albani.jpg',
      date: '20/04/22',
      bookid: 2,
      stock: 50,
      length: al.length
    },
    {
      name: 'এটা সালাফদের মানহাজ নয়',
      thumb: '/projects/images/eta_salafder_manhaj_noy.jpg',
      date: '20/04/22',
      bookid: 3,
      stock: 50,
      length: mn.length
    }
  ]

  return <div className="container" >

    <Head>
      <title>প্রজেক্টঃ বই বিতরণ | দারুল ইসলাম ফাউন্ডেশন</title>
      <meta property="og:title" content="প্রজেক্টঃ বই বিতরণ | দারুল ইসলাম ফাউন্ডেশন" />
      <meta property="og:description" content="দারুল ইসলাম ফাউন্ডেশন নিয়ে এলো এই রমাদানে বিশাল এক বই বিতরণ কর্মসূচী। মূল্যবান তিনটি বইয়ের যেকোন একটি ফ্রি পেতে এখুনি ভিজিট করুন" />
      <meta property="og:image" content="/projects/images/book_banner.jpg" />
      <meta property="og:url" content="https://darulislam.foundation/projects/book-giveway-ramadan" />
      <meta name="keywords" content="darul islam darul islam salaf-salehin darul-islam foundation preaching quran sahih sunnah preceders" />
    </Head>

    <div className=" mb-4">

      <div className="py-8 mt-8 mb-10 text-center rounded-md shadow-lg">
        <h2 className="text-4xl text-primary font-bold sm:text-6xl">
          ফ্রি বই বিতরণ <sub className="text-sm sub">(শর্ত প্রযোজ্য)</sub>
        </h2>
        <h1 className="text-xl mt-4 sm:text-2xl">বই বিতরণ, জ্ঞান  বিতরণ <sub className="text-sm sub">দারুল ইসলাম ফাউন্ডেশন</sub></h1>
      </div>

      <div>
        <h3 className="text-xl">▌ বিশাল একটি হাদিয়া প্রজেক্ট!</h3>

        <p className="py-4">হাদিয়া বইয়ের সংখ্যা ৩ টি, যথা :</p>
        <ol className="pl-8 list-decimal">
          <li>
            <strong>আক্বীদাতুত তাওহীদ,</strong> লেখক- শায়খ ছলিহ আল ফাওযান হাফিযাহুল্লাহ।
          </li>
          <li><strong>ফাতাওয়ায়ে আলবানী,</strong> ইমাম নাছিরুদ্দীন আলবানী রহিমাহুল্লাহর ফাতাওয়ার সংকলন যাতে ৫০০ টি ফাতাওয়া রয়েছে।</li>
          <li><strong>এটা সালাফগণের মানহাজ নয়,</strong> লেখক- শায়খ মুহাম্মাদ ইবন সালিম বাযমূল হাফিযাহুল্লাহ, ব্যাখ্যা- উস্তায ড. আবূ বকর যাকারিয়া।</li>
        </ol>

        <p className="py-4">
          হাদিয়া নিতে ইচ্ছুক ব্যক্তি উপরোক্ত তিনটি বইয়ের মধ্যে পছন্দমতো যেকোনো একটি বই সিলেক্ট করতে পারবেন। হাদিয়া পেতে হলে আপনাকে আমাদের ওয়বেসাইটের দেওয়া ফর্ম পূরণ করতে হবে।
          ইনশাআল্লাহ রমাযান মাসের মধ্যেই এই প্রজেক্ট বাস্তবায়ন করা হবে।
        </p>
      </div>


      <div className="mt-8 border-2 p-4 md:p-10 rounded-md border-slate-300">
        <div className="grid grid-cols-12 gap-6">
          {
            books.map(book => <div key={book.thumb} className="flex justify-center shadow-lg border-0 md:border-2 border-slate-200 pt-8 px-4 rounded text-center col-span-12 md:col-span-6 lg:col-span-4">
              <div className="text-center" style={{ maxWidth: '300px' }}>
                <img src={book.thumb} alt="book thumbnail" />
                <h3 className="text-2xl sm:text-3xl font-bold my-4">{book.name}</h3>
                {get ?
                  <button
                    className="primary-bg text-white px-8 py-2 rounded shadow-md text-xl"
                  >
                    রিকুয়েস্ট করেছেন
                  </button> :
                  <BookDialog name={book.name} id={book.bookid} />}
                <div className="pt-8 text-sm flex justify-between">
                  <p>স্টকঃ {book.stock} টি</p>
                  <p>অনুরোধঃ {book.length} টি</p>
                </div>
                <div className="flex justify-center">
                  <button onClick={() => alert('ফলাফলের জন্য অপেক্ষা করুন')} className="w-full primary-bg py-2 text-white mt-4 mr-4 rounded-t-md">ফলাফল দেখুন</button>
                  <button onClick={() => alert('অনুরোধের জন্য অপেক্ষা করুন')} className="w-full primary-bg py-2 text-white mt-4 rounded-t-md">অনুরোধগুলো দেখুন</button>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>

    </div>
  </div>
}
