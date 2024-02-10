$(document).ready(function () {

    // set rate
    let rate = 10;
    $("#rate").html(`Rate:\t$${rate}`);

    // calculate function
    $("#calculateCharge").click(function () {

        // define variables
        let hours = parseFloat($("#hours").val());

        // only calculate if positive number
        if (hours > 0) {
            $("#charge").html(`Total Charge:\t${hours * rate}`);
        } else {
            // clear input, focus, and alert user
            $("#hours").val('');
            $("#hours").focus();
            alert("Please enter a positive number.");
        }
    });
});