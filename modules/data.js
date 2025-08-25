import { addComment } from "./newComment.js";

export const list = document.querySelector(".comments");
export const add = document.querySelector(".add-form-button");
export const name = document.querySelector(".add-form-name");
export const text = document.querySelector(".add-form-text");
export const now = new Date();

export let counter = 0;
export let addAnswer = "";
export let newTextValue = [""];
export let index = 0;

export function setAddAnswer(value) {addAnswer = value;};
export function setIndex(value) {index = value;};
export function setnewTextValue(value){newTextValue = value};


export let commentBox = [];

export const updateComments = (newComment) => {
  return commentBox = newComment;
}
  
add.addEventListener("click", () => {addComment()});