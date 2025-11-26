// index.js
import { greeting } from "./greeting.js";
import "./styles.css";
import odinImage from "./odin.jpeg";

console.log(greeting);

//For eslilnt testing
let count = 0;

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
