import styles from './UserHistory.module.css';
import UserHeader from "./UserHeader";

const UserHistory = (props) => {
    return (<>
        <UserHeader/>
        <p className={styles.title}>Баланс</p>
        <div className={styles.balances}>
            <div className={styles.balance}>
                <p className={styles.currency}>Рубль</p>
                <p className={styles.amount}>10000.83</p>
            </div>
            <div className={styles.balance}>
                <p className={styles.currency}>Евро</p>
                <p className={styles.amount}>5.93</p>
            </div>
            <div className={styles.balance}>
                <p className={styles.currency}>Доллар</p>
                <p className={styles.amount}>567</p>
            </div>
        </div>
        <p className={styles.title}>Операции</p>

    </>);
}

export default UserHistory;