class Task{
    constructor(ttitle,details)
    {
        this.ttitle=ttitle;
        this.details=details;
    }
}

function dateload(){
    document.getElementById("displayingcurrentdate").innerText=new Date();

}


function add() {
    document.getElementById("wrapper").style.display = "block";
}
//For Home Page
function homepage(){
    document.getElementById("left").style.background = "aqua";
}

//For enquiry button
function enquiry(){
    document.getElementById("enquirysection").style.display = "block";

}
function goback(){
    document.getElementById("enquirysection").style.display = "none";

}

//For setting button
function settingpart()
{
    

    document.getElementById("settingsection").style.display = "block";
 
}
function back(){
    document.getElementById("settingsection").style.display = "none";

}



function datecalendar() {

}
function edit(me) {
    document.getElementById("ad").innerText="Edit";
    document.getElementById("del").style.display="none";
    const div=me.parentNode.parentNode.parentNode;
    document.getElementById("ttitle").value= div.getElementsByTagName("h4")[0].innerHTML;
    document.getElementById("details").value= div.getElementsByTagName("p")[0].innerHTML;
    document.getElementById("wrapper").style.display = "block";


}

//Complete button
function complete() {
    alert("Changes Saved. Successfully!")

}
//Adding a new Task
function create() {

let a=document.getElementById("ttitle").value;
let b=document.getElementById("details").value;

let taskList = [];

if(localStorage.getItem("taskList")!=null){
    let readjson = localStorage.getItem("taskList");
    taskList = JSON.parse(readjson);
}

let currentTask = new Task(a,b);

taskList.push(currentTask);

let jsonCurrent = JSON.stringify(taskList);
localStorage.setItem("taskList",jsonCurrent);

display();

    


}


function display(){
    let readjson = localStorage.getItem("taskList");
let obj = JSON.parse(readjson);

console.log("objjjjj:");
    console.log(obj[0]);


    for(let i=obj.length-1; i>=0; i--){
        let tt = obj[i].ttitle;
        let dd = obj[i].details;

        console.log(tt+dd);

        var x = document.getElementById("right");
    var div = document.createElement("div");
    div.style.padding = "5px";
    div.style.margin = "5px";
    div.style.width = "auto";
    div.style.height = "auto";
    div.style.background = "white";
    div.style.display = "block";
    div.style.border = "rgba(128, 128, 128, 0.448) 1px solid";


    div.innerHTML =
        `
        <h4>${tt}</h4>
        <p>${dd}</p>
        <br>
        <div class="sectioning">
    <span class="lefticon">
    <button onclick="datecalendar()"><i class='fas fa-calendar-alt'></i></button>
        <span>${calendar.value}</span>
    </span>
    <span class="righticon">
    <button onclick="edit(this)"><i class='fas fa-pencil-alt'></i></button>     
    <span>Edit</span>
    <button onclick="remove(this)"><i class='fa fa-close'></i></button>      
    <span>Remove</span>
    <button onclick="complete()"><i class='fa fa-check'></i></button>      
    <span>Complete</span>
    </span>
</div>`;

x.appendChild(div);
    document.getElementById("wrapper").style.display = "none";



    }

}

//For Deleting the tasks from the task Bar
function remove(me) {
    



    document.getElementById("right").removeChild(me.parentNode.parentNode.parentNode);
    document.getElementById("wrapper").style.display = "none";
}

//If you dont want the task to be displayed on the taskbar
function deletebar() {
    document.getElementById("wrapper").style.display = "none";
    alert("This item will not be added in the task bar!")

}