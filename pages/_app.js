import '../styles/globals.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Provider>
  )
}
export default MyApp;
