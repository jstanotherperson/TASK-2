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
function edit() {

}

//Complete button
function complete() {
    alert("Changes Saved. Successfully!")

}
//Adding a new Task
function create() {

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
        <h4>${ttitle.value}</h4>
        <p>${details.value}</p>
        <br>
        <div class="sectioning">
    <span class="lefticon">
    <button onclick="datecalendar()"><i class='fas fa-calendar-alt'></i></button>
        <span>${calendar.value}</span>
    </span>
    <span class="righticon">
    <button onclick="edit()"><i class='fas fa-pencil-alt'></i></button>     
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