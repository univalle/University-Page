import Link from 'next/link'

export const HomeSection = () => {
  return (
        <>
            <section className="bg-white">
                <div className="grid max-w-screen-xl px-4 pt-40 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-64 animate-fade-in-up">
                    <div className="mr-auto place-self-center lg:col-span-12">
                        <h1
                            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                            Universidad del Valle</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <Link href="/login">
                                <a
                                    className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                                    Login
                                </a>
                            </Link>
                            <Link href="/panel">
                                <a
                                    className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-black border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:border-black hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-20 ">
                                    Panel
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-52 lg:px-6">
                    <a href="/api/auth/login">Login</a>
                    <a href="/api/auth/logout">Logout</a>
                </div>
            </section>
        </>

  )
}
