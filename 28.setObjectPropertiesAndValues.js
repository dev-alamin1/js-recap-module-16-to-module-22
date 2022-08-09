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


// set object propersties value
// 1. dot notation
// 2. square bracket


console.log("================================");
console.log("======== set value by using dot notation ==========");
console.log("=================================");

person.address = "rangpur"; // set adress propeties value

console.log(person)

    // name: 'Md.Al-amin Mondal',
    // age: 23,
    // student: true,
    // phone: '01765998482',
    // address: 'rangpur'



    console.log("================================");
    console.log("======== get value by using square brakcet ==========");
    console.log("=================================");

    person['name'] = "Anik Ahmad";
    person['student'] = false;
    person['age'] =22;

    console.log(person);

    // name: 'Anik Ahmad',
    // age: 22,
    // student: false,
    // phone: '01765998482',
    // address: 'rangpur'