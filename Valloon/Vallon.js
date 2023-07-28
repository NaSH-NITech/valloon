function clickBtn() {
  
  let Text = document.getElementById("name");
  let text = document.createTextNode(Text.value);
  let li = document.createElement("li");
  const uniqueID = "element_" + Date.now();
  li.setAttribute("id", uniqueID)
  let list = document.getElementById('come');
  li.appendChild(text);
  list.appendChild(li);
  const styleElement = document.createElement("style");
  styleElement.textContent = `#${uniqueID} { list-style: none; border-bottom: 1px solid; }`;
  document.head.appendChild(styleElement);

  let come=document.getElementById("comein");
  come.style.display='none';
  let quit= document.getElementById("quit");
  quit.style.visibility='visible';
}
function Textchange() {
  const retire = dicument.getElementById("uniqueID");
  element.remove()
}