import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function Working() {

    const handleClose = () => {
        document.getElementById('close').style.display = 'none'
    }

    return (
        <div className="bg-primary" id="close">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg bg-secondary">
                            <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                        <p className="ml-3 font-medium text-white truncate">
                            <span className="md:hidden">এই ওয়েবসাইটটির কাজ চলছে</span>
                            <span className="hidden md:inline">এই ওয়েবসাইটটির কাজ চলছে, শীঘ্রই আপডেট করা হবে</span>
                        </p>
                    </div>
                    <div className="hidden md:inline order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto ">
                        <a
                            href="#"
                            className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-gray-200"
                        >
                            আরো জানুন
                        </a>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="-mr-1 flex p-2 rounded-md hover:primary-bg focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                        >
                            <span className="sr-only">Dismiss</span>
                            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
