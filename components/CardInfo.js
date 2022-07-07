import Link from 'next/link'
import { Placeholder } from './Placeholder'

export function CardInfo () {
  return (
        <div className='mt-5 xl:col-span-5 sm:col-span-2'>
            <a href="#" className="block p-6 bg-white rounded-lg border border-gray-300 shadow-md m-auto animate-fade-in-up">
                <h5 className="pt-10 mb-2 text-base font-bold tracking-tight text-slate-800">Noteworthy technology acquisitions 2021</h5>
                <p className="py-10 font-normal text-sm text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className="relative overflow-x-auto sm:rounded-lg">

                </div>
                <div className='flex py-10'>
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                </div>
            </a>

        </div>
  )
}
