var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do YYYY"));

var contanerEl = $("#mainContainer");


for (var i = 9; i < 17; i++){
    createTimeblock(i);
}

function createTimeblock(time) {
    var timeblock = $("<div>").addClass("row");

    var blockTime = $("<div>").text(time + ":00").addClass("hour px-3");
    var blockText = $("<textarea>").addClass("time-block past flex-grow-1");
    var blockSave = $("<button>").text("Save").addClass("saveBtn");

    timeblock.append(blockTime);
    timeblock.append(blockText);
    timeblock.append(blockSave);
    contanerEl.append(timeblock);
}

