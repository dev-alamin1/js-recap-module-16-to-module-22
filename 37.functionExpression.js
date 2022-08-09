/* 
    1. function declaraton
    2. functon expression 
*/

//1. function decleration 

printF();

function printF()
{
    console.log("Printf is a output functon of C programming ");
}



//function expression 

// this will make an error
// cout(); 

// var  cout = function(){
//     console.log("cout is a output fuction in c++")
// }



/*
        যখন , ফাংশন শব্দের পরে কোন একটি নাম দিয়ে , সম্পুর্ন ভাবে ফাংশন তৈরী করা হয়,
        তখন সেটি ফাংশন ডিকলারেশন। 

        ফাংশন ডিকলারেশন করলে, ফাংশন কে আমরা ফাংশনের উপড়ে মানে, ফাংশন ডিকালারেশনের পুর্বেই  কল করতে পারবো। 

         ফাংশন এক্সপ্রেশন  বলতে , যখন একটি এনিনিউমাস ফাংশনকে একটি ভেরিয়েবলের 
         ভিতরে স্টোর করা হয় , তখন তাকে আমরা ফাংশন এক্সপ্রেশন বলতে পারি।
         ফাংশন এক্সপ্রেশন করলে, ফাংশনকে আমরা এক্সপ্রেশনের পুর্বে কল করতে পারবোনা। 
         কল করলে, এরর শো করবে। উপড়ে ঠিক এই জিনিস টাই ঘটে গেছে ।  এর সমাধান স্বরুপ , 
         ফাংশন এক্সপ্রেশন তৈরী করার পর , ফাংশন কল করেতে হয়।
*/




var  cout = function(){
    console.log("cout is a output fuction in c++")
}

cout(); // eta thik vabe kaj korbe, jodi expression create korar purbe call kortam
// tahole error dekhato
