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
    let List = document.createElement("li");
    List.textContent = getCurrentDateTime();
    List.classList.add("log-time");
    log_time.appendChild(List);
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
  log_time.removeChild(log_time.firstChild);
}
function getCurrentDateTime() {
  const currentDateTime = new Date();
  const day = ("0" + currentDateTime.getDate()).slice(-2);
  const hours = ("0" + currentDateTime.getHours()).slice(-2);
  const minutes = ("0" + currentDateTime.getMinutes()).slice(-2);
  const formattedDateTime = ` ${day}/${hours}:${minutes}`;
  return formattedDateTime;
}