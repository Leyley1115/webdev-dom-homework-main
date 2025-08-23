import { commentBox, text, name, list, counter, newTextValue, addAnswer } from "./data.js";
import {commentsRender} from "../index.js";

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

  let options = {
    hour: 'numeric',
    minute: 'numeric'
  }
      
  let now = new Date();
  now = now.toLocaleDateString('ru-RU') + " " + now.toLocaleTimeString('ru-RU', options);

  const oldHTML = list.innerHTML;

  let newComment = {
    name: `${name.value}`, 
    data: `${now}`, 
    comment: `${text.value}`.startsWith(">") ? `<i>&#8220;${newTextValue[0]}&#8221;</i><br><br>` + `> ${newTextValue[1].replaceAll("<", "&lt;").replaceAll(">","&gt;")}, `+`${addAnswer.replaceAll("<", "&lt;").replaceAll(">","&gt;")}` : `${text.value.replaceAll("<", "&lt;").replaceAll(">","&gt;")}`,
    likes: `${counter}`,
    likeActive: ""
  }

  commentBox.push(newComment);
    
  text.value = "";
  name.value = "";

  commentsRender();
}