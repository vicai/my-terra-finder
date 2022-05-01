import logo from '../../static/logo.svg'
import Image from 'next/image'
import styles from '../../styles/AccountHeader.module.css'
import SearchInput from './SearchInput';
import NetworkSelect from './NetworkSelect';

const AccountHeader = () => {
    return (
        <div className={styles.headerContainer}>
            <Image className={styles.headerLogo} src={logo} alt="Terra logo" width={160} height={21} />
            <SearchInput />
            <NetworkSelect />
        </div>
    );
}

export default AccountHeader