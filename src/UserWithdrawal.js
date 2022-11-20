import styles from './UserWithdrawal.module.css';
import UserHeader from "./UserHeader";
import {useState} from "react";

const UserWithdrawal = (props) => {
    const [cardNumber, setCardNumber] = useState('');
    const [date, setDate] = useState('');
    const [cvc, setCVC] = useState('');
    const [amount, setAmount] = useState(0);

    return (<>
        <UserHeader/>
        <div className={styles.bankCard}>
            <div className={styles.fieldsWrapper}>
                <div className={styles.bankCardTop}>
                    <label>
                        <span>Номер карты:</span>
                        <input
                            name="cardNumber"
                            type="number"
                            value={cardNumber}
                            onChange={e => setCardNumber(e.target.value.toString)} />
                    </label>
                </div>
                <div className={styles.bankCardBottom}>
                    <label>
                        <span>Срок:</span>
                        <input
                            name="date"
                            type="number"
                            minLength={4}
                            maxLength={4}
                            value={date}
                            onChange={e => setDate(e.target.value.toString)} />
                    </label>
                    <label>
                        <span>CVC:</span>
                        <input
                            name="cvc"
                            type="number"
                            value={cvc}
                            onChange={e => setCVC(e.target.value.toString)} />
                    </label>
                </div>
            </div>
        </div>

        <div className={styles.amountInputForm}>
            <div className={styles.amountInputFormTop}>
                <p>Сумма:</p>
            </div>
            <div className={styles.amountInputFormBottom}>
                <input
                    name="amount"
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)} />
                <button type="button">Пополнить</button>
            </div>
        </div>
    </>);
}

export default UserWithdrawal;