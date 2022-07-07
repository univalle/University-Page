export function LoginForm () {
  return (
        <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 m-auto">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900">Sign in to our platform</h5>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 " required />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                    </div>
                    <a href="#" className="ml-auto text-sm text-blue-700 hover:underline ">Lost Password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border hover:border-black hover:text-black">Login to your account</button>
                <div className="text-sm font-medium text-gray-500">
                    Not registered? <a href="#" className="text-blue-700 hover:underline ">Create account</a>
                </div>
            </form>
        </div>
  )
}
