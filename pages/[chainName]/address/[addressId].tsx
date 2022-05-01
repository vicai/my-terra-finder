import { useRouter } from 'next/router'
import Error from 'next/error'
import { AccountHeader } from '../../components/AccountHeader'
import styles from '../../../styles/AccountDetailPage.module.css'
import { CoinsSection } from '../../components/CoinsSection'
import { ReactNode } from 'react'
import { TransacationsSection } from '../../components/TransactionsSection'
import { TokensSection } from '../../components/TokensSection'

const Card = ({ header, body}: { header: string, body: ReactNode}) => {
    return  (<div className={styles.card}>
        <header className={styles.cardHeader}>{header}</header>
        <section className={styles.cardBody}>{body}</section>
    </div>);
}

const AccountDetailPage = () => {
    const router = useRouter()
    const { addressId } = router.query
    
    if (!addressId) return <Error statusCode={404} />

    return (
        <>
            <AccountHeader />
            <div className={styles.accountContent} >
                <h2>Smart Contract</h2>
                <Card header={"Address"} body={addressId}></Card>
                <Card header={"Coins"} body={<CoinsSection addressId={addressId as string} />}></Card>
                <Card header={"Tokens"} body={<TokensSection addressId={addressId as string} />}></Card>
                <Card header={"Transactions"} body={<TransacationsSection addressId={addressId as string} />}></Card>
            </div>
        </>
    );
}

export default AccountDetailPage
