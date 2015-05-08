var distanceInput = document.getElementById("distance"),
    hoursInput = document.getElementById("hours"),
    minutesInput = document.getElementById("minutes"),
    secondsInput = document.getElementById("seconds"),
    calculateBtn = document.getElementById("calculate_btn"),
    paceText = document.getElementById("pace");

///////////////
// Problem 3 //
///////////////
function validateInput(numVal, inputElem) {
    if (isNaN(numVal)) {
        inputElem.style.borderColor = "red";
        return false;
    } else {
        inputElem.style.borderColor = "initial";
        return true;
    }
}

calculateBtn.addEventListener("click", function() {
    var miles = parseFloat(distanceInput.value),
        hours = parseFloat(hoursInput.value),
        minutes = parseFloat(minutesInput.value),
        seconds = parseFloat(secondsInput.value);

    /////////////////////////
    // Problem 3 Continued //
    /////////////////////////
    if (!(validateInput(miles, distanceInput) &&
            validateInput(hours, hoursInput) &&
            validateInput(minutes, minutesInput) &&
            validateInput(seconds, secondsInput))) {
        return;
    }

    var totalMinutes = hours * 60 + minutes + seconds / 60,
        pace = totalMinutes / miles,
        paceMinutes = Math.floor(pace),
        paceSeconds = Math.round((pace - paceMinutes) * 60);

    if (paceSeconds < 10) {
        paceSeconds = "0" + paceSeconds;
    }

    paceText.textContent = "You need to run " + paceMinutes + ":" + paceSeconds + " minutes per mile";
});