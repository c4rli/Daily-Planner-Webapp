var eventsArray = [];
var startTime = 9;
var endTime = 17;

function generateArray() {
    if (eventsArray.length == 0) {
        eventsArray = [];
        for (let x = startTime; x <= endTime; x++) {
            var time = moment(x, "h").format("h a");
            eventsArray.push([time, ""]);
        }
    }
    // $("#4a").text(time.format("h:mm:s a"));
}

function generateTimeblocks() {
    eventsArray.forEach(function(x){
        createTimeblock(x[0]);
    })
}

var currentDayTime = moment("25 March 2023 13:30", "D MMMM YYYY h:mm");
// var currentDayTime = moment();
$("#currentDay").text(currentDayTime.format("MMMM Do YYYY h:mm a"));

var contanerEl = $("#mainContainer");




generateArray();
generateTimeblocks();

function createTimeblock(time) {
    var timeblock = $("<div>").addClass("row");

    var blockTime = $("<div>").text(time).addClass("hour px-3");
    var blockText = $("<textarea>").addClass("time-block flex-grow-1");
    var blockSave = $("<button>").text("Save").addClass("saveBtn");

    // moment(time,"h a").format()
    
    // if (moment(time,"h a").isBefore(currentDayTime.format("h a"))) {
    //     blockText.addClass("past");
    // } 

    if (moment(time,"h a").isBefore(currentDayTime.format("h a"))) {
        blockText.addClass("past");
    } 
    // else if (moment(time,"h a").isAfter(currentDayTime.format("h a"))) {
    //     blockText.addClass("future");
    // } 
    // if (time == currentDayTime.format("h a")){
    //     blockText.addClass("present");
    // }

    timeblock.append(blockTime);
    timeblock.append(blockText);
    timeblock.append(blockSave);
    contanerEl.append(timeblock);
}

