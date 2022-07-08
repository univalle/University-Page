import PanelLayout from '../../components/PanelLayout'
import { Card } from '../../components/Card'
import { Placeholder } from '../../components/Placeholder'
import { useUser } from '@auth0/nextjs-auth0'

import { ModalLogin } from '../../components/ModalLogin'

export default function Panel () {
  const n = 12
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      <PanelLayout>

        {user
          ? [...Array(n)].map((e, i) => <Card key={i} />)
          : [...Array(n)].map((e, i) => <Placeholder key={i} />)
        }

      </PanelLayout>
      {/* {!user && <ModalLogin />} */}
    </>
  )
}
