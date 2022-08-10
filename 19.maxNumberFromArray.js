/* ai file a , dekhano hoyece kivabe akti array er vitore, amra loop chaliye
 array er prottekta element er upor bivinno operaton korte pari .. jemon

 ***  array er element gulo print kora, 
 **** element gulor jog kora ,gun kora , 
 **** element gulo theke even , odd ber kora
 **** element gulor moddo theke boro othoba choto element ber kora 
 **** conditon sapeekkhe loop theke kichu element niye ,new akti loop er moddhe rakha...
 
*/


//5.find max number ( for ba while any loop )

/*
       1. Array theke largest ba smallest , je kono number e ber korte boluk na keno
        amader first kaj hobe, array er 0 number index er value k,
        largest ba smallest hisebe dhore neya..

        2.Er porer kaj hobe, loop chaliye sei largest ba smallest number ti ke,
        array er onno element (number) gulor sathe compare kora ..

        3. ekhane, maxNumber = numSeries[0] dhore neya hoyece..
          er por, ai max number ke, array er baki number er sathe check kore dekha hoice, ai maxnumber er theke aro boro kono number ache kina..

          ak kothay, akjoner sathe onno der ak ak kore tulona kore dekha..
          j jokhon boro number hobe, tokhon taare boro bolte hobe.
          
          er porer tulonay dekha jete pare, onno akti number abar boro hoye geche,
          tokhon sei number k maxnumber bolte hobe...

*/

let numSeries =[185,25,32,60,50,650,5,10];
let maxNumber = numSeries[0];

for(var b=1; b<numSeries.length; b++){
        let num = numSeries[b];
        if(maxNumber <num ){
            maxNumber = num;
        }
}

console.log("Max number is = ",maxNumber);