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

    if (comment.isLiked === false) {
      comment.likes++;
      comment.isLiked = true;
      likeButton.classList.add("-active-like");
      
    } else {
      comment.likes--;
      comment.isLiked = false;
      likeButton.classList.remove("-active-like");
    }

    likesCounter.textContent = comment.likes;
    commentsRender();
    });
  }
};