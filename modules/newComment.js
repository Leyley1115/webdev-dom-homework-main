import { now, text, name, counter, newTextValue, addAnswer, textForm, container } from "./data.js";
import { host, token } from "./api.js";

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

  fetch(host, {
  method: 'POST',
  body: JSON.stringify(newComment),
        forceError: true,
  headers: {
          Authorization: `Bearer ${token}`
      }
  })
  .then((response) => {
    if (response.status === 201){
      text.value = "";
      return response.json();
    } else {
      if (response.status === 400){
        throw new Error ('Имя или текст короче 3 символов');
      }
      if (response.status === 401){
        throw new Error ('Пройдите авторизацию');
      }
    }
  })
  .catch((error) => {
  if (error instanceof TypeError) {
  alert('Сервер сломался, попробуй позже');
  } else {
    alert(error.message.replace(`Error:`));
  }
  })
  .finally(() => {
    newDiv.style.display = "none";
    textForm.style.display = "";
  })
}
