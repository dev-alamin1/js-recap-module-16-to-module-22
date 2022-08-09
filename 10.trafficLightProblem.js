// trafic signal rule : when green , then go... when red then try to cross it will danger, 
// when yellow then dont go, just stop.. 

let trafficSignal = "red";
//if else diye solve kora jabe, switchcase diyeo solve kora jabe

if( trafficSignal == "red")
{
    console.log("Don't cross, It's danger");
}
else if(trafficSignal == "yellow")
{
    console.log("Just stop here and wait");
}
else{
    console.log("Go anywhere... bye ");
}