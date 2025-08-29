import { commentBox } from "./data.js";
import { commentsRender } from "../index.js";
import { delay } from "./likeLoad.js";

export const like = () => {
  const likeButtons = document.querySelectorAll(".like-button");

  for (const likeButton of likeButtons) {
    likeButton.addEventListener("click", async (event) => {
      event.stopPropagation();
      const index = likeButton.dataset.index;
      const comment = commentBox[index];
      likeButton.classList.add("-loading-like");
      await delay(1000);
      likeButton.classList.remove("-loading-like");

    if (comment.isLiked === false) {
      comment.likes++;
      comment.isLiked = true;
      likeButton.classList.add("-active-like");
      
    } else {
      comment.likes--;
      comment.isLiked = false;
      likeButton.classList.remove("-active-like");
    }

    commentsRender();
    });
  }
};