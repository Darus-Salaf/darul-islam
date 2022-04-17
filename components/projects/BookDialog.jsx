import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function BookDialog({ name, id }) {

  const [isOpen, setIsOpen] = useState(false)
  const [info, setInfo] = useState({
    name: '',
    address: '',
    mobile: '',
  })

  const closeModal = () => setIsOpen(false)
  const getBook = () => {
    setIsOpen(true)
  }
  const onChange = e => {
    let data = { ...info }
    data[e.target.name] = e.target.value
    setInfo(data)
  }

  const handlePost = () => {
    let { name, address, mobile } = info
    if (name === '' || address === '' || mobile.length < 11) {
      alert('অনুগ্রহ করে সবগুলো ঘরে সঠিক তথ্য দিন')
    } else {
      fetch('https://darulislam.foundation/datacenter/api/bookgiveway', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, address, mobile, book: name, bookid: id })
      })
        .then(res => res.json())
        .then(inf => {
          if (inf.message === 'data successfully created') {
            alert('আপনার তথ্য পাঠানো হয়েছে। ফলাফলের জন্য অপেক্ষা করুন।')
            localStorage.setItem('get', true)
            setIsOpen(false)
          } else alert('ত্রুটি পাওয়া গিয়েছে, আবার চেষ্টা করুন।')
        })
        .catch(err => alert(err.message))
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => getBook()}
        className="primary-bg text-white px-8 py-2 rounded shadow-md text-xl"
      >
        ফ্রি পেতে চাপুন
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="border-4 border-slate-400 inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform primary-bg shadow-xl rounded-lg">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 text-white"
                >
                  ফ্রি-তে "{name}" বইটি পান
                  <hr />
                </Dialog.Title>
                <div className="mt-2">
                  <label htmlFor="name" className="block text-white">
                    নাম
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    id="name"
                    autoComplete="name"
                    placeholder='রবিউস সানী'
                    className="mt-1 focus:ring-slate-500 focus:border-slate-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="name" className="block text-white">
                    ঠিকানা
                  </label>
                  <input
                    type="text"
                    name="address"
                    onChange={onChange}
                    id="address"
                    autoComplete="address"
                    placeholder='থানার নাম, জেলার নাম'
                    className="mt-1 focus:ring-slate-500 focus:border-slate-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="name" className="block text-white">
                    মোবাইল
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    onChange={onChange}
                    id="mobile"
                    autoComplete="mobile"
                    placeholder='01000000000'
                    className="mt-1 focus:ring-slate-500 focus:border-slate-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    type="button"
                    className="border-2 text-white px-4 py-4 rounded shadow-md mr-4"
                    onClick={closeModal}
                  >
                    অন্য বই নিন
                  </button>
                  <button
                    type="button"
                    className="primary-dark-bg text-white px-4 py-4 rounded shadow-md"
                    onClick={handlePost}
                  >
                    রিকুয়েস্ট পাঠান
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
