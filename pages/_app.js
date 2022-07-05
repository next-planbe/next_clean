import Head from 'next/head'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Planbe</title>
    </Head>
    <ColorSchemeProvider>
      <MantineProvider>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  </>
}

export default MyApp
