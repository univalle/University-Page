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
                <div className='lg:grid-cols-2 col-span-6 bg-slate-100 border-b border-r lg:col-span-5 grid xl:grid-cols-4 gap-5 w-full px-4 py-10 lg:p-10 lg:px-5 mx-16 lg:mx-2'>

                    {children}

                </div>
                <div className='col-span-6 w-4/6 animate-fade-in-up'>
                    <h2 className="pt-20 text-3xl font-extrabold tracking-tight text-gray-900">
                    Cambios recientes
                    </h2>
                    <Timeline />
                </div>
            </div>
        </section >

  )
}
