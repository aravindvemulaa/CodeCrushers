/*  Given	an	array	as	input,	convert	all	odd	numbers	in	the	array	to	the	nearest	
    even	number	greater	than	it.	Also,	print	the	array.
    Input                   Expected	Output
    [5,18,23,30]            [6,18,24,30]
    [5,7,9]                 [6,8,10]
    [72]                    [72]                    */

function convertOddtoEven(Array){
    for(let i=0; i<Array.length; i++){
        if(Array[i]%2==1){
            Array[i]+=1;
        }
    }
    console.log(Array);
}
convertOddtoEven([5,18,23,30]);


