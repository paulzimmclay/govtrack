const articleRef = document.querySelector("#lastgraf");

console.log(articleRef);

const node = document.createElement("p");
node.setAttribute("id", "congressional-district");
const textnode = document.createTextNode("congressional district 5");
node.appendChild(textnode);
document.getElementById("lastgraf").appendChild(node);