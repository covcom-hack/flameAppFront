import {Response} from "./authorisation";

export function AuthorisationService(){
    this.server = "http://localhost:8080/flame";

    this.getJWT = () => localStorage.getItem('jwt');
    this.setJWT = (jwt) => localStorage.setItem('jwt', 'Bearer ' + jwt)
    this.logIn = async function (login, password){
        const user = {login: login, pass: password};

        return await fetch(this.server + '/api/auth/login', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(user)
        }).then(response => {
                if (!!response.jwtResponse.accessToken){
                    this.setJWT(response.jwtResponse.accessToken);
                    return {isSuccessful: true};
                }
                return {isSuccessful: false, error: JSON.stringify(response)};
        }).catch(err => {console.log(err); return {isSuccessful: false, error: err.message};});
    }
}