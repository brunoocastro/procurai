import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Procurai</title>
        <meta name="description" content="Rastreie sua encomenda!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
   <p className="text-white font-extrabold text-3xl md:text-5xl">   Ghostwind CSS
   </p>
<p className="text-xl md:text-2xl text-gray-500"> Welcome to my Blog </p>
</div>
    </div>
  )
}

export default Home
