import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import logo from '../static/logo.svg'
import terraFinder from '../static/terrafinder.jpg'
import NetworkSelect from './components/NetworkSelect'
import SearchInput from './components/SearchInput'

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          alt="terraFinderBg"
          src={terraFinder}
          layout="fill"
          objectFit="cover"
          quality={100}
        />  
      </div>

      <div className={styles.container}>
        <div className={styles.navBar}>
          <NetworkSelect />
        </div>
        <main className={styles.main}>
          <Image src={logo} alt="Terra logo" width={200} height={65} />
          <SearchInput />
        </main>
      </div>  
    </div>
  )
}

export default Home
