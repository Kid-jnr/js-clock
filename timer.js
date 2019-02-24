
/// TRYING TO MODULARIZE MY CODE, WELL I GET BETTER EVERYDAY :D

timer = (function (){

    /// SELECTING ELEMENTS
    var minText = document.querySelector('.timer-wrapper .mins');
    var secText = document.querySelector('.timer-wrapper .secs');
    var millText = document.querySelector('.timer-wrapper .mill');
    var toggleBtn = document.querySelector('.alert-timer .toggle');

    var time = 0;
    var interval;
    var baseTime;
    timerOn = false;


    /// PRIVATE AND PUBLIC FUNCTIONS
    var startTimer = function() {

        if (timerOn == false) {
            baseTime = Date.now();
            interval = setInterval(_update, 10);
            timerOn = true;
            toggleBtn.textContent = "stop";
        } else if ( timerOn == true){
            stopTimer();
        }
    };
    
    var stopTimer = function() {

        clearInterval(interval);
        interval = null ;
        timerOn = false;   
        toggleBtn.textContent = "start" ;       
    
    };

    var resetTimer = function(){
        if (timerOn == false) {       
            time = 0;
            _update();
        }
    };

    var _timeDiff = function() {

        var now = Date.now();
        var timePassed = now - baseTime;
        baseTime = now;
        return timePassed;
        
    };

    var _hookToHtml = function(formatted){
        minText.textContent = formatted.mins;
        secText.textContent = formatted.secs;
        millText.textContent = formatted.milli;
    };

    var _update = function(){
        if (timerOn == true) {
            time += _timeDiff();
        }

        formattedTime = _timeFormatter(time);
        _hookToHtml(formattedTime);

    };

    var _timeFormatter = function(timeInMill){

        var time = new Date(timeInMill);   //// THIS TIME VARIABLE IS DIFF FROM THE MAIN ONE CUS ITS SCOPED TO A FUNCTION
        var mins = time.getMinutes().toString();
        var secs = time.getSeconds().toString();
        var milli = time.getMilliseconds().toString();

        if (mins.length < 2) {
            mins = '0' + mins;
        }

        if (secs.length < 2) {
            secs = '0' + secs;
        }

        return{
            mins, secs ,milli
        };

    }

    return{

        /// RETURNING PUBLIC FUNCTIONS 
        startTimer: startTimer,
        resetTimer: resetTimer,
        stopTimer: stopTimer
    }

})()

