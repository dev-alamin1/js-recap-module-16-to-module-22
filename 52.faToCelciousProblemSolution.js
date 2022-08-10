/*
        Function a input hisebe fahrenheit er value dite hobe.
        functin er kaj hobe, fahrenheit valu ke, celcious a convert kora and return kore dey...

        r ekhane , formul ti mone na thakle, google theke ber kore neya jabe...
*/

function faTocelcious(fahrenheit){
			
    let celcious = (fahrenheit-32)*5/9;
    return celcious.toFixed(2); // point er pore jeno 2 ghor man pai
    
}

let fahrenheit = 0;
let celcious = faTocelcious(fahrenheit);
console.log(celcious);