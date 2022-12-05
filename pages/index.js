import Head from 'next/head'

import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja list | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
   
    <div>
    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ipsum nisi, efficitur tempus ornare id, blandit a neque.
    </p>
    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ipsum nisi, efficitur tempus ornare id, blandit a neque.</p>
    <Link href="/ninjas">See ninja listing</Link>
    </div>
   </>
  )
}
