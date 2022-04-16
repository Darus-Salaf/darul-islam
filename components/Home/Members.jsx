/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const members = [
    {
        id: 1,
        name: 'Md Khalid Hasan',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 2,
        name: 'Zidni Rahman',
        href: '#',
        identity: "Employee, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 3,
        name: 'Moin Uddin',
        href: '#',
        identity: "Employee, Multinational group",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Rokonujjaman',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 5,
        name: 'Maruf Hasan',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 6,
        name: 'Nur Alam',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 7,
        name: 'Muhammad Imran',
        href: '#',
        identity: "Businessman, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 8,
        name: 'Md Khalid Hasan',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
]

export default function Members() {
    return (
        <div className="bg-white mt-24">
            <div className="md:text-center  px-4 sm:px-6 lg:px-8">
                <h2 className="text-base text-gray-700 font-semibold tracking-wide uppercase"> team members </h2>
                <p className="mt-2 text-indigo-600 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                    We are a team, a family for preaching the Light and Truth
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                    accusamus quisquam.
                </p>
            </div>
            <div className="max-w-2xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {members.map((member) => (
                        <a key={member.id} href={member.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={member.imageSrc}
                                    alt={member.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-lg text-gray-800">{member.name}</h3>
                            <p className="mt-1 font-small text-gray-500">{member.identity}</p>
                        </a>
                    ))}
                </div>
                <div className="my-12 flex items-center justify-center">
                    <a
                        href="#"
                        className="w-full text-center sm:w-40 px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-200 hover:bg-indigo-600 hover:text-white md:py-4 md:text-lg md:px-10"
                    >
                        Know All
                    </a>
                </div>
            </div>
        </div>
    )
}
