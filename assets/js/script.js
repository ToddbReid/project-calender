//today's date
let todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    //button listener
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        //save to the local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //current hours
        let timeNow = moment().hour();

        //loop the time blocks
        $("div[id*='block']").each(function () {
            let blockTime = parseInt($(this).find("div").data("id"))

            //check what the time is then add classes
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            };
        });
    };

    //Grab from local storage
    $("#block1 .description").val(localStorage.getItem("block1"));
    $("#block2 .description").val(localStorage.getItem("block2"));
    $("#block3 .description").val(localStorage.getItem("block3"));
    $("#block4 .description").val(localStorage.getItem("block4"));
    $("#block5 .description").val(localStorage.getItem("block5"));
    $("#block6 .description").val(localStorage.getItem("block6"));
    $("#block7 .description").val(localStorage.getItem("block7"));
    $("#block8 .description").val(localStorage.getItem("block8"));
    $("#block9 .description").val(localStorage.getItem("block9"));
    $("#block10 .description").val(localStorage.getItem("block10"));

    timeTracker();
});