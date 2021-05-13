console.log(luxon.DateTime.now().toString())

setInterval(function () {
    luxon.DateTime.now();
    var now = luxon.DateTime.now();
    luxon.DateTime.now().toString();
    $('#currentDay').text(now);
    console.log(now)
}, 1000)

// change date format to be better looking //



