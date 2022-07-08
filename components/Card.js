import Link from 'next/link'

export function Card () {
  return (
    <Link href='/panel/id'>
        <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-300 shadow-md m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 animate-fade-in-up">
            <h5 className="mb-2 text-base font-bold tracking-tight text-slate-800 ">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-sm text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className="pt-4">
                <div className="w-full bg-gray-200 rounded-full ">
                    <div className="bg-gray-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-1/2"> 50%</div>
                </div>
            </div>
            <div className="mt-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">Default</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">Dark</span>
            <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">Red</span>
            </div>
        </a>
    </Link>
  )
}
