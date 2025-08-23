import { commentBox } from "./data.js";
import { commentsRender } from "../index.js";

export const like = () => {
  const likeButtons = document.querySelectorAll(".like-button");

  for (const likeButton of likeButtons) {
    likeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const index = likeButton.dataset.index;
      const comment = commentBox[index];
      const likesCounter = likeButton.parentElement.querySelector(".likes-counter");

    if (comment.likeActive === "") {
      comment.likes++;
      comment.likeActive = "-active-like";

    } else {
      comment.likes--;
      comment.likeActive = "";
    }

    likesCounter.textContent = comment.likes;
    commentsRender();
    });
  }
};