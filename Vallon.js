
// document.getElementsByClassName('come-in').addEventListener('click',function(){
//    var element = document.getElementById('flame');
//    if (element.style.display === 'none') {
//       element.style.display = 'block';  
//     } else {
//       element.style.display = 'none';  
// }

// })


// function clickBtn() {
//   const t1 = document.getElementById("name").value;
//   document.getElementById("h1").textContent = t1;
// }

// function Textchange() {
//   document.getElementById("h1").innerHTML = "name";
// }
function clickBtn() {
  let Text = document.getElementById("name");
  let text = document.createTextNode(Text.value);
  let li = document.createElement("li");
  let list = document.getElementById('come');
  li.appendChild(text);
  list.appendChild(li);
}


