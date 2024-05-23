
let myLead = [];
const inputEL = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")
const TABbtn = document.getElementById("tab-btn");
const DLTmyLeads = document.getElementById("dlt-btn");

const MyLeadfromLS = JSON.parse(localStorage.getItem("myLead"));

if (MyLeadfromLS) {
    myLead = MyLeadfromLS
    render(myLead)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/mahnoor-janjua-aab283265/"}
// ]  hard core link enetered to check if it works on put global var

TABbtn.addEventListener('click', function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        //grab the url of the current tab      
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify(myLead));
        render(myLead);


    })

})

// Render the leads in the unordered list using text.content 
function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li> 
    <a  target= _blank href =" ${leads[i]}" > 
        ${leads[i]}
        </a>
        </li>
        `
    }
    ulEL.innerHTML = listItems
}
// clicking the btn thru dblclick
DLTmyLeads.addEventListener('dblclick', function () {
    console.log("Logging out by double click through addEventListener");  // checking if my btn works!
    localStorage.clear();
    myLead = [];
    render(myLead);
});



// clicking the btn thru addEventListener 
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
    console.log("logging out by click thru addeventListner")

    myLead.push(inputEL.value)
    inputEL.value = "";


    // storing myLead array into localStorage
    localStorage.setItem("myLead", JSON.stringify(myLead))

    //  calling out the function from which our listItems will be shown when its clicked
    render(myLead);
})






