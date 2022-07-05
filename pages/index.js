import { Table } from '../components/Table'
import { Form } from '../components/Form'
import { Nav } from '../components/Nav'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'

export default function Home () {
  return (
    <>
      <div className='w-full grid place-items-center fixed border border-gray-700'>
        <Nav />
      </div>
      <article>

        <div className="p-6 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 grid place-items-center w-full h-screen">
          <Table />
        </div>
      </article>
    </>
  )
}
