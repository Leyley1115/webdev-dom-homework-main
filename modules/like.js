// // import { commentsRender } from "../index.js";
// // import { fetchGET, token } from "./api.js";
// // import { delay } from "./likeLoad.js";
// // import { host } from "./api.js";

// // export const like = () => {
// //   const likeButtons = document.querySelectorAll(".like-button");

// //   for (const likeButton of likeButtons) {
// //     likeButton.addEventListener("click", (event) => {
// //       event.stopPropagation();
// //       const index = likeButton.dataset.index;

// //     const fetchLike = (index) => {
// //     return fetchGET()
// //     .then((data) => {
// //       const comment = data.comments[index];

// //       return fetch(`${host}/${comment.id}/toggle-like`, {
// //         method: "POST",
// //         headers: {
// //           Authorization: `Bearer ${token}`
// //         }
// //       })
// //     .then((response) => {
// //       if (response.status === 200){
// //         likeButton.classList.add("-loading-like");
// //         return delay(1000).then(() => {
// //           likeButton.classList.remove("-loading-like");
// //           commentsRender();
// //           return response.json();
// //         });
// //       }
// //       if (response.status === 401){
// //         throw new Error('Авторизуйтесь, чтобы оценивать комментарии')
// //       }
// //       })
// //     .catch((error) => {
// //       alert(error.message);
// //       });
// //       })
// //     };
// //     fetchLike(index);
// //     });
// //   }
// // };

// import { commentsRender } from "../index.js";
// import { fetchGET, token } from "./api.js";
// import { delay } from "./likeLoad.js";
// import { host } from "./api.js";

// export const like = () => {
//   const likeButtons = document.querySelectorAll(".like-button");

//   for (const likeButton of likeButtons) {
//     likeButton.addEventListener("click", async (event) => {
//       event.stopPropagation();
//       const index = likeButton.dataset.index;

//       try {
//         likeButton.classList.add("-loading-like");

//         const data = await fetchGET();
//         const comment = data.comments[index];

//         const response = await fetch(`${host}/${comment.id}/toggle-like`, {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         if (response.status === 200) {
//           await delay(1000);
//           likeButton.classList.remove("-loading-like");
//           await response.json();
//           commentsRender();
//         } else if (response.status === 401) {
//           throw new Error("Авторизуйтесь, чтобы оценивать комментарии");
//         } else {
//           throw new Error("Ошибка при отправке лайка");
//         }
//       } catch (error) {
//         likeButton.classList.remove("-loading-like");
//         alert(error.message);
//       }
//     });
//   }
// };
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
