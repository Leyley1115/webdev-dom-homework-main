import { text, index, commentBox, setAddAnswer, setIndex, setnewTextValue } from "./data.js";

export function answer(){
  const commAll = document.querySelectorAll(".comment");

  for (const answerCom of commAll){
    answerCom.addEventListener("click", () =>{
    let index = answerCom.dataset.answer;
    setIndex(index);
    const comment = commentBox[index];

    comment.comment = comment.comment.replaceAll(`<i>`, "").replaceAll(`</i>`, "").replaceAll(`&#8220;`, "").replaceAll(`&#8221;`, "");

    text.value=`> ${comment.comment}

    ${comment.name}, `.replaceAll(`<br>`, "");
  
    return setnewTextValue([comment.comment, comment.name]) && setIndex(index)
    })
  }
}

export const addAnswerFunc = () => {
  text.addEventListener("input", (event) => {
    const addAnswer = event.target.value
      .replace(`${commentBox[index].comment.replaceAll(`<br>`, "")}`, "")
      .replace(`${commentBox[index].name}`, "")
      .replace(",", "")
      .replace("     ", "")
      .replace(">", "");
    setAddAnswer(addAnswer);
  });
};