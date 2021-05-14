var now = luxon.DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
//Live Date and Time for header//
setInterval(function () {
    var now = luxon.DateTime.now().toLocaleString({ weekday: 'long', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    luxon.DateTime.local().toString();
    luxon.DateTime.local();
    $('#currentDay').text(now);
}, 1000)

var milTime = luxon.DateTime.now().hour;
//compare time to schedule change class for color//
function colorClock7() {
    if (milTime === 7) {
        $(".col.col-lg-8.future.textarea.description.7").addClass("present").removeClass("past future");
    } if (milTime > 7) {
        $(".col.col-lg-8.future.textarea.description.7").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.7").addClass("future").removeClass("present past");
    };
};
function colorClock8() {
    if (milTime === 8) {
        $(".col.col-lg-8.future.textarea.description.8").addClass("present").removeClass("past future");
    } if (milTime > 8) {
        $(".col.col-lg-8.future.textarea.description.8").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.8").addClass("future").removeClass("present past");
    };
};
function colorClock9() {
    if (milTime === 9) {
        $(".col.col-lg-8.future.textarea.description.9").addClass("present").removeClass("past future");
    } if (milTime > 9) {
        $(".col.col-lg-8.future.textarea.description.9").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.9").addClass("future").removeClass("present past");
    };
};
function colorClock10() {
    if (milTime === 10) {
        $(".col.col-lg-8.future.textarea.description.10").addClass("present").removeClass("past future");
    } if (milTime > 10) {
        $(".col.col-lg-8.future.textarea.description.10").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.10").addClass("future").removeClass("present past");
    };
};
function colorClock11() {
    if (milTime === 11) {
        $(".col.col-lg-8.future.textarea.description.11").addClass("present").removeClass("past future");
    } if (milTime > 11) {
        $(".col.col-lg-8.future.textarea.description.11").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.11").addClass("future").removeClass("present past");
    };
};
function colorClock12() {
    if (milTime === 12) {
        $(".col.col-lg-8.future.textarea.description.12").addClass("present").removeClass("past future");
    } if (milTime > 12) {
        $(".col.col-lg-8.future.textarea.description.12").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.12").addClass("future").removeClass("present past");
    };
};
function colorClock13() {
    if (milTime === 13) {
        $(".col.col-lg-8.future.textarea.description.13").addClass("present").removeClass("past future");
    } if (milTime > 13) {
        $(".col.col-lg-8.future.textarea.description.13").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.13").addClass("future").removeClass("present past");
    };
};
function colorClock14() {
    if (milTime === 14) {
        $(".col.col-lg-8.future.textarea.description.14").addClass("present").removeClass("past future");
    } if (milTime > 14) {
        $(".col.col-lg-8.future.textarea.description.14").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.14").addClass("future").removeClass("present past");
    };
};
function colorClock15() {
    if (milTime === 15) {
        $(".col.col-lg-8.future.textarea.description.15").addClass("present").removeClass("past future");
    } if (milTime > 15) {
        $(".col.col-lg-8.future.textarea.description.15").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.15").addClass("future").removeClass("present past");
    };
};
function colorClock16() {
    if (milTime === 16) {
        $(".col.col-lg-8.future.textarea.description.16").addClass("present").removeClass("past future");
    } if (milTime > 16) {
        $(".col.col-lg-8.future.textarea.description.16").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.16").addClass("future").removeClass("present past");
    };
};
function colorClock17() {
    if (milTime === 17) {
        $(".col.col-lg-8.future.textarea.description.17").addClass("present").removeClass("past future");
    } if (milTime > 17) {
        $(".col.col-lg-8.future.textarea.description.17").addClass("past").removeClass("present future");
    } else {
        $(".col.col-lg-8.future.textarea.description.17").addClass("future").removeClass("present past");
    };
};
//run the clocks for each row//
colorClock7();
colorClock8();
colorClock9();
colorClock10();
colorClock11();
colorClock12();
colorClock13();
colorClock14();
colorClock15();
colorClock16();
colorClock17();


//retrieve all key value pairs from local storage and wrtie to DOM //
function loadEvents() {
    var userTextInputs = localStorage.getItem("userInputs");
    function displayUserTextInputs(type, message) {
        textarea.textContent = message;
        textarea.setAttribute("userInputs", type)
    }
}
loadEvents();



//saved to local storage on click //
var userTextInput = $(".textarea").textContent;
var allContnet = $("#content")

allContnet.on("click", ".saveBtn", function (event) {
    event.preventDefault();
    var userTextInput = document.querySelector("textarea").value;
    localStorage.setItem("userInputs", userTextInput);
});

//get from local storage
//make into JSON 
//loop through properties 
//week 4 activity 24 &2 5 

//data attr based on the time in first column// for save button and for text area //

//data attr on both text area and button //
