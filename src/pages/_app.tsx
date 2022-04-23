import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='flex w-full h-full bg-base-background'>
    <Component {...pageProps} />
    </div>
}

export default MyApp
