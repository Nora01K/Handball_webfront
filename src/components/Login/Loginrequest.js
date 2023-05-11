export function requestLogin(username, password){
    if(password === "admin" && username === "admin"){
    document.location.href = 'http://localhost:3000/test'
    }
}