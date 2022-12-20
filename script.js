const hourE = document.getElementById("hours");
const minutE = document.getElementById("minutes");
const secE = document.getElementById("seconts");
const ampmE = document.getElementById("ampm");

function UpdateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    var ampm = "AM"
    if (h>12){
        h = h - 12;
        ampm = "PM"
    }
    hourE.innerHTML=h;
    minutE.innerHTML=m;
    secE.innerHTML=s;
    ampmE.innerHTML = ampm;
    setTimeout(()=>{
       UpdateClock()
    },1000)
}

    UpdateClock();
