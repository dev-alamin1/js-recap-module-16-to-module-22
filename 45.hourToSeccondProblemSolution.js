// khub easy problem 
// function er input hisebe hour nite hobe
// er por , se hour ke second a rupantor korte hobe

function hourTosec(hour){
        let second = hour*3600;
        // 1 ghonta = 3600 second 
        return second;
}

let hour = 4;
const second = hourTosec(hour);
console.log(second," second");