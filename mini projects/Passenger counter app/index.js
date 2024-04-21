// simple calculation opertion
let myage = 25;
let humanDogRatio = 7;
let mydogAge = myage * humanDogRatio;
console.log(mydogAge);

// increment decrement 
let count = 2;
count = 2 + 1
console.log(count);
// this will increment plus 1 in the value assigned to count tht was 2 
// similarly with the case with decrement 
count = count - 1; 
console.log(count);
// this will give ans 2 rather than 1 bcuz it subtracted 1 from the already incremented value which was 3 at that moment.  we decrement 1 from the variable 'count' that was 3 after the increment process.

 function increment(){
     console.log("the  increment button is being clicked!!");
 }
//  function save(){
//      console.log(counts);
//  }
//  save();
// we put the onclick attribute into the button and add 'increment' function, nd then in JS file we made a function called 'increment' where i write the string so whenever the button is clicked it will show tht msg in the console 
//  ---- 

// Task  
// create a var that incerement the lap each time with one 
// Run it three times 
let incrementLap = 0;
 function countIncrement(){
    incrementLap = incrementLap + 1;
    console.log(incrementLap);
 }
 countIncrement();
 countIncrement();
 countIncrement();

//  Sunway Counter App 
// let countPASS = document.getElementById("count-num");
// let con = 0;
// function increment(){
//     con = con + 1;
//     countPASS.innerText = con
// }
// each time button is pressed it shd incremnt the value from the last one 
// bcuz of timing issue: element with the ID “count-num” immediately runs while the script was being loaded so when the Dom isn't being constructed it will not run our script thts why we run this code in HTML file instead so the DOM loaded with the script tag alongside .
  
// Strings 
let usrnme= "Sami";
let msg = "You have 3 new notifications";
// now concatenate these messages with some other thngs too 
// we are making new string to store tht msg to log out together 
let usermsg = usrnme + " ," + msg + "!";
console.log(usermsg);
//  --- 
let num=1;
let points = "10"
let total = 1 + 10;
console.log(total)