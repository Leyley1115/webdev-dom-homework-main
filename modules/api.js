import { updateComments, list, textForm, name } from "./data.js";
import { commentsRender } from "../index.js";


export const host = 'https://wedev-api.sky.pro/api/v2/pris-sofia/comments';
export let token = '';
export const updateToken = (newToken) => {
    return token = newToken
}

export const fetchGET = () => {
    return fetch (host, {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token}`
    }
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        updateComments(data.comments);
        commentsRender();
        return data
    }) 
}

export function login ({login, password}){
    return fetch ('https://wedev-api.sky.pro/api/user/login', {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        })
    })
    .then((response) => {
        if (response.status === 201){
            return response.json()
        }
        if (response.status === 400){
        throw new Error ('Неверно введён логин или пароль');
        }
    })
    .then((data) => {
        console.log(data);
        name.value = data.user.name; 
        name.disabled = true; 
        return updateToken(data.user.token)
    })
    .then(() =>{
        fetchGET()
        const app = document.querySelector(".app");
        list.style.display = 'flex';
        textForm.style.display = 'flex';
        app.style.display = 'none';
    })
    .catch((error) =>{
     return alert(error.message.replace(`Error:`));
    })
}