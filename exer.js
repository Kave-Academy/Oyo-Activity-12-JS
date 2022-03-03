// const hour = document.getElementById('hour');
// const minute = document.getElementById('minute');
// const seconds = document.getElementById('seconds');

// const clock = setInterval(function time () {
//     let dateToday = new Date();
//     let hr = dateToday.getHours();
//     let min = dateToday.getMinutes();
//     let sec = dateToday.getSeconds();

//     if (hr < 10) {
//         hr = '0' + hr;
//     }

//     if (min < 10) {
//         min = '0' + min;
//     }

//     if (sec < 10) {
//         sec = '0' + sec;
//     }

//     hour.textContent = hr;
// }, 1000);

function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    if(hrs > 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hr -12
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);