/*
        1.Function er parameter hisebe, akti array input korte hobe
        2.funtion er modde je array ti parameter hisebe pelam, 
            check kore dekhte hobe , sei array er moddhe kon gulo number bijor.. 

            kono number ke, 2 dara modulas korar por jodi vagses hisebe 0 thake, tokhon sei number ti Even(joor number),
            r jodi , vagsese 0 na thake, tokhon bujhte hobe , 
            number ti odd ( bijor number).
        

        3. akti condtion diye , array theke bijor number gulo niye,
        tader jogfol gulo ke akti variable a store kore rakha hoice..
        er por , sei variable ti ke , return kora hoice..

        
*/

function findOddSum(num)
{
	let sumOfOddNumber = 0;
		for(var i=0; i<num.length; i++)
    {
    		 if( num [i] %2 != 0 )
    	 	{
     				sumOfOddNumber = sumOfOddNumber + num[i];
     		}
    }
    
    return sumOfOddNumber;
}


let numberArray =[5, 7, 8, 10, 45, 30];
let oddNumberSum = findOddSum(numberArray);

console.log(oddNumberSum);