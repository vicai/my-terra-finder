import useSWR from "swr"
import fetcher from "../../utils/fetcher"
import styles from '../../styles/Home.module.css'
import { useState } from "react";

interface ChainData {
  chainId: string;
  lcd: string;
  mantle: string;
  name: string;
  walletconnectID?: string;
}

interface ResponseData {
  [key: string]: ChainData
}

const defaultChain = 'mainnet'

const NetworkSelect = () => {
    const { data, error} = useSWR('https://assets.terra.money/chains.json', fetcher)
    const [currentChain, setCurrentChain] = useState(defaultChain)

    const changeChain = (chainName: string) => {
      setCurrentChain(chainName)
    }

    if (error) return <div>Failed to load Chains...</div>
    if (!data) return <div>Loading...</div>

    return (
        <div className={styles.networkSelect}>
          <select
            className={styles.selectContent}
            value={currentChain}
            onChange={e => changeChain(e.target.value)}
          >
            {Object.keys(data as ResponseData).map(( name ) => (
              <option key={name}>{name}</option>
            ))}
          </select>
          <div className={styles.addon}>
            <i className="material-icons"></i>
          </div>
        </div>
      );
}

export default NetworkSelect