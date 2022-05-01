import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ChainsContext } from '../../contexts/ChainsContext'
import styles from '../../styles/SearchInput.module.css'

const SearchInput = () => {
    const [value, setValue] = useState('');
    const router = useRouter()
    const { pathname } = router
    const { chain } = useContext(ChainsContext)

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
    
        if (value) {
            if (pathname === '/') {
                router.push(`${chain}/address/${value}`)
            } else if (pathname === '/[chainName]/address/[addressId]') {
                router.push({ pathname, query: {
                    chainName: chain,
                    addressId: value
                }})
            } else {
                router.push('/404')
            }
        }
      };

    return (
        <form onSubmit={handleSubmit}>
            <input
            className={styles.searchInput}
            type="search"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={"Search Block / Tx / Account"}
            autoFocus
        />
        </form>
    );
}

export default SearchInput