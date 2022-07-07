import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0'

import Layout from '../components/Layout'

export default function MyApp ({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}
