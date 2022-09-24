import '../styles/globals.css'
import '../styles/Components.css'
import "../styles/index.scss";
import { store } from '../store'
import { Provider } from 'react-redux'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
export default MyApp;
