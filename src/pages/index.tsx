import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [code, setCode] = useState('')
  return (
    <div className={styles.container}>
      <Head>
        <title>Procurai</title>
        <meta name="description" content="Rastreie sua encomenda!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className='w-full h-full flex justify-center items-center'>
      <input placeholder='Digite um código de rastreio' value={code} onChange={(e => setCode(e.target.value))} />
    </div>
    </div>
  )
}

export default Home
