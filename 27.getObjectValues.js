/* 
    Array তে একই ধরনের ডাটা নিয়ে কাজ করা হয়। তবে, সব সময় তো একই ধরনের ডাটা নিয়ে কাজ
    করা হবে না। সময়ের সাপেক্ষে ভিন্ন ভিন্ন ডাটা নিয়েও কাজ করতে হবে।
    Array ইনডেক্স অনুসারে কাজ করে। for, while, do while, for of লুপ ব্যবহার করা যায়।
    Array হলো ওয়ান কাইন্ড অফ object . 

    সেই জন্য আমরা অবজেক্ট ব্যবহার করতে পারি। অবজেক্ট নেম -> ভ্যালু পেয়ার বা প্রোপারটিজ -> ভ্যালু পেয়ারে কাজ করে। For in loop দিয়ে , object এ লুপের কাজ চালানো যায়। 
*/


// object declaration 

const person = {
    name    :'Md.Al-amin Mondal',
    age     : 23,
    student : true,
    phone   : "01765998482",
    address : "Ranpur ,Gaibandha"
}


// get object propertiese value by-->

   
console.log("================================");
console.log("======== get value by using dot notation ==========");
console.log("=================================");

// 1. dot notation
// 1. square bracket
// 3. Object.values
// 4. Object.keys
// 5. use loop

console.log(person.name) // dot notaion for access propersties value;
   
console.log("================================");
console.log("======== get value by using square bracket ==========");
console.log("=================================");

console.log(person['address']); // must be use quotation in square bracket


console.log("================================");
console.log("======== get value by using variable ==========");
console.log("=================================");

var propersties = 'name';
var properstieValue = person[propersties];
console.log(properstieValue)
 

console.log("================================");
console.log("======== get value by loop ==========");
console.log("=================================");

for(var i in person){
    var propersties = i; // ekhane, i dara object er key ba properties gulo bujhay..
    var value = person[propersties]; 
    // ekhane squere bracket er majh khane, properties likhe dilei , sei properties er value pawa jabe ... 
    //  person['phone']  upore evabei square bracket diye  value access kora hoice
    console.log(propersties,value)
    
}




console.log("================================");
console.log("======== Object.values and Object.keys ==========");
console.log("=========================");

console.log("Object all values ",Object.values(person))

console.log(" ");

console.log("Object all keys ",Object.keys(person))



console.log("================================");
console.log("======== another loop  ==========");
console.log("=========================");

for(var i in person){
    console.log(i+" => "+person[i]);
}

