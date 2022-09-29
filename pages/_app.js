import PageFooter from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <PageFooter></PageFooter>
    </>
  )
}

export default MyApp
