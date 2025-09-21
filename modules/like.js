import { commentBox } from "./data.js";
import { token, host } from "./api.js";
import { delay } from "./likeLoad.js";
import { commentsRender } from "../index.js";

export const like = () => {
  const likeButtons = document.querySelectorAll(".like-button");

  for (const likeButton of likeButtons) {
    likeButton.addEventListener("click", async (event) => {
      event.stopPropagation();
      const index = likeButton.dataset.index;
      const comment = commentBox[index];
      console.log(commentBox[index]);

      try {
        likeButton.classList.add("-loading-like");
        const response = await fetch(`${host}/${comment.id}/toggle-like`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.status === 401){
          throw new Error('Авторизуйтесь, чтобы оценивать комментарии')
        }
        if (response.status === 200) {
          await delay();

          comment.likes += comment.isLiked ? -1 : 1;
          comment.isLiked = !comment.isLiked;
          likeButton.classList.remove("-loading-like");
          commentsRender();
        } 
      } catch (error) {
        likeButton.classList.remove("-loading-like");
        alert(error.message);
      }
    });
  }
};
