const inputBox = document.getElementById('input-box')
const containerList = document.querySelector('.container-list')

function addTask() {
   if (inputBox.value === "") {
    alert('Please write something');
   }
   else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    containerList.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "&#128473;";
    li.appendChild(span);
   }
   inputBox.value = '';
   saveDate() 
}

containerList.addEventListener('click', function(e) {
    if(e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDate() 
    }
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDate() 
    }
}, false); 

function saveDate() 
{
  localStorage.setItem("data", containerList.innerHTML);
}
function showTask() {
  containerList.innerHTML = localStorage.getItem("data");
}
showTask();
