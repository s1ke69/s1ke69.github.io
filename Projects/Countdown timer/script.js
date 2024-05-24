const Daysel= document.getElementById("Days");
const Hoursel = document.getElementById("Hours");
const Minsel = document.getElementById("Mins");
const Secssel = document.getElementById("Secs");


const newYears = '16 Nov 2024';



function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate)/1000
    const Days= Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/60/60)%24;
    const Mins = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;


    Daysel.innerHTML = Days;
    Hoursel.innerHTML = formatTime(hours);
    Minsel.innerHTML = formatTime(Mins);
    Secssel.innerHTML = formatTime(seconds);

    // console.log(Days);
    // console.log(seconds)
    // console.log(Mins);
    // console.log(hours);
}
//Initial Call
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown,1000);
