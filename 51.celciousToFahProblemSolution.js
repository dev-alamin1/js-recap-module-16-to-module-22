/*
        Function a input hisebe celcious er value dite hobe.
        function er kaj hobe, celcious valu ke, fahrenheit a convert kora and return kore dey...

        r ekhane , formul ti mone na thakle, google theke ber kore neya jabe...
*/


function celciousTofahrenheit(celcious){
			
    let fahrenheit = (celcious* 9/5) + 32 ;
    return fahrenheit;
    
}

let celcious = 0;
let fahrenheit = celciousTofahrenheit(celcious);
console.log(fahrenheit);