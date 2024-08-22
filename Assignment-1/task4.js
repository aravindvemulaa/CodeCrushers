
// Task	4 Given	an	array,	print	the	sum	of	the	even	and	odd	numbers	in	the	array.
// Input          Expected	Output
//[3,4,5,12]     Even	Sum	=	16
//                Odd	Sum	=	8


let arr=[3,4,5,12];
let EvenSum=0;
let OddSum=0;
for(let i=0; i<arr.length;i++){
    if(arr[i]%2==0){
        EvenSum+=arr[i];
    }
    else if(arr[i]%2==1){
        OddSum+=arr[i];
    }
}
console.log(` Even Sum : ${EvenSum} \n OddSum :${OddSum}`);