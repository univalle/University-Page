import { Timeline } from '../components/Timeline'
import { Alert } from '../components/Alert'
import { Card } from '../components/Card'
import { Pagination } from '../components/Pagination'
import { User } from '../components/User'
import { Placeholder } from '../components/Placeholder'
import { Spinner } from '../components/Spinner'

import Head from 'next/head'

export default function Home () {
  return (
    <div className='grid xl:grid-cols-4 place-items-center gap-4 w-full h-auto my-20 xl:px-20'>
      <Head>
        <title>Univalle</title>
      </Head>
      <div className='xl:col-span-4 m-auto'>
        <User />
      </div>
      <div className='col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-10'>

        {/* <div className='xl:col-span-3 text-center'>
          <Alert />
        </div> */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
      <div className='h-screen'>
        <Timeline />
      </div>
      <div className='mt-5 xl:col-span-3 sm:col-span-2 text-center'>
        <Pagination />
      </div>
    </div>

  )
}
