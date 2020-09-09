var workDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    
]


//moments.js function to get the current date

function currentDay() {
    
    var toDay = moment().format('MMMM Do YYYY');
    $("#currentDay").text(toDay);
}
currentDay();

//dans session code

//for (i = 9; i < 17; i++) {
   // $(".container").append("<div id='hour' data-hour='"+i+"'>"+i+" </>");
   // var 

//}


//local storage function to save day plans typed in
function savePlans() {
    localStorage.setItem("workDay", JSON.stringify(workday));

}

function init() {
    var storedPlans = JSON.parse(localStorage.getItem("workday"));
    if (storedPlans) {
        workDay = storedPlans;
        savePlans();
    }
}
//display saved plans to the timeblock
// function displayPlans() {
//     workDay.forEach(function (_everyHour) {
//         $(`#${_everyHour.id}`).val(_everyHour.reminder);
//     })

//}
function everyHour() {
 for (i = 0; i < workDay.length; i++) {
        var timeRow = $("<form>").attr({"class": "row"});
        $(".container").append(timeRow);
 }
 var planByHour = $("div").attr({"class": "col-md-9 description p-0"});
 var planInfo = $("<textarea>");
 planByHour.append(planInfo);
 timeRow.append(planByHour);
 //$(".container").appendNode(planByHour);

}
everyHour();
 // creating timeblock rows

//  workDay.forEach(function(everyHour) {
//     var timeRow =  $("<form>").attr({"class": "row"});
//     $(".container").append(timeRow);

//     var hourBlock =  $("<div>")
//     .text(`${everyHour.hour}${everyHour.meridiem}`)
//     .attr({"class": "col-md-2 hour"});

