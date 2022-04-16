import BookDialog from "../../components/projects/BookDialog"

export default function Book_Giveway() {

  const handleChoose = name => {

  }

  const books = [
    {
      name: 'আক্বীদাতুত তাওহীদ',
      thumb: '/projects/images/akidatut_tawheed.jpg',
      date: '20/04/22'
    },
    {
      name: 'ফাতাওয়ায়ে আলবানী',
      thumb: '/projects/images/fatawaye_albani.jpg',
      date: '20/04/22'
    },
    {
      name: 'এটা সালাফদের মানহাজ নয়',
      thumb: '/projects/images/eta_salafder_manhaj_noy.jpg',
      date: '20/04/22'
    }
  ]

  return <div className="container" >
    <div className=" mb-4">

      <div className="py-8 mt-8 mb-10 text-center rounded-md shadow-lg">
        <h2 className="text-4xl primary font-bold sm:text-6xl text-white">
          ফ্রি বই বিতরণ <sub className="text-sm sub">(শর্ত প্রযোজ্য)</sub>
        </h2>
      </div>

      <h1 className="text-2xl sm:text-3xl">বই বিতরণ, জ্ঞান  বিতরণ <sub className="text-sm sub">দারুল ইসলাম ফাউন্ডেশন</sub></h1>

      <div className="mt-8 border-2 p-4 md:p-10 rounded-md border-slate-300">
        <div className="grid grid-cols-12 gap-6">
          {
            books.map(book => <div key={book.thumb} className="flex justify-center shadow-lg border-0 md:border-2 border-slate-200 p-8 rounded text-center col-span-12 md:col-span-6 lg:col-span-4">
              <div className="text-center" style={{ maxWidth: '300px' }}>
                <img src={book.thumb} alt="book thumbnail" />
                <h3 className="text-2xl sm:text-3xl font-bold my-4">{book.name}</h3>
                <BookDialog name={book.name} />
                <div className="pt-8 text-sm flex justify-between">
                  <p>স্টকঃ 100 টি</p>
                  <p>অনুরোধঃ 150 টি</p>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>

    </div>
  </div>
}
