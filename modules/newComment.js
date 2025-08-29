import { now, text, name, counter, newTextValue, addAnswer, textForm, container } from "./data.js";
import { fetchGET } from "./fetch.js";

export function addComment() {
  name.classList.remove("error");
  text.classList.remove("error");
  if (name.value === ""){
    name.classList.add("error");
    return
  }
  if (text.value === ""){
    text.classList.add("error");
    return
  }

  let newComment = {
    name: `${name.value}`, 
    date: now.toISOString(),
    isLiked: false,
    likes: counter,
    text: `${text.value}`.startsWith(">") 
      ? `<i>&#8220;${newTextValue[0]}&#8221;</i><br><br>` + `> ${newTextValue[1].replaceAll("<", "&lt;").replaceAll(">","&gt;")}, `+`${addAnswer.replaceAll("<", "&lt;").replaceAll(">","&gt;")}` 
      : `${text.value.replaceAll("<", "&lt;").replaceAll(">","&gt;")}`
  }

  textForm.style.display = "none";
  const newDiv = document.createElement("ul");
  newDiv.textContent = "Комментарий добавляется...";
  container.appendChild(newDiv);

  fetch("https://wedev-api.sky.pro/api/v1/pris-sofia/comments", {
  method: 'POST',
  body: JSON.stringify(newComment),
  })
  .then(() => {
      return fetchGET();
  })
  .then(() => {
    newDiv.style.display = "none";
    textForm.style.display = "";
  })

  text.value = "";
  name.value = "";
}
