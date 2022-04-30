import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetcher from '../../../utils/fetcher'
import Error from 'next/error'
import { ContractHeader } from '../../components/ContractHeader'

const ContractDetailPage = () => {
    const router = useRouter()
    const { addressId } = router.query
    const { data, error } = useSWR(addressId ? `https://fcd.terra.dev/wasm/contracts/${addressId}`: null, fetcher)
    
    if (!data) return <h2>loading...</h2>
    if (error) return <Error statusCode={error} />

    return (
        <div>
            <ContractHeader />
        </div>
    );
}

export default ContractDetailPage
