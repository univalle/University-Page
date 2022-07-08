import { useUser, useAuth0 } from '@auth0/nextjs-auth0'

export default function Profile () {
  const { user, error, isLoading } = useUser()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  console.log(user)

  return (
    user && (
      <div className='h-4/5 p-48'>
        <img src={user.picture} alt={'avatar'} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <section className="bg-white">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-52 lg:px-6">
            <a href="/api/auth/login">Login</a>
            <a href="/api/auth/logout">Logout</a>
          </div>
        </section>
      </div>
    )
  )
}
