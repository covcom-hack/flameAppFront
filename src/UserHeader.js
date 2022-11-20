import styles from './UserHeader.module.css';
import {useNavigate} from "react-router-dom";

const UserHeader = (props) => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate('/');
    };

    return (<div className={styles.header}>
        <div className={styles.menuButtons}>
            <button className={styles.profileButton} onClick={() => navigate('/profile')}>Профиль</button>
            <button className={styles.exchangingButton} onClick={() => navigate('/main')}>Обмен</button>
            <button className={styles.historyButton} onClick={() => navigate('/history')}>История</button>
            <button className={styles.withdrawalButton} onClick={() => navigate('/withdrawal')}>Вывести</button>
            <button className={styles.depositButton} onClick={() => navigate('/deposit')}>Пополнить</button>
        </div>
        <button className={styles.logOutButton} onClick={logOut}>Выйти</button>
    </div>);
}

export default UserHeader;