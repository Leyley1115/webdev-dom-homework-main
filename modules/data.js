import { addComment } from "./newComment.js";

export const list = document.querySelector(".comments");
export const add = document.querySelector(".add-form-button");
export const name = document.querySelector(".add-form-name");
export const text = document.querySelector(".add-form-text");

export let counter = 0;
export let addAnswer = "";
export let newTextValue = [""];
export let index = 0;

export function setAddAnswer(value) {addAnswer = value;};
export function setIndex(value) {index = value;};
export function setnewTextValue(value){newTextValue = value};


export const commentBox = [
    {name: 'Глеб Фокин', data: '12.02.22 12:18', comment: `Это будет первый комментарий на этой странице`, likes: `${counter+3}`, likeActive: ""},
    {name: 'Варвара Н.', data: '13.02.22 19:22', comment: `Мне нравится как оформлена эта страница! ❤`, likes: `${counter+75}`, likeActive: "-active-like"}
  ]
  
add.addEventListener("click", () =>{addComment()});