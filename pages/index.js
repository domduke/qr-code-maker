import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QR Code Maker</title>
        <meta name="description" content="Create Your Own QR Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          QR Code Maker
        </h1>

        <p className={styles.description}>
          Create Your Own QR Code
        </p>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
