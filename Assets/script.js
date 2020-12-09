$(document).ready(function() {

    const test = false;


//Time from moment
    const now = moment().format('MMMM Do YYYY');

// set times for 24 hours
    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');

    if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
    }

    let $dateHeading = $('#jumbotron');
    $dateHeading.text(now);





}