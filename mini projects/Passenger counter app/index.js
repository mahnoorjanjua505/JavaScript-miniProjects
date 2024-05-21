// Subway Counter App 
let countPASS = document.getElementById("count-num");
let counts = 0;


function increment(){
counts += 1;
countPASS.innerText = counts;
}

let saveEL = document.getElementById("save-el");
function save(){
savedEntries = counts + " - ";
saveEL.textContent+= savedEntries; 
counts=0;
countPASS.innerText = 0;

}