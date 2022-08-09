/* ai file a , dekhano hoyece kivabe akti loop er vitore, amra loop chaliye
 loop er prottekta element er upor bivinno operaton korte pari .. jemon
 *** loop er element gulo print kora, 
 **** element gulor jog kora ,gun kora , 
 **** element gulo theke even , odd ber kora
 **** element gulor moddo theke boro othoba choto element ber kora 
 **** conditon sapeekkhe loop theke kichu element niye ,new akti loop er moddhe rakha...
 
*/


//4.find smallest number ( for ba while any loop )

let num3 =[185,25,32,60,50,650,5,10];
let smallestNumber = num3[0];

for(var b=1; b<num3.length; b++){
        let num = num3[b];
        if(num < smallestNumber){
            smallestNumber = num;
        }
}

console.log("smallest number is = ",smallestNumber);