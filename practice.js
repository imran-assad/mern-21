let para = document.createElement("p");
para.innerText = "hello i am red";
document.querySelector("body").append(para);

para.classList.add("red");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I am in a div";
para2.innerText = "Me too";

div.append(h1);
div.append(para2);

document.querySelector("body").append(div);
