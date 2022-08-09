/* ai file a , dekhano hoyece kivabe akti loop er vitore, amra loop chaliye
 loop er prottekta element er upor bivinno operaton korte pari .. jemon
 *** loop er element gulo print kora, 
 **** element gulor jog kora ,gun kora , 
 **** element gulo theke even , odd ber kora
 **** element gulor moddo theke boro othoba choto element ber kora 
 **** conditon sapeekkhe loop theke kichu element niye ,new akti loop er moddhe rakha...
 
*/


//5.find max number ( for ba while any loop )

let numSeries =[185,25,32,60,50,650,5,10];
let maxNumber = numSeries[0];

for(var b=1; b<numSeries.length; b++){
        let num = numSeries[b];
        if(maxNumber <num ){
            maxNumber = num;
        }
}

console.log("Max number is = ",maxNumber);