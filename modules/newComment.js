import { now, text, name, list, counter, newTextValue, addAnswer, updateComments } from "./data.js";
import { commentsRender } from "../index.js";

export function addComment() {name.classList.remove("error");
  text.classList.remove("error");
  if (name.value === ""){
    name.classList.add("error");
    return
  }
  if (text.value === ""){
    text.classList.add("error");
    return
  }

  const oldHTML = list.innerHTML;

  let newComment = {
    name: `${name.value}`, 
    date: now.toISOString(),
    isLiked: false,
    likes: counter,
    text: `${text.value}`.startsWith(">") 
      ? `<i>&#8220;${newTextValue[0]}&#8221;</i><br><br>` + `> ${newTextValue[1].replaceAll("<", "&lt;").replaceAll(">","&gt;")}, `+`${addAnswer.replaceAll("<", "&lt;").replaceAll(">","&gt;")}` 
      : `${text.value.replaceAll("<", "&lt;").replaceAll(">","&gt;")}`
  }
    
  fetch("https://wedev-api.sky.pro/api/v1/pris-sofia/comments", {
  method: 'POST',
  body: JSON.stringify(newComment),
  })
    .then((response) => response.json())
    .then(() => {
      return fetch("https://wedev-api.sky.pro/api/v1/pris-sofia/comments");
  })
    .then((response) => response.json())
    .then((data) => {
      updateComments(data.comments);
      commentsRender();
  })

  text.value = "";
  name.value = "";
}