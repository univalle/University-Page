import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'

export function User () {
  const { user } = useUser()

  return (
    user
      ? (
        <div className="items-center">
          <img className="w-12 h-12 rounded-full mb-4" src={user.picture} alt="" />
          <div className="space-y-1 font-medium">
            <div className='text-xs'>{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
        )
      : (

        <div className="items-center">
          <img className="w-12 h-12 rounded-full mb-4" src="https://www.charmcityheadshots.com/media/photos/linkedin-no-picture-avatar.png" alt="" />
          <div className="space-y-1 font-medium">
            <div className='text-base pr-4'>Debes
              <Link href="/api/auth/login">
                <a>
                  <span className='text-blue-800 mx-1'>iniciar sesión</span>
                </a>
              </Link>
              para poder ver el panel.
            </div>
          </div>
        </div>
        )
  )
}
