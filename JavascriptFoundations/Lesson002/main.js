var aqGym = aqGym || {};
aqGym.lesson2 = aqGym.lesson2 || {};

///////////////
// Problem 2 //
///////////////
aqGym.lesson2.containsString = function(mainString, searchString) {
    return mainString.indexOf(searchString) === -1 ? false : true;
};

console.log(aqGym.lesson2.containsString("independent", "depend")); // this line should log true
console.log(aqGym.lesson2.containsString("independent", "indy")); // this line should log false

///////////////
// Problem 3 //
///////////////
aqGym.lesson2.months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

aqGym.lesson2.getMonth = function(monthNumber) {
    return this.months[monthNumber - 1];
};

console.log(aqGym.lesson2.getMonth(3)); //this should log "March"

///////////////
// Problem 4 //
///////////////
var user = {
    firstName: "Marc",
    lastName: "Christophe",
    email: "m@xtof.net"
};

aqGym.lesson2.logUserInfo = function(user) {
    console.log(user.firstName + " " + user.lastName + ": " + user.email);
};

aqGym.lesson2.logUserInfo(user);

///////////////
// Problem 5 //
///////////////
document.addEventListener("keyup", function(e) {
    var value = String.fromCharCode(e.which);
    if (value === "Y")
        console.log("Yes");
    else if (value === "N")
        console.log("No");
    else {
        console.log("I don't understand");
    }
});