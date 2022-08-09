/*
	প্রথমে একটি অ্যারে তৈরী করতে হবে।
	এর পর অ্যারে থেকে বিজোড় সংখ্যা গুলো বের করার কন্ডিশন লিখতে হবে।
	যদি কন্ডিশন সত্য হয় তাহলে, বিজোড় সংখ্যা গুলোর যোগ ফল নির্নয় করা হবে।
	
	লুপ থেকে কোন কিছু যোগ করতে গেলে, আগে থেকে সাম এর মান জিরো সেট করে নিতে হয়।
	আর যদি গুনের কাজ করি, তাহলে গুনের ভ্যালু ১ দিতে হয়। 
*/

var numSeries = [1,2,4,6,7,5,9,11];

var sum =0;

for(i of numSeries){
	
    if(i%2 != 0){
        sum += i;
    }
	// যদি কোন সংখ্যা ২দ্বারা ভাগ করার পর , নিঃশেষে বিভাজ্য না হয়, তখন সংখ্যাটিকে বিজোড় বলা হয়। 
}

console.log("Odd number sum is = ",sum);