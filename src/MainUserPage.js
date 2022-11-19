import styles from './MainUserPage.module.css';
import UserHeader from "./UserHeader";

const MainUserPage = (props) => {
    const amount = 5.93;
    const currency = 'евро';

    return (<>
        <UserHeader/>
        <h1 className={styles.title}>Курс валют</h1>
        <div className={styles.graphsWrapper}>
            <div className={styles.graphWrapper}>
                <h2 className={styles.graphTitle}>История</h2>
                <form className={styles.intervalSelector}>
                    <label>
                        <span>С </span>
                        <input name="from" type="date"/>
                    </label>
                    <label>
                        <span>По </span>
                        <input name="to" type="date"/>
                    </label>
                </form>
                <div className={styles.graphCanvas}></div>
            </div>
            <div className={styles.graphWrapper}>
                <h2 className={styles.graphTitle}>Прогноз</h2>
                <div className={styles.graphCanvas}></div>
            </div>
        </div>
        <div className={styles.exchangerWrapper}>
            <div className={styles.currenciesPicker}>
                <select></select>
                <span className={styles.arrow}>-></span>
                <select></select>
            </div>
            <p className={styles.balance}>У Вас {amount} евро</p>
            <form className={styles.exchangeForm}>
                <input type="number" className={styles.amountField}/>
                <button type="button" className={styles.exchangeButton}>Обменять</button>
            </form>
        </div>
    </>);
}

export default MainUserPage;