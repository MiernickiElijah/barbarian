var now = luxon.DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
var userInputs = [
    { time: 7, input: "" },
    { time: 8, input: "" },
    { time: 9, input: "" },
    { time: 10, input: "" },
    { time: 11, input: "" },
    { time: 12, input: "" },
    { time: 1, input: "" },
    { time: 2, input: "" },
    { time: 3, input: "" },
    { time: 4, input: "" },
    { time: 5, input: "" },
];

//Live Date and Time for header//
setInterval(function () {
    var now = luxon.DateTime.now().toLocaleString({ weekday: 'long', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    luxon.DateTime.local().toString();
    luxon.DateTime.local();
    $('#currentDay').text(now);
}, 1000)

var milTime = luxon.DateTime.now().hour;
//compare time to schedule change class for color//
function colorClock() {
    if (milTime === 7) {
        $(".col.col-lg-8.future.textarea.description.7").addClass("present").removeClass("past future");
    } if (milTime > 7) {
        $(".col.col-lg-8.future.textarea.description.7").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.7").addClass("future").removeClass("present past");
    };
};
colorClock();
console.log(milTime);



//get military time from luxon//
/* if (current() < .time) then add future class


if (now() > .time) then add past class
if (now() === .time) then add present class */

function compareTime() {
}
compareTime();


//key value pair [time : ""] saved to local storage //
$("#saveBtn").click(function (event) {
    var userEvent = document.getElementById("description").value;
    localStorage.setItem("time", userEvent);
});

//retrieve all key value pairs from local storage and wrtie to DOM //
function loadEvents() {
    var userEvent = localStorage.getItem("time");
    document.getElementsById("description").value;
}
//get from local storage
//make into JSON 
//loop through properties 
//week 4 activity 24 &2 5 



//data attr based on the time in first column// for save button and for text area //

//data attr on both text area and button //
