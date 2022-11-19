import styles from './UserHeader.module.css';

const UserHeader = (props) => {
    return (<div className={styles.header}>
        <div className={styles.menuButtons}>
            <button className={styles.usersButton}>Пользователи</button>
            <button className={styles.exchangingButton}>Обмен</button>
            <button className={styles.historyButton}>История</button>
            <button className={styles.withdrawalButton}>Вывести</button>
            <button className={styles.depositButton}>Пополнить</button>
        </div>
        <button className={styles.logOutButton}>Выйти</button>
    </div>);
}

export default UserHeader;