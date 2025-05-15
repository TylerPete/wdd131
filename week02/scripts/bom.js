const inp = document.querySelector("#favchap");
const butt = document.querySelector("button");
const list = document.querySelector("list");

const chap = document.createElement("li");
const delButt = document.createElement("button");

chap.textContent = inp.value;
delButt.textContent = "❌";

chap.appendChild(delButt);
list.appendChild("chap");