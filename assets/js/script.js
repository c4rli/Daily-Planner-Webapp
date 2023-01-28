var eventsArray = localStorage.getItem("highscoresStorage");
var startTime = 9;
var endTime = 17;

function generateArray() {
    if (eventsArray == '' || eventsArray === null) {
        eventsArray = [];
        for (var i = startTime; i <= endTime; i++) {
            var time = moment(i, "h")
            eventsArray.push([time, ""]);
        }
        localStorage.setItem("savedEvents", JSON.stringify(eventsArray));
    }
    else {
        eventsArray = JSON.parse(localStorage.getItem("savedEvents"));
    }
}

function generateTimeblocks() {
    eventsArray.forEach(function (x, index) {
        createTimeblock(x, index);
    })
}

function createTimeblock(blockArray, index) {
    var time = moment(blockArray[0]);
    var eventText = blockArray[1];

    var timeblock = $("<div>").addClass("time-block-container d-flex flex-row mb-3 mx-auto")
        .attr("data-index", index);
    var blockTime = $("<div>").text(time.format("h A"))
        .addClass("hour px-3");
    var blockText = $("<textarea>").text(eventText)
        .addClass("time-block flex-grow-1")
        .attr("placeholder", "Enter a task ...");
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
$("#currentDay").text(currentDayTime.format("Do [of] MMMM YYYY"));

var contanerEl = $("#mainContainer");

contanerEl.on("click", ".saveBtn", function (event) {
    var selectedEvent = $(event.target)
    console.log(selectedEvent.text());
    console.log(selectedEvent.parent().attr("data-index"));
    eventsArray[selectedEvent.parent().attr("data-index")][1] = selectedEvent.parent().children("textarea").val();
    localStorage.setItem("savedEvents", JSON.stringify(eventsArray));
});

generateArray();
generateTimeblocks();



