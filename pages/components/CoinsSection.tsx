import useSWR from "swr"
import fetcher from "../../utils/fetcher"
import { TERRA_BANK_PATH } from "../api/apis"
import Error from 'next/error'
import styles from '../../styles/CoinSection.module.css'
import { formatNumber } from "../../utils/utils"

interface Coin {
    available: string;
    delegatable: string;
    delegatedVesting: string;
    denom: string;
    freedVesting: string;
    remainingVesting: string;
    unbonding: string;
}

interface bankResponse {
    balance: Coin[];
    delegations: Coin[];
    unbondings: Coin[]
    vesting: Coin[];
}

export const CoinsSection = ({ addressId }: { addressId: string}) => {
    const { data, error } = useSWR(addressId ? `${TERRA_BANK_PATH}${addressId}`: null, fetcher)
    
    if (!data) return <h2>loading...</h2>
    if (error) return <Error statusCode={error} />
    const coinData = data as bankResponse

    if (coinData.balance && coinData.balance.length === 0) {
        return <>This account doesn't hold any coins yet.</>
    }
    
    return <div>
        {coinData.balance.map(coin => {
            return (
                <div className={styles.coinContent}>
                    <header>{coin.denom}</header>
                    <section>{formatNumber(coin.available)}</section>
                </div>
            );
        })}
    </div>
}