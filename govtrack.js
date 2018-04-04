// Challenge:
const articleRef = document.querySelector("#lastgraf");
console.log(articleRef);

// Advanced Challenge:

// create p node, assign to variable
const node = document.createElement("p"); 
// give id to p node
node.setAttribute("id", "congressional-district"); 
// create text node, assign to variable
const textnode = document.createTextNode("congressional district 5"); 
// place text in paragraph
node.appendChild(textnode); 
// append <p> in element with id "lastgraf"
document.getElementById("lastgraf").appendChild(node); 