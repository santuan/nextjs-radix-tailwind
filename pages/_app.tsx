import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { IdProvider } from '@radix-ui/react-id';
import "@fontsource/archivo-narrow"
import "@fontsource/archivo"
import "@fontsource/space-mono"
import "@fontsource/alegreya"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IdProvider><Component {...pageProps} /></IdProvider>
  )
}

export default MyApp
