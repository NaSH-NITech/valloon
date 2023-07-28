function clickBtn() {
  
  let Text = document.getElementById("name");
  let text = document.createTextNode(Text.value);
  let li = document.createElement("li");
  const UniqueID = "element_" + Date.now();
  li.setAttribute("id", UniqueID)
  let list = document.getElementById('come');
  li.appendChild(text);
  list.appendChild(li);
  const styleElement = document.createElement("style");
  styleElement.textContent = `#${UniqueID} { list-style: none; border-bottom: 1px solid; }`;
  document.head.appendChild(styleElement);

  let come = document.getElementById("comein");
  come.style.display ='none';
  let quit = document.getElementById("quit");
  quit.style.visibility ='visible';
}
function Textchange() {
  // document.getElementById("UniqueID");
  // Element.remove();
  window.location.reload();
}
