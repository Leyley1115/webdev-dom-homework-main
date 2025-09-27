import { commentBox, list, add} from "./modules/data.js";
import { like } from "./modules/like.js";
import { answer, addAnswerFunc } from "./modules/answer.js";
import { fetchGET } from "./modules/api.js";
import { addComment } from "./modules/newComment.js";
import { renderReg} from "./modules/renderRegistration.js"
import { renderLogin } from "./modules/renderLogin.js";

fetchGET();
list.innerHTML=`Пожалуйста, подождите. Комментарии загружаются...`;

export const commentsRender = () => {
  
  const commentsHTML = commentBox.map((commentOne, index) => {
    const activeClass = commentOne.isLiked ? " -active-like" : "";

  function formatDate(inputDate) {
    const d = new Date(inputDate);
    const format = n => String(n).padStart(2, "0");

    return `${format(d.getDate())}.${format(d.getMonth() + 1)}.${d.getFullYear()} ${format(d.getHours())}:${format(d.getMinutes())}`;
    }

    return `<li class="comment" data-answer="${index}">
      <div class="comment-header">
        <div>${commentOne.author.name.replaceAll("<", "&lt;").replaceAll(">","&gt;")}</div>
        <div>${formatDate(commentOne.date)}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${commentOne.text}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${commentOne.likes}</span>
          <button class="like-button${activeClass}" data-index="${index}"></button>
        </div>
      </div>
    </li>
    `
  }).join("");

  list.innerHTML = commentsHTML;

  like();
  answer();
}

const authoForm = () => {
  const app = document.querySelector(".app");
  const form = document.querySelector(".add-form");
  form.style.display = 'none';
  app.style.padding = '0 0 0 0';
  
  app.innerHTML=`
  <p> Пройдите <span id="autho"><b><i>авторизацию</b></span>, чтобы оставлять и оценивать комменитарии.</p>`
  const autho = document.getElementById(`autho`);
    autho.addEventListener("mouseover", () => {
    autho.style.textDecoration = "underline";
    autho.style.cursor = "pointer";
    });
    autho.addEventListener("mouseout", () => {
    autho.style.textDecoration = "none";
    });
  autho.addEventListener("click", () => {
  renderLogin();

  setTimeout(() => {
    const reg = document.getElementById("reg");
    if (reg) {
      reg.addEventListener("click", () => {
        renderReg();
      });
    }
  }, 0);

});
}
authoForm();

addAnswerFunc();

add.addEventListener("click", () => {addComment()});