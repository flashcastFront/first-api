import {Comment} from "./new/comment.js";
import {Promises} from "./new/promises.js";
import {Async_await} from "./new/async_await.js";
import {Generate} from "./new/generate.js";

const firstComment = new Comment("First comment from me")
const secondComment = new Generate()
const thirdComment = new Comment("Third comment from me")
const promiseOne = new Promises();
const asyncAwait = new Async_await();


document.getElementById("app").innerHTML = `
<h1>Hello Vanilla JS!</h1>
<div>
  We use
    <h3>${firstComment.text}</h3>
    <h3 id="number">0</h3>
    
    <button id="button">Click mich</button>
</div>
`;
const article = Comment.mergeComments('1', 3);

console.log(article);

const button = document.getElementById("button");

function callVotes() {
    let comment = document.getElementById("number");
    comment.innerHTML = firstComment.upvote();
    // static methoden werden nicht an refencen Objecten (NEW) übergeben
    promiseOne.oneMethodePromise();

}

button.addEventListener('click', callVotes);


