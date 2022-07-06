import { Table } from '../components/Table'
import { Timeline } from '../components/Timeline'
import { Nav } from '../components/Nav'
import { Alert } from '../components/Alert'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { Pagination } from '../components/Pagination'

export default function Home () {
  return (
    <main className='bg-white dark:bg-gray-800'>
      <Nav />
      <section className="bg-white dark:bg-gray-800 grid xl:grid-cols-4 place-items-center gap-4 w-full h-auto my-20 xl:px-20">
        <div className='col-span-3 grid xl:grid-cols-3 gap-4 xl:gap-10'>
          <div className='xl:col-span-3 text-center'>
            <Alert />
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <div className='xl:col-span-3 text-center'>
            <Pagination />
          </div>
        </div>
        <div className=''>
          <Timeline />
        </div>

      </section>
      <article className='bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 grid place-items-center'>
        <Footer />
      </article>
    </main>
  )
}
