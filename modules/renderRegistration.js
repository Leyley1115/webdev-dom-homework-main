// import { renderLogin } from "./renderLogin";

export const renderReg = () => {
    const app = document.querySelector(".app");

    app.innerHTML = `
    <h2>Регистрация</h2>
    <label><input type="text" placeholder="Логин" class="input-form"></label><br>
    <label><input type="text" placeholder="Пароль" class="input-form"></label><br><br>
    <button  class="button-form">Зарегистрироваться</button>
    `
}