// 1.add paramenter in function
// 2. handle multiple params

function greet(msg)
{
    console.log(msg);
}

greet("Welcome to functin params");// function call , then pass argument 


console.log("================================");
console.log("======== add multiple params ==========");
console.log("=================================");

// dd multiple params a

function fullName(firstName,lastName){
        let fullName = firstName.concat(" ",lastName);
        return fullName; // value return korle, sei value k, function er baire, akti variable er moddhe store korte hoy.. erpor sei variable k, console log korte hoy..
}

let yourName = fullName("Al-amin","Mondal"); // arugument pathalam and return er value o accepet korlam name variable er moddhe..

// console.log

console.log(yourName);


console.log("================================");
console.log("======== Default params ==========");
console.log("=================================");

// 3. default প্যারমিটার ।
// এর সুবিধা হলো, আপনি ফাংশন কল করার সময়, যদি আরগুমেন্ট নাও পাঠান সেই ক্ষেত্রে ,
// আমরা ডিফল্ট ভাবে যে প্যারিমিটার দিয়ে রাখবো ,তার ভ্যালুটি ফাংশনে ইউজ হবে।
// আর যদি , আরগুমেন্ট হিসেবে ভ্যালু ফাংশনে পাঠিয়ে দেই, তাহলে ডিফল্ট প্যারামিটার এর মান বা ভ্যালু টি ব্যবহার হবে না। 

function addTwoNumber(firstNumber, secondNumber =10 ){
     let sum = firstNumber + secondNumber;
     return sum;
}

let result = addTwoNumber(10); // এই খানে, সেকেন্ড নাম্বার এর ভ্যালু আরগুমেন্ট হিসেবে না দিলেও সমস্যা হবে না। কারন, আমরা ডিফল্ট ভাবেই ,প্যারামিটারে একটি মান সেট করে রেখছি।
// যদি, এখান থেকে সেকেন্ড নাম্বার এর আরগুমেন্ট পাঠাতাম তাহলে, ডিফল্ট ভাবে ১০ সেট করা মানটি আর ব্যবহার হত না। নতুন মানটি ব্যবহার হবে তখন । 
console.log(result);



console.log("================================");
console.log("======== rest params ==========");
console.log("=================================");


// ৪। রেস্ট প্যারামিটার( যদি অসংখ্য আরগুমেনট পাঠানো হয়, তাহলে? )
 
// যদি অনেক গুলো আরগুমেনট ফাংশনে পাঠানো হয়, তখন ম্যানুয়ালি হ্যান্ডেল করা ঝামেলা পুর্ন হয়।
// তখন আমরা চাইলে ,রেস্ট প্যারামিটার ব্যবহার করতে পারব। রেস্ট প্যারামিটার, একটি এরে এর মত আচরন করে। তাই এরে এর যত মেথড আছে, সেগুলো রেস্ট প্যারামিটারে ব্যবহার করা জাবে।

function inifinityParams(...numberArry){
       
    for(var i=0; i<numberArry.length; i++)
    {
        console.log(numberArry[i]);
    }
}

inifinityParams(2,4,5,67,23,65,7,54,5,587,3,7,8,4,85,27,5,85452);