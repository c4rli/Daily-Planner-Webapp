var eventsArray = [];
var startTime = 9;
var endTime = 20;

function generateArray() {
    if (eventsArray.length == 0) {
        eventsArray = [];
        for (var i = startTime; i <= endTime; i++) {
            var time = moment(i, "h")
            eventsArray.push([time, i]);
        }
    }
}

function generateTimeblocks() {
    eventsArray.forEach(function (x, index) {
        createTimeblock(x, index);
    })
}

function createTimeblock(blockArray, index) {
    var time = blockArray[0];
    var eventTexr = blockArray[1];

    var timeblock = $("<div>").addClass("row").attr("data-index", index);
    var blockTime = $("<div>").text(time.format("h A")).addClass("hour px-3");
    var blockText = $("<textarea>").text(eventTexr).addClass("time-block flex-grow-1");
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

contanerEl.on("click", ".saveBtn", function (event) {
    var selectedEvent = $(event.target)
    console.log(selectedEvent.text());
    console.log(selectedEvent.parent().attr("data-index"));
    eventsArray[selectedEvent.parent().attr("data-index")][1] = selectedEvent.parent().children("textarea").val();

});

generateArray();
generateTimeblocks();



