import PanelLayout from '../../components/PanelLayout'
import { CardInfo } from '../../components/CardInfo'
import { Placeholder } from '../../components/Placeholder'
import { Card } from '../../components/Card'

import { useRouter } from 'next/router'

export default function Item () {
  const router = useRouter()

  return (
    <PanelLayout>
      <CardInfo />
    </PanelLayout>
  )
}
