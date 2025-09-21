import { text, index, commentBox, setAddAnswer, setIndex, setnewTextValue } from "./data.js";

export function answer(){
  const commAll = document.querySelectorAll(".comment");

  for (const answerCom of commAll){
    answerCom.addEventListener("click", () =>{
    let index = answerCom.dataset.answer;
    setIndex(index);
    const comment = commentBox[index];

    comment.text = comment.text
      .replaceAll(`<i>`, "")
      .replaceAll(`</i>`, "")
      .replaceAll(`&#8220;`, "")
      .replaceAll(`&#8221;`, "");
    text.value=`> ${comment.text}
    ${comment.author.name}, `.replaceAll(`<br>`, "");
  
    return setnewTextValue([comment.text, comment.author.name]) && setIndex(index)
    })
  }
}

export const addAnswerFunc = () => {
  text.addEventListener("input", (event) => {
    const addAnswer = event.target.value
      .replace(`${commentBox[index].text.replaceAll(`<br>`, "")}`, "")
      .replace(`${commentBox[index].author.name}`, "")
      .replace(",", "")
      .replace("     ", "")
      .replace(">", "");
    setAddAnswer(addAnswer);
  });
};