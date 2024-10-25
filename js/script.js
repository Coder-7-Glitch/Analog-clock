let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');
setInterval(() => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    hrs.style.transform = `rotate(${hRotation}deg)`;
    mins.style.transform = `rotate(${mRotation}deg)`;
    secs.style.transform = `rotate(${sRotation}deg)`;
}, 1000);