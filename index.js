import { commentBox, list, updateComments } from "./modules/data.js";
import { like } from "./modules/like.js";
import { answer, addAnswerFunc } from "./modules/answer.js";

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
    </li>`;
  }).join("");

  list.innerHTML = commentsHTML;

  like();
  answer();
}

fetch ("https://wedev-api.sky.pro/api/v1/pris-sofia/comments", {
  method: "GET"
})
.then((response) => {return response.json()})
.then((data) => {
  updateComments((data.comments));
  console.log(commentBox);
  commentsRender();
});

addAnswerFunc();