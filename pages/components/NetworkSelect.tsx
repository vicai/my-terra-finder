import useSWR from "swr"
import fetcher from "../../utils/fetcher"
import styles from '../../styles/Home.module.css'
import { ChainsContext } from "../../contexts/ChainsContext";

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

const NetworkSelect = () => {
    const { data, error} = useSWR('https://assets.terra.money/chains.json', fetcher)

    if (error) return <div>Failed to load Chains...</div>
    if (!data) return <div>Loading...</div>

    return (
        <ChainsContext.Consumer>
          {({chain, selectChain}) => (
            <div className={styles.networkSelect}>
              <select
                className={styles.selectContent}
                value={chain}
                onChange={e => selectChain(e.target.value)}
              >
                {Object.keys(data as ResponseData).map(( name ) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
              <div className={styles.addon}>
                <i className="material-icons"></i>
              </div>
            </div>
          )}
        </ChainsContext.Consumer>
      );
}

export default NetworkSelect