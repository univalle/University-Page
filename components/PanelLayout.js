import { Timeline } from '../components/Timeline'
import { Pagination } from '../components/Pagination'
import { Sidebar } from '../components/Sidebar'

import Head from 'next/head'

export default function PanelLayout ({ children }) {
  return (

        <section className="bg-white pt-14">
            <div className='grid xl:grid-cols-6 place-items-center w-full'>
                <Head>
                    <title>Univalle</title>
                </Head>
                <div className='lg:block hidden w-full border-x border-b h-full'>
                    <Sidebar />
                </div>
                <div className='bg-slate-100 border-b border-r col-span-5 grid sm:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-5 w-full px-4 lg:p-10 lg:px-20 mx-16'>

                    {children}

                </div>
                <div className='col-span-6 w-5/6 animate-fade-in-up'>
                    <Timeline />
                </div>
            </div>
        </section>

  )
}
