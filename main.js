// Buttons document
var start = document.getElementById('start');
var reset = document.getElementById('reset');
// Time document
var h = document.getElementById('hour');
var m = document.getElementById('minute');
var s = document.getElementById('sec');
// Audios document
var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

// Store a reference to the variable
var startTimer = null;

function timer(){
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 0;
        m.value = 0;
        s.value = 0;
        bell.play();
    } else if (s.value != 0) {
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

function stopTimer(){
    clearInterval(startTimer)
}

// Functions event
start.addEventListener('click', function() {
    // Initialize the variable startTimer
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    // launch function
    startInterval()
})

reset.addEventListener('click', function() {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer();
    click.play();
})