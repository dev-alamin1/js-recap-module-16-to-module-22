/*
    array er moddhe joto nam thakbe, sob nam gulor length compare kore,
    sob theke boro length er nam ti output a print korte hobe

    first step idea : bestFriends[0].length *** ai vabe array er nam gulor length ber kora jabe.. er por length gulo diye compair korte hobe 

*/

const bestFriends =['niloy','rajib','arman ali'];

let maxLengthName = bestFriends[0];

for(let i=0; i<bestFriends.length; i++)
{
    let name = bestFriends[i];

    if(maxLengthName.length < name.length){
            maxLengthName = name;
    }
    
}

console.log(maxLengthName);