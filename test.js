let addbtn;
let randomButton;
let arr = [];
let item = document.getElementById("addItems").value;
let list = document.getElementById("list");
document.addEventListener('DOMContentLoaded', init);

function init(){
  addbtn = document.getElementById('addButton');
  document.querySelector('#addButton').addEventListener('click', addFld);
  document.querySelector('#shuffle').addEventListener('click', getShuffle);
}

function getShuffle(){
  let rand = arr[Math.floor(Math.random() * arr.length)];
  let newX= document.getElementById("random");
  if(rand != undefined){
    newX.innerHTML = rand;
    return rand;
    
  } else {
    return false;
  }
};

function addFld(){
  let item = document.getElementById("addItems").value;
  let items = item.split(',');
  for (let x=0; x < items.length; x++){
    let newX = document.createElement('li');
    newX.appendChild(document.createTextNode(items[x]));
    list.appendChild(newX);
    arr.push(items);
  } 
}



