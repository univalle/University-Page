import { Nav } from './Nav'
import { Footer } from './Footer'

export default function Layout ({ children }) {
  return (
        <main className='bg-white dark:bg-gray-800'>
            <Nav />
            <section className="bg-white dark:bg-gray-800">
                {children}
            </section>
            <article className='bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 grid place-items-center'>
                <Footer />
            </article>
        </main>
  )
}
