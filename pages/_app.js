import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	
  return (
  <div className="bg-gradient-to-r from-cyan-50 to-cyan-100">
	  <Component {...pageProps} />
  </div>
  )
}

export default MyApp
