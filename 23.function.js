/*
        ai file er moddhe, 
        1. how to declare a function
        2. call function 
        3. function vs loop
*/

// 1. declare a function

function printSomething(){
    console.log("Hi there i, am function... Nice to meet you ")
}

printSomething(); // 2. function call

// function inside a loop

for(var i=0; i<10;i++){
    printSomething(); // function ti ak sathe 10bar kaj korbe ...
}

// loop in function 

function printMyName(){
    for(var i =1; i<=5; i++){
        console.log("Hi there , I am Md.Al-amin .. I am a babay WebDeveleoper..");
    }
}

printMyName();

/*
    ফাংশন , আপনাকে যে কোন একটি বা একাধিক ধরনের কাজ করে দিতে পারবে একবার।
    ফাংশন কে বার বার রিইউজ করা জাবে। একটি ফাংশন দিয়ে একাধিক বার একই ধরনের কাজ করেতে
    গেলে, বার বার ফাংশন কে কল করতে হবে । 

    আমরা চাইলে, একটি লুপের ভিতরে ফাংশন কে কল করে দিতে পারি, তখন লুপ আমাদের হয়ে
    ফাংশনের কাছ থেকে নির্দিষ্ট সংখ্যক বার সেই কাজটি সম্পাদন করে নেবে।।

    আবার চাইলে, একটি ফাংশনের ভেতরেও আমরা লুপ তৈরী করে দিতে পারি। এতে করে, ফাংশনকে 
    জাস্ট একবার কল করলেই , নির্দিষ্ট সংখ্যক বার কাজটি করে ফেলবে।
*/