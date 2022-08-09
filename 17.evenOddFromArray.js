/* ai file a , dekhano hoyece kivabe akti loop er vitore, amra loop chaliye
 loop er prottekta element er upor bivinno operaton korte pari .. jemon
 *** loop er element gulo print kora, 
 **** element gulor jog kora ,gun kora , 
 **** element gulo theke even , odd ber kora
 **** element gulor moddo theke boro othoba choto element ber kora 
 **** conditon sapeekkhe loop theke kichu element niye ,new akti loop er moddhe rakha...
 
*/


//3.element gulo theke even , odd ber kora ( for ba while any loop )

let num =[10,20,30,40,50,60,5,10];

let i=0;
while(i<num.length)
{
    if(num[i]%2 == 0){
        console.log(num[i]," is even number ");
    }else{
        console.log(num[i]," is odd nuber ")
    }

    i++;
}


console.log("================================");
console.log("======== another way (do while loop ) ==========");
console.log("=================================");

let num2 =[283,4,8,7,521,57,84154,525,52215];

let a=0;

do{
    if(num2[a]%2 == 0){
        console.log(num2[a]," is even number ");
    }else{
        console.log(num2[a]," is odd nuber ")
    }
    a++;
}while(a<num2.length);




console.log("================================");
console.log("======== another way (for loop ) ==========");
console.log("=================================");


let num3 =[185,25,32,60,50,650,5,10];
let b =0;

for(b; b<num3.length; b++){

    if(num3[b]%2 == 0){
        console.log(num3[b]," is even number ");
    }else{
        console.log(num3[b]," is odd nuber ")
    }

    b++;
}