import PageFooter from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MobileHeaderContextProvider from '../context/MobileHeaderContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <MobileHeaderContextProvider>
        <Header></Header>
        <Component {...pageProps} />
        {/* <PageFooter></PageFooter> */}
      </MobileHeaderContextProvider>
    </>
  )
}

export default MyApp
