import useSWR from "swr"
import fetcher from "../../utils/fetcher"
import { TERRA_TXS_PATH } from "../api/apis"
import Error from 'next/error'
import { useEffect, useState } from "react";
import styles from '../../styles/TransactionsSection.module.css'
import { formatNumber } from "../../utils/utils";

interface Amount {
    amount: string;
    denom: string;
}

interface TXDetail {
    type: string // Type
    value: {
        fee: { // Fee
            gas: string;
            amount: Amount[]
        }
        memo: string;
        msg: any[];
        signatures: any[];
        timeout_height: string;
    }
}

interface Transaction {
    chainId: string
    gas_used: string
    gas_wanted: string
    height: string // Block
    id: number
    logs: any[]
    raw_log:  string
    timestamp: string // Timestamp
    tx: TXDetail
    txhash: string // Tx hash
}

interface TransactionsResponse {
    limit: number;
    next: number;
    txs: Transaction[]
}

const PAGINATION_LIMIT = 100

export const TransactionsSection = ({ addressId }: { addressId: string}) => {
    const [next, setNext] = useState(0)
    // API queries: ?offset=${start}&limit=${end}&account=${addressId}
    const { data, error } = useSWR(addressId ? `${TERRA_TXS_PATH}?offset=${next}&limit=${PAGINATION_LIMIT}&account=${addressId}`: null, fetcher)
    const [allTxs, setAllTxs] = useState<Transaction[]>([])

    // react effect for pagination
    useEffect(() => {
        if (data) {
            const txsData = data as TransactionsResponse
            setAllTxs([...allTxs, ...txsData.txs])
        }
    }, [data])

    if (!data) return <h2>loading...</h2>
    const txsData = data as TransactionsResponse

    if (error || !txsData.txs) return <Error statusCode={error} />
    
    if (allTxs && allTxs.length === 0) {
        return <>This account does not have any transitions yet.</>
    }

    const handleClickMore = () => {
        setNext(txsData.next)
    }
    
    return <div>
        <table className={styles.table}>
            <thead className={styles.table}>
                <tr className={styles.tableRow}>
                    <th>Tx hash</th>
                    <th>Type</th>
                    <th>Block</th>
                    <th>Timestamp</th>
                    <th>Fee</th>
                </tr>
            </thead>
            <tbody>
                {allTxs.map(transaction => {
                    return (
                        <tr key={transaction.txhash} className={styles.tableRow}>
                            <td className={styles.tableCell}>{transaction.txhash}</td>
                            <td className={styles.tableCell}>{transaction.tx.type}</td>
                            <td className={styles.tableCell}>{transaction.height}</td>
                            <td className={styles.tableCell}>{transaction.timestamp}</td>
                            <td className={styles.tableCell}>{transaction.tx.value.fee.amount.map((amt) => `${formatNumber(amt.amount)} ${amt.denom}`).join(', ')}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <div className={styles.paginationButton}>
            <button className={styles.button} onClick={handleClickMore}>More</button>
        </div>
    </div>
}

export default TransactionsSection