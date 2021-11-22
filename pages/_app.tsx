import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { IdProvider } from '@radix-ui/react-id';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IdProvider><Component {...pageProps} /></IdProvider>
  )
}

export default MyApp
