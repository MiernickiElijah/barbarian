var now = luxon.DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });



// change date format to be better looking "cccc, LLL dd, yyyy, hh:mm:ss" //
setInterval(function () {
    var now = luxon.DateTime.now().toLocaleString({ weekday: 'long', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    luxon.DateTime.local().toString();
    luxon.DateTime.local();
    $('#currentDay').text(now);
}, 1000)


//data attr based on the time in first column// for save button and for text area //

//data attr on both text area and button //

//key value pair [time : ""] saved to local storage //

//retrieve all key value pairs from local storage and wrtie to DOM //
