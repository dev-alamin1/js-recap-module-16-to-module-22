 // compound interset calculator

/*
     Ekhane temon kono hard kichu nei..
     just , function ti 3ti prarameter receve korbe,
     1. principal (koto taka )
     2. rate ( hajare ba 100 te koto % lav dite hobe)
     3. koto din time

     Math.pow(mulnumber , mulnumber er upor koto power diben);
*/

 function ciCalculator(principal,rate,time)
 {
 			var ciInterset = principal*Math.pow((1 + rate/100),time)-principal;
      return Math.round(ciInterset);
 }
 
 let principal =4000;
 let rate =7;
 let time =2;
 
 let ciInterset = ciCalculator(principal,rate,time);
 console.log(ciInterset);