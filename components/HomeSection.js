import Link from 'next/link'

export const HomeSection = () => {
  return (
        <>
            <section className="bg-white">
                <div className="grid max-w-screen-xl px-4 pt-40 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-64 animate-fade-in-up">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1
                            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                            Universidad del Valle</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <Link href="/api/auth/login">
                                <a
                                    className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-slate-400 rounded-lg sm:w-auto hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-100">
                                    Ingresar
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
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        {/* <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="mockup"/> */}
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-52 lg:px-6">
                </div>
            </section>
        </>

  )
}
