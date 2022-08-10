// simple interset calculator

/*
     ekhane temon kono hard kichu nei..
     just , function ti 3ti prarameter receve korbe,
     1. principal (koto taka )
     2. rate ( hajare ba 100 te koto % lav dite hobe)
     3. koto din time
*/

function siCalculator(principal,rate,time)
{
            var simpleInterset = principal * (rate/100)*time;
     return simpleInterset;
}

let principal =4000;
let rate =7;
let time =2;

let simpleInterset = siCalculator(principal,rate,time);
console.log(simpleInterset);