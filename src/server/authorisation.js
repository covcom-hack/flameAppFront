const server = "http://localhost:8080/flame/api";

export function Response(res){
    this.jwt = res.jwt;
    this.isSuccessful = !! this.jwt;
    this.error = res.error;
    this.role = res.role;
}

function setJWT(jwt){
    return localStorage.setItem('jwt', jwt);
}

export function getJWT(){
    return localStorage.getItem('jwt');
}

function setRole(role){
    return localStorage.setItem('role', role);
}

export function getRole(){
    return localStorage.getItem('role');
}

export function hasJWT(){
    return !!getJWT();
}

async function sendForm(user){
    setJWT('1234567'); //todo удали строку
    setRole('user'); //todo удали строку

    if (hasJWT())
        return new Response({jwt: getJWT(), role: getRole()});

    return await fetch(server, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then(response => {
        const res = new Response(JSON.parse(response.body));

        if (res.isSuccessful){
            setJWT(res.jwt);
            setRole(res.role);
        }

        return res;
    });
}

export async function logIn(login, password){
    const user = {login: login, password: password};
    return sendForm(user);
}

export async function register(firstName, lastName, patronymicName, passport, inn, phoneNumber, login, password){
    const user = {firstName: firstName, lastName: lastName, patronymicName: patronymicName, passport: passport, inn: inn, phoneNumber: phoneNumber};
    return sendForm(user);
}

export async function logOut(){
    localStorage.clear(); //todo
    return new Promise(0);


    await fetch(server + '/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({jwt: getJWT(), logOut})
    }).then(response => {
        localStorage.clear();
    });
}