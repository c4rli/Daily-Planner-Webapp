var eventsArray = [];
var startTime = 9;
var endTime = 20;

function generateArray() {
    if (eventsArray.length == 0) {
        eventsArray = [];
        for (let x = startTime; x <= endTime; x++) {
            var time = moment(x, "h")
            // .format("h a");
            eventsArray.push([time, ""]);
        }
    }
}

function generateTimeblocks() {
    eventsArray.forEach(function (x) {
        createTimeblock(x[0]);
    })
}

function createTimeblock(time) {
    var timeblock = $("<div>").addClass("row");

    var blockTime = $("<div>").text(time.format("h a")).addClass("hour px-3");
    var blockText = $("<textarea>").addClass("time-block flex-grow-1");
    var blockSave = $("<button>").text("Save").addClass("saveBtn");

    if (moment(time).isSame(currentDayTime, "hour")) {
        blockText.addClass("present");
    }
    else if (moment(time).isBefore(currentDayTime)) {
        blockText.addClass("past");
    }
    else if (moment(time).isAfter(currentDayTime)) {
        blockText.addClass("future");
    }

    timeblock.append(blockTime, blockText, blockSave);
    contanerEl.append(timeblock);
}

var currentDayTime = moment();
$("#currentDay").text(currentDayTime.format("MMMM Do YYYY h:mm a"));

var contanerEl = $("#mainContainer");

generateArray();
generateTimeblocks();



