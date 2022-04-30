import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import logo from '../static/logo.svg'
import terraFinder from '../static/terrafinder.jpg'
import { useState } from 'react'

const Home: NextPage = () => {
  const { data, error } = useSWR('https://assets.terra.money/cw20/tokens.json', fetcher)
  const [value, setValue] = useState(``);

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
        <main className={styles.main}>
          <Image src={logo} alt="Terra logo" width={200} height={65} />
          <input
            className={styles.searchInput}
            type="search"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={"Search Block / Tx / Account"}
            autoFocus
          />
        </main>
      </div>  
    </div>
  )
}

export default Home
