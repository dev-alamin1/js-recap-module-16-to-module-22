/*
        1. function name hobe fullName
        2. parameter thakbe 2ti, 
        3. first parameter , tomar namer frist part input nebe
        4. second parameter , tomar namer last part input hibese nebe
        5. funtion er kaj hobe, tomar namer first ,last part ke concat kore 
        akta full name return kora..
*/

function fullName(nameFirstPart,nameLastPart)
{
        let full_name = nameFirstPart.concat(" ",nameLastPart);
        // ekhane , simple + diye concat kora o jeto
        return full_name;
}

let myName = fullName("Al-amin","Mondal");
console.log(myName);