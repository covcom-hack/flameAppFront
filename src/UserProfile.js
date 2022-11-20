import styles from './UserProfile.module.css';
import UserHeader from "./UserHeader";

const UserProfile = (props) => {
    const user = {
        lastName: 'Иванов',
        firstName: 'Иван',
        patronymicName: 'Иванович',
        passport: '4020888888',
        inn: '231501783052',
        phoneNumber: '89113333333',
        login: 'ivan1'
    };

    return <>
        <UserHeader/>
        <div className={styles.cardsGrid}>
            <div className={styles.titleAndCardWrapper}>
                <p className={styles.title}>Личные данные</p>
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
                </div>
            </div>
            <div className={styles.titleAndCardWrapper}>
                <p className={styles.title}>Счета</p>
                <table className={styles.openedBankAccounts}>
                    <thead>
                    <tr>
                        <th>Валюта</th>
                        <th>Бланс</th>
                        <th>Номер счета</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Рубль</td>
                        <td>1000</td>
                        <td>1234567890</td>
                    </tr>
                    <tr>
                        <td>Евро</td>
                        <td>47.65</td>
                        <td>1234567891</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.titleAndCardWrapper}>
                <p className={styles.title}>Открыть счёт</p>
                <div className={styles.bankAccounts}>

                </div>
            </div>
        </div>
    </>;
}

export default UserProfile;