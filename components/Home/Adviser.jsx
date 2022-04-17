const features = [
  { name: 'শাইখ মুতিউর রহমান মাদানী', description: 'ipsum voluptat usantium! Illo, dignissimos. quibusdam accusantium illo dignissimos' },
  { name: 'শাইখ আব্দুল্লাহিল হাদী মাদানী', description: 'ipsum voluptat usantium! Illo, dignissimos. quibusdam accusantium illo dignissimos' },
  { name: 'শাইখ আব্দুল্লাহিল কাফী মাদানী', description: 'ipsum voluptatum quillo, dignissimos. quibusdam accusantium illo dignissimos' },
  { name: 'উস্তায আব্দুল্লাহ মাহমূদ', description: 'ipsum voluptatum quibusdam accusantium! Illo, dignissimos. quibusdam ao dignissimos' },
]

export default function Adviser() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pt-14 pb-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-14 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">উপদেষ্টা মণ্ডলী</h1>
          <p className="mt-4 text-gray-500">
            দারুল ইসলাম বিশিষ্ট্য চিন্তাবিদ ও ইসলামিক স্কলারগণের উপদেশ ও পরামর্শের ভিত্তিতে পরিচালিত হয়ে থাকে।<br />
            তাঁদের মূল্যমান নসীহাহ ও পরামর্শের মাধ্যমে দারুল ইসলাম এগিয়ে যাচ্ছে ফালিল্লাহিল হামদ।
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature, index) => (
              <div key={index} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://i.ibb.co/C6zR6rt/sheikh.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://i.ibb.co/C6zR6rt/sheikh.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://i.ibb.co/C6zR6rt/sheikh.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://i.ibb.co/C6zR6rt/sheikh.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
