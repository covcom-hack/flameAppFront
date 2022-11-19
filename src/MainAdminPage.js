import styles from './MainAdminPage.module.css';
import AdminHeader from "./AdminHeader";

const MainAdminPage = (props) => {
    const users = [];
    for (let i = 1; i <= 8; i++) {
        users.push({
            id: i,
            lastName: 'Иванов',
            firstName: 'Иван',
            patronymicName: 'Иванович',
            passport: '4020888888',
            inn: '231501783052',
            phoneNumber: '89113333333',
            login: 'ivan1'
        });
    }

    function createUserCard(user){
        return (<div className={styles.cardWrapper} key={user.id}>
            <p className={styles.cardHeader}>{user.id}</p>
            <div className={styles.card}>
                <div className={styles.fields}>
                    <div className={styles.labelAndText}>
                        <span className={styles.label}>Фамилия:</span>
                        <p className={styles.text}>{user.lastName}</p>
                    </div>
                    <div className={styles.labelAndText}>
                        <span className={styles.label}>Имя:</span>
                        <p className={styles.text}>{user.firstName}</p>
                    </div>
                    <div className={styles.labelAndText}>
                        <span className={styles.label}>Отчество:</span>
                        <p className={styles.text}>{user.patronymicName}</p>
                    </div>
                    <div className={styles.labelAndText}>
                        <span className={styles.label}>Номер паспорта:</span>
                        <p className={styles.text}>{user.passport}</p>
                    </div>
                    <div className={styles.labelAndText}>
                        <span className={styles.label}>ИНН:</span>
                        <p className={styles.text}>{user.inn}</p>
                    </div>
                    <div className={styles.labelAndText}>
                        <span className={styles.label}>Номер телефона:</span>
                        <p className={styles.text}>{user.phoneNumber}</p>
                    </div>
                    <div className={styles.labelAndText}>
                        <span className={styles.label}>Логин:</span>
                        <p className={styles.text}>{user.login}</p>
                    </div>
                </div>
                <div className={styles.cardButtons}>
                    <button type="button" className={styles.acceptButton}>Принять</button>
                    <button type="button" className={styles.removeButton}>Удалить</button>
                </div>
            </div>
        </div>);
    }


    return (<>
        <AdminHeader/>
        <div className={styles.cardsGrid}>
            {users.map(u => createUserCard(u))}
        </div>
    </>);
}

export default MainAdminPage;