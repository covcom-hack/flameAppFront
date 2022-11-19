import styles from "./StartPage.module.css";
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {hasJWT, logIn, register} from "./server/authorisation";

const StartPage = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (hasJWT())
            navigate('/main');
    });

    const [isLogging, setIsLogging] = useState(true);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymicName, setPatronymicName] = useState('');
    const [passport, setPassport] = useState('');
    const [inn, setInn] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [response, setResponse] = useState(null);
    const logInAction = () => logIn(login, password).then(r => {
        setResponse(r);
        if (r.isSuccessful)
            navigate('/main');
    });
    const registerAction = () => register(firstName, lastName, patronymicName, passport, inn, phoneNumber, login, password).then(r => {
        setResponse(r);
        if (r.isSuccessful)
            navigate('/main');
    });

    return (<>
        <p className={styles.commandName}>Команда Funflamers</p>
        <h1 className={styles.businessName}>Биржа валют</h1>
        <h2 className={styles.question}>Готов торговать?</h2>
        <div className={styles.window}>
            <div className={styles.windowHeader}>
                <button onClick={() => setIsLogging(true)} className={isLogging ? styles.activeButton : null}>Вход</button>
                <button onClick={() => setIsLogging(false)} className={!isLogging ? styles.activeButton : null}>Регистрация</button>
            </div>
            {isLogging
                ? <form className={styles.form}>
                    <div className={styles.formFields}>
                        <label>
                            <span>Логин:</span>
                            <input
                                name="login"
                                type="text"
                                minLength={8}
                                value={login}
                                onChange={e => setLogin(e.target.value)} />
                        </label>
                        <label>
                            <span>Пароль:</span>
                            <input
                                name="password"
                                type="password"
                                minLength={8}
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <button className={styles.sendFormButton} onClick={logInAction} type="button">Войти</button>
                </form>
                : <form className={styles.form}>
                    <div className={styles.formFields}>
                        <label>
                            <span>Фамилия:</span>
                            <input
                                name="lastName"
                                type="text"
                                value={firstName}
                                minLength={2}
                                onChange={e => setFirstName(e.target.value)} />
                        </label>
                        <label>
                            <span>Имя:</span>
                            <input
                                name="firstName"
                                type="text"
                                value={lastName}
                                minLength={2}
                                onChange={e => setLastName(e.target.value)} />
                        </label>
                        <label>
                            <span>Отчество:</span>
                            <input
                                name="patronymicName"
                                type="text"
                                value={patronymicName}
                                minLength={2}
                                onChange={e => setPatronymicName(e.target.value)} />
                        </label>
                        <label>
                            <span>Номер паспорта:</span>
                            <input
                                name="passport"
                                type="number"
                                value={passport}
                                minLength={10}
                                maxLength={10}
                                onChange={e => setPassport(e.target.value.toString())} />
                        </label>
                        <label>
                            <span>ИНН:</span>
                            <input
                                name="inn"
                                type="number"
                                value={inn}
                                minLength={12}
                                maxLength={12}
                                onChange={e => setInn(e.target.value.toString())} />
                        </label>
                        <label>
                            <span>Номер телефона:</span>
                            <input
                                name="phoneNumber"
                                type="number"
                                value={phoneNumber}
                                minLength={11}
                                maxLength={11}
                                onChange={e => setPhoneNumber(e.target.value.toString())} />
                        </label>
                        <label>
                            <span>Логин:</span>
                            <input
                                name="login"
                                type="text"
                                value={login}
                                minLength={8}
                                onChange={e => setLogin(e.target.value)} />
                        </label>
                        <label>
                            <span>Пароль:</span>
                            <input
                                name="password"
                                type="password"
                                value={password}
                                minLength={8}
                                onChange={e => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <button className={styles.sendFormButton} onClick={registerAction} type="button">Зарегестрироваться</button>
                </form>
            }
            {response && !response.isSuccessful ? <div className={styles.errors}>
                {response.error}
            </div> : null}
        </div>
    </>);
}

export default StartPage;