/*
        LeapYear niye, 41 number js file a bistarito bola ace..
*/

function findLeapYear(years)
{
    let newLeapYear =[];
    for(var i=0; i<years.length; i++)
    {
    		let year = years[i];
        
        if(year % 400 == 0 || (year % 4 == 0 && year % 100 !=0))
        {
        	 newLeapYear.push(year);
        }
    }
    
    return newLeapYear;
}

let years =[2023,2024,2025,2028,2030];
const leapYear = findLeapYear(years);
console.log(leapYear);