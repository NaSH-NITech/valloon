let UniqueID = null;
let log = document.getElementById("log");
let comeinButton = document.getElementById("comein");
let quitButton = document.getElementById("quit");


function clickBtn() {
  let Name = document.getElementById("name").value.trim();
  if (Name !== "" && UniqueID === null) {
    UniqueID = Name;
    let list = document.createElement("li");
    list.textContent = Name;
    list.classList.add("log-list");
    log.appendChild(list);
    document.getElementById("name").value = "";
    quitButton.style.visibility = "visible";
    comeinButton.style.display = "none";
  }
}
function Textchange() {
  if (UniqueID !== null) {
    UniqueID = null;

    while (log.firstChild) {
      log.removeChild(log.firstChild);
    }
    comeinButton.style.display = "inline";
    quitButton.style.visibility = "hidden";    
  }
}
