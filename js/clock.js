(function () {

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hoursOffset = new Date().getTimezoneOffset();

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total < 0) {
      //clearInterval(timeinterval);
      t.total = t.total;
      t.days = 0 - t.days - 1;
      t.hours = 0 - t.hours - 1;
      t.minutes = 0 - t.minutes - 1;
      t.seconds = 0 - t.seconds;
      // change record breaking text to indicate the race is afoot
      var introText = clock.querySelector('.introText');
      introText.innerHTML = "RECORD ATTEMPT HAS BEEN GOING FOR";
    }

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.UTC(2016, 3, 24, 13, 0, 0, 0));

initializeClock('clockdiv', deadline);

}());
