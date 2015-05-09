///////////////
// Problem 3 //
///////////////
// not very imaginative, but hopefully gets the point across

var view = {
    "daysOfWeek": [{
        "day": "Monday"
    }, {
        "day": "Tuesday"
    }, {
        "day": "Wednsday"
    }, {
        "day": "Thursday"
    }, {
        "day": "Friday"
    }, {
        "day": "Saturday"
    }, {
        "day": "Sunday"
    }]
};

var template = "Days of the Week<ul>{{#daysOfWeek}}" +
    "<li>{{day}}</li>" +
    "{{/daysOfWeek}}</ul>";

var rendered = Mustache.render(template, view);

document.querySelector('#target').innerHTML = rendered;