/* ai file a , dekhano hoyece kivabe akti array er vitore, amra loop chaliye
 array er prottekta element er upor bivinno operaton korte pari .. jemon

 ***  array er element gulo print kora, 
 **** element gulor jog kora ,gun kora , 
 **** element gulo theke even , odd ber kora
 **** element gulor moddo theke boro othoba choto element ber kora 
 **** conditon sapeekkhe loop theke kichu element niye ,new akti loop er moddhe rakha...
 
*/


//4.find smallest number ( for ba while any loop )

/*
       1. Array theke largest ba smallest , je kono number e ber korte boluk na keno
        amader first kaj hobe, array er 0 number index er value k,
        largest ba smallest hisebe dhore neya..

        2.Er porer kaj hobe, loop chaliye sei largest ba smallest number ti ke,
        array er onno element (number) gulor sathe compare kora ..

        3. ekhane, smallestNumber = num3[0] dhore neya hoyece..
          er por, ai small number ke, array er baki number er sathe check kore dekha hoice, ai small er theke aro small  kono number ache kina..

          ak kothay, akjoner sathe onno der ak ak kore tulona kore dekha..
          j jokhon small number hobe, tokhon taare small bolte hobe.

          er porer tulonay dekha jete pare, onno akti number abar small hoye geche,
          tokhon sei number k small bolte hobe...

*/

let num3 =[185,25,32,60,50,650,5,10];
let smallestNumber = num3[0];

for(var b=1; b<num3.length; b++){
        let num = num3[b];
        if(num < smallestNumber){
            smallestNumber = num;
        }
}

console.log("smallest number is = ",smallestNumber);