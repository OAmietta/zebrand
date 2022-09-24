import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Zebrands CH</title>
        <meta name="description" content="Zebrands challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button className='btn btn-primary' onClick={() => router.push("/userSearch")} >SEARCH USERS</button>
        <button className='btn btn-outline-primary' onClick={() => router.push("/repositorieSearch")} >SEARCH REPOSITORIES</button>
      </main>
    </div >
  )
}
