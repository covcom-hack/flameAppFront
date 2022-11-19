import styles from './AdminHeader.module.css';

const AdminHeader = (props) => {

    return (<div className={styles.header}>
        <div className={styles.menuButtons}>
            <button className={styles.usersButton}>Пользователи</button>
        </div>
        <button className={styles.logOutButton}>Выйти</button>
    </div>);
}

export default AdminHeader;