import { list, textForm } from "./data.js";
import { login } from "./api.js";

export const renderLogin = () => {
    list.style.display = 'none';
    textForm.style.display = 'none';
    const app = document.querySelector(".app");
    app.classList.add('add-form');
    app.innerHTML = `
    <h2>Войти в систему</h2>
    <label><input type="text" class="input-form" placeholder="Логин" id="log-id"></label><br>
    <label><input type="text" class="input-form" placeholder="Пароль" id ="password-id"></label><br><br>
    <button id="log" class="button-form">Войти</button>
    <button id="reg" class="button-form">Зарегистрироваться</button>
    `
    app.style.alignItems = 'center';
    app.style.padding = '48px';

    const logButton = document.getElementById('log');
    const logEl = document.getElementById('log-id');
    const pasEl = document.getElementById('password-id');

logButton.addEventListener("click", () =>{
    login({
        login: logEl.value,
        password: pasEl.value
    })
    .then((data) => {
        return data
    })
})
}