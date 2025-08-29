import { updateComments } from "./data.js";
import { commentsRender } from "../index.js";

export const fetchGET = () => {
    return fetch ("https://wedev-api.sky.pro/api/v1/pris-sofia/comments", {
     method: "GET"
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        updateComments(data.comments);
        commentsRender()
    })
}