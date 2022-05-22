let name = prompt("Adınızı giriniz: ");
let myName = document.querySelector("#myName");
myName.innerHTML = `${name}`;


function showTime() {
    let date = new Date();

    let day = date.getDay();

    if (day == 0) {
        day = "PAZAR";
    } else if (day == 1) {
        day = "P.TESİ";
    } else if (day == 2) {
        day = "SALI";
    } else if (day == 3) {
        day = "ÇARŞAMBA";
    } else if (day == 4) {
        day = "PERŞEMBE";
    } else if (day == 5) {
        day = "CUMA";
    } else if (day == 6) {
        day = "CUMARTESİ";
    }

    let myClock = document.querySelector(".clock");
    myClock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${day}`;
    setTimeout(showTime,1000);
}

showTime();
