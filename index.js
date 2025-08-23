import { commentBox, list } from "./modules/data.js";
import { like } from "./modules/like.js";
import { answer, addAnswerFunc } from "./modules/answer.js";

export const commentsRender = () => {
    const commentsHTML = commentBox.map((commentOne, index) => {
    return `<li class="comment" data-answer="${index}">
          <div class="comment-header">
            <div>${commentOne.name.replaceAll("<", "&lt;").replaceAll(">","&gt;")}</div>
            <div>${commentOne.data}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${commentOne.comment}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${commentOne.likes}</span>
              <button class="like-button ${commentOne.likeActive}" data-index="${index}"></button>
            </div>
          </div>
        </li>`
    }).join("");

  list.innerHTML = commentsHTML;

  like();
  answer();
}
commentsRender();
addAnswerFunc();