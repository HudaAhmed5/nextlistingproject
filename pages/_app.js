import React,{useState,useEffect} from 'assert'
// import Layout from '../comps/Layout'
import dynamic from 'next/dynamic'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Layout= dynamic(() => import('../comps/Layout'), { ssr: false })
  return (
    <>

     <Layout>
      <Component {...pageProps} />
      </Layout>

    </>
  )
}

export default MyApp
