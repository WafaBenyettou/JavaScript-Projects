const Days = document.getElementById('Days');
const Hours = document.getElementById('Hours');
const Minutes = document.getElementById('Minutes');
const Seconds = document.getElementById('Seconds');

const year = new Date().getFullYear();


const newYear = new Date(`December 01 ${year + 1} 00:00:00`);


function CountDown(){

    const currentTime = new Date();
    const difference = newYear - currentTime;


    const d = Math.floor(difference / 1000 / 60 / 60 / 24);
    const h = Math.floor(difference /1000 / 60 / 60) % 24;
    const m = Math.floor(difference / 1000 / 60 )%60;
    const s = Math.floor(difference/1000)%60;

    Days.innerHTML=d;
    Hours.innerHTML = h < 10 ? '0' +h : h;
    Minutes.innerHTML = m < 10 ? '0' +m : m;
    Seconds.innerHTML = s < 10 ? '0' +s : s;
}

setInterval(CountDown, 1000);