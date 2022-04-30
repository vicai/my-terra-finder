import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import logo from '../static/logo.svg'
import terraFinder from '../static/terrafinder.jpg'
import { useState } from 'react'
import NetworkSelect from './components/NetworkSelect'

const Home: NextPage = () => {
  const { data, error } = useSWR('https://assets.terra.money/cw20/tokens.json', fetcher)
  // const { contractsData, contractsError } = useSWR('https://assets.terra.money/cw20/contracts.json', fetcher)
  // const { contractsCW721Data, contractsCW721Error } = useSWR('https://assets.terra.money/cw721/contracts.json', fetcher)
  const [value, setValue] = useState('');

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
