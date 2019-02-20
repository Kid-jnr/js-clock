

window.onload=function(){
    
    setTimeout(
        function(){
            document.querySelector('.pre-loader-bg').style.opacity = '0';
            
        }, 2000);

        setTimeout(
            function(){
                document.querySelector('.pre-loader-bg').style.display = 'none';
                
            }, 5000);

};



/// SELECTING REQUIRED ELEMENTS, THIS METHOD MAKES THINGS EASIER
/// AND IS MEMORY EFFECIENT SAYS THE JS LORDS XD

const clock = {

    /// FOR THE CLCOK
    hours: document.querySelector('.clock-wrapper .hour-wrapper'),
    mins: document.querySelector('.clock-wrapper .min-wrapper'),
    secs: document.querySelector('.clock-wrapper .sec-wrapper'),

    /// FOR DAY MONTHS AND DATE
    day: document.querySelector('.date-wrapper .day'),
    date: document.querySelector('.date-wrapper .date'),
    month: document.querySelector('.date-wrapper .month'),

    /// FOR TIME OF THE DAY LIKE MORNING, AFTERNOON ETC AND ALSO FOR VISITORS NAME
    timeOfDay: document.querySelector('.message .time'),
    name: document.querySelector('.message .name'),

    /// FOR ANIMATION
    item0: document.querySelector('.time-animation .item-0'),
    item1: document.querySelector('.time-animation .item-1'),
    item2: document.querySelector('.time-animation .item-2'),
    sunMoon: document.querySelector('.time-animation .sun-moon'),

}

function tickTok(){
    let date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    y = date.getFullYear();
    day = date.getDay();
    dayDate = date.getDate();
    month = date.getMonth();

    days = [ 'sunday' ,'monday', 'tuesday', 'wednesday', 'thursday','friday', 'saturday',];
    months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
    dayGreetings = ['morning', 'afternoon', 'evening', 'night'];

    // CHECK THE TIME AND GREET OUR NINJA ACCORDINGLY 

    if ( h < 12) {  /// MORNING TIME
        clock.timeOfDay.textContent = 'morning';

    } else if (h >= 12 && h < 18 ) {  /// AFTERNOON TIME
        clock.timeOfDay.textContent = 'afternoon';

    } else {  /// NIGHT TIME
        clock.timeOfDay.textContent = 'night';
    }
    
    // CHECK THE TIME AND CHANGE ANIMATION TO SUIT TIME OF THE DAY  

    if ( h < 8 ) {  /// MORNING TIME
        clock.sunMoon.style.backgroundImage = "url('./images/night.png')";
        clock.sunMoon.style.backgroundSize = 'cover';
        clock.item0.style.backgroundImage = "url('./images/dark-cloud.png')";
        clock.item1.style.display = 'none';
        clock.item2.style.backgroundImage = "url('./images/dark-cloud.png')";

    } else if ( h >= 8 && h < 18) {  /// AFTERNOON TIME
        clock.sunMoon.style.backgroundImage = "url('./images/sun.png')";
        clock.sunMoon.style.backgroundSize = 'contain';
        clock.item0.style.backgroundImage = "url('./images/cloud2.png')";
        clock.item1.style.display = 'grid';
        clock.item1.style.backgroundImage = "url('./images/cloud2.png')";
        clock.item2.style.backgroundImage = "url('./images/cloud2.png')";


    } else {  /// NIGHT TIME
        clock.sunMoon.style.backgroundImage = "url('./images/night.png')";
        clock.sunMoon.style.backgroundSize = 'cover';
        clock.item0.style.backgroundImage = "url('./images/dark-cloud.png')";
        clock.item1.style.display = 'none';
        clock.item2.style.backgroundImage = "url('./images/dark-cloud.png')";

    }

    function addZero(param){

        if (param < 10) {
             return `0${param}`;

        } else {

            return param;
        }

    }

    /// HOOKING THE TIME TO THE DOM
    clock.hours.textContent = addZero(h);    
    clock.mins.textContent = addZero(m);   
    clock.secs.textContent = addZero(s);   
    clock.day.textContent = days[day];
    clock.date.textContent = dayDate;
    clock.month.textContent = months[month];
}

setInterval(() => {
    tickTok()
 }, 1000);


// ALERT BOXES SCRIPT POPULATE THIS AREA TREAD WITH CAUTION XD


function modalRemove(e){
    let gridBox = e.parentNode;
    let gridBoxOverlay = document.querySelector('.css-grid-alert-overlay');
    
    gridBox.classList.remove('show-alert-fade');
    gridBoxOverlay.classList.add('hide-alert-fade');

    setTimeout(
        function(){
            gridBox.style.display = 'none';
            gridBoxOverlay.style.display = 'none';

        }, 300
    );


}

function alertInfo(){
    let gridBoxOverlay = document.querySelector('.css-grid-alert-overlay');
    let alartElem = document.querySelector('.alert-info');

    alartElem.style.display = 'grid';
    gridBoxOverlay.style.display = 'grid';

    setTimeout(
        function(){
            alartElem.classList.add('show-alert-fade');
            gridBoxOverlay.classList.remove('hide-alert-fade');

        }, 300);

}

function alertSettings(){
    let gridBoxOverlay = document.querySelector('.css-grid-alert-overlay');
    let alartElem = document.querySelector('.alert-settings');

    alartElem.style.display = 'grid';
    gridBoxOverlay.style.display = 'grid';

    setTimeout(
        function(){
            alartElem.classList.add('show-alert-fade');
            gridBoxOverlay.classList.remove('hide-alert-fade');

        }, 300);

}


function alertTimer(){
    let gridBoxOverlay = document.querySelector('.css-grid-alert-overlay');
    let alartElem = document.querySelector('.alert-timer');

    alartElem.style.display = 'grid';
    gridBoxOverlay.style.display = 'grid';

    setTimeout(
        function(){
            alartElem.classList.add('show-alert-fade');
            gridBoxOverlay.classList.remove('hide-alert-fade');

        }, 300);

}

function changeName(){
    let newName = document.querySelector('.alert-settings input').value;

    if(newName !== '' && newName.length > 3){
        clock.name.textContent = newName;
    } else {

        alert("please input your name must be 4 char long");
    }
}


let closeBtn = document.querySelectorAll('.icon-cancel-circled-2');
closeBtn.forEach( function(elem){
    elem.addEventListener('click', function(){  modalRemove(this) ;}, false );
})

