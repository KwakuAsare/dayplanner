function currentDay() {
    
    var toDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(toDay);
}
currentDay();

for (var i = 9; i <= 17; i++) {
    var hour = "";
    
    var momentHour = moment(i, 'HH').format('h:mm');
   
    if (i >= 12) {
        hour = momentHour + "pm";
    }else {
        hour = momentHour + "am";
    }

    var hourlyPlans = $("<div>").attr({class: "col-md-2 hour", id: "i"}).text(hour);
    var hourlyInfo = $("<div>").attr({class: "col-md-9 description", id: "desc"+i}).html("<textarea></textarea>");
    var saveButton =  $("<div>").attr("class", "col-md-1 saveBtn");

    var timeBlockRow = $("<div>").attr("class", "row time-block").append(hourlyPlans,hourlyInfo,saveButton);

    $(".container").append(timeBlockRow);
    
    $(".saveBtn").html("<i class='far fa-save fa-lg'></i>");

}

for (var i = 9; i < 18; i++) {
    if (momentHour === moment().format('h a')) { 
    //if (moment(document.getElementsByClassName("hour")[i].id, 'HH').format('h a') === moment().format('h a')) {
        document.getElementsByClassName("hour")[i].parentElement.setAttribute("class", "row time-block present");
    } //else if (moment(document.getElementsByClassName("hour")[i].id, 'HH').format('HH ') < moment().format('HH')) {
        else if (momentHour < moment().format('HH')) {
        document.getElementsByClassName("hour")[i].parentElement.setAttribute("class", "row time-block past");
        }else {
        document.getElementsByClassName("hour")[i].parentElement.setAttribute("class", "row time-block future");
    }
}




scheduleArr = [];
schedule = {};



function savePlans() {
    localStorage.setItem("workPlans", JSON.stringify(scheduleArr));

}

function init() {
    var storedPlans = JSON.parse(localStorage.getItem("workPlans"));
    if (storedPlans) {
        scheduleArr = storedPlans;
        displayEvents();
    }
}

function displayEvents() {
    for (var i = 0; i < scheduleArr.length; i++) {
        $(".description"+scheduleArr[i].id).children().text(scheduleArr[i].desc);    
    }
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    console.log("save me");
    var plansInfoText = $(this).parent().children(".description").children().val().trim()
    var scheduleID = $(this).parent().children(".hour").attr("id");
    schedule.id = scheduleID;
    schedule.desc = plansInfoText;
    scheduleArr.push(schedule);
    savePlans();
    displayEvents();
});